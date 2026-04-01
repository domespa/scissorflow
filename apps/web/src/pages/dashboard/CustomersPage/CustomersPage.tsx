import { useState, useEffect } from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  CaretRightIcon,
  ScissorsIcon,
  ClockIcon,
  XIcon,
  EnvelopeIcon,
  PhoneIcon,
  ProhibitIcon,
  LockOpenIcon,
  WarningIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import {
  customerService,
  type CustomerSummary,
  type CustomerDetail,
} from "@/services/customer.service";
import { formatDateOnly, formatTimeIT } from "@/lib/utils";

const statusLabel: Record<string, { label: string; color: string }> = {
  CONFIRMED: {
    label: "Confermata",
    color:
      "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
  },
  COMPLETED: {
    label: "Completata",
    color: "text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800",
  },
  CANCELLED: {
    label: "Cancellata",
    color: "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
  },
  NO_SHOW: {
    label: "No show",
    color:
      "text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
  },
  PENDING: {
    label: "In attesa",
    color:
      "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
  },
};

export const CustomersPage = () => {
  const [activeTab, setActiveTab] = useState<
    "clienti" | "noshow" | "blacklist"
  >("clienti");
  const [customers, setCustomers] = useState<CustomerSummary[]>([]);
  const [blockedCustomers, setBlockedCustomers] = useState<CustomerSummary[]>(
    [],
  );
  const [blacklist, setBlacklist] = useState<
    {
      id: string;
      email: string | null;
      phone: string | null;
      reason: string | null;
      createdAt: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] =
    useState<CustomerDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // BLOCCO MANUALE
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [blockForm, setBlockForm] = useState({
    email: "",
    phone: "",
    reason: "",
  });
  const [blockLoading, setBlockLoading] = useState(false);
  const [blockError, setBlockError] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      setLoading(true);
      const [c, b, bl] = await Promise.all([
        customerService.getCustomers(),
        customerService.getBlockedCustomers(),
        customerService.getBlacklist(),
      ]);
      setCustomers(c);
      setBlockedCustomers(b);
      setBlacklist(bl);
    } catch {
      console.error("Errore caricamento clienti");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCustomer = async (customerId: string) => {
    try {
      setDetailLoading(true);
      const data = await customerService.getCustomerDetail(customerId);
      setSelectedCustomer(data);
    } catch {
      console.error("Errore caricamento cliente");
    } finally {
      setDetailLoading(false);
    }
  };

  const handleUnblock = async (customerId: string) => {
    try {
      await customerService.unblockCustomer(customerId);
      await loadAll();
    } catch {
      console.error("Errore sblocco cliente");
    }
  };

  const handleBlockManual = async () => {
    if (!blockForm.email && !blockForm.phone) {
      setBlockError("Inserisci almeno email o telefono.");
      return;
    }
    setBlockLoading(true);
    setBlockError("");
    try {
      if (activeTab === "blacklist") {
        await customerService.addToBlacklist(
          blockForm.email || undefined,
          blockForm.phone || undefined,
          blockForm.reason || undefined,
        );
      } else {
        await customerService.blockCustomerManual(
          blockForm.email || undefined,
          blockForm.phone || undefined,
        );
      }
      setBlockModalOpen(false);
      setBlockForm({ email: "", phone: "", reason: "" });
      await loadAll();
    } catch {
      setBlockError(
        activeTab === "blacklist"
          ? "Errore durante l'aggiunta alla blacklist."
          : "Nessun cliente trovato con questi recapiti.",
      );
    } finally {
      setBlockLoading(false);
    }
  };

  const handleRemoveBlacklist = async (blacklistId: string) => {
    try {
      await customerService.removeFromBlacklist(blacklistId);
      await loadAll();
    } catch {
      console.error("Errore rimozione blacklist");
    }
  };

  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.firstName.toLowerCase().includes(q) ||
      c.lastName.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.includes(q)
    );
  });

  const filteredBlocked = blockedCustomers.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.firstName.toLowerCase().includes(q) ||
      c.lastName.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.includes(q)
    );
  });

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Clienti
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
          Gestisci i tuoi clienti e i no-show
        </p>
      </div>

      {/* TAB */}
      <div className="flex gap-1 border-b border-gray-200 dark:border-gray-700">
        <button
          type="button"
          onClick={() => setActiveTab("clienti")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all -mb-px ${
            activeTab === "clienti"
              ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          <UserIcon size={16} weight="duotone" />
          Clienti
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${activeTab === "clienti" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}`}
          >
            {customers.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("noshow")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all -mb-px ${
            activeTab === "noshow"
              ? "border-orange-500 text-orange-600 dark:text-orange-400"
              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          <ProhibitIcon size={16} weight="duotone" />
          No-show
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${activeTab === "noshow" ? "bg-orange-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}`}
          >
            {blockedCustomers.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("blacklist")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all -mb-px ${
            activeTab === "blacklist"
              ? "border-red-500 text-red-600 dark:text-red-400"
              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          <WarningIcon size={16} weight="duotone" />
          Blacklist
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${activeTab === "blacklist" ? "bg-red-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}`}
          >
            {blacklist.length}
          </span>
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <MagnifyingGlassIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Cerca per nome, email o telefono..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
          />
        </div>
        {(activeTab === "noshow" || activeTab === "blacklist") && (
          <button
            type="button"
            onClick={() => {
              setBlockModalOpen(true);
              setBlockError("");
              setBlockForm({ email: "", phone: "", reason: "" });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors shrink-0"
          >
            <PlusIcon size={16} weight="bold" />
            Aggiungi
          </button>
        )}
      </div>

      {/* TAB CLIENTI */}
      {activeTab === "clienti" &&
        (filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <UserIcon
              size={40}
              weight="duotone"
              className="text-gray-300 dark:text-gray-700 mb-3"
            />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {search ? "Nessun cliente trovato" : "Nessun cliente ancora"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filtered.map((customer) => (
              <button
                key={customer.id}
                onClick={() => handleSelectCustomer(customer.id)}
                className="flex items-center gap-4 px-4 py-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {customer.firstName[0]}
                    {customer.lastName[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {customer.firstName} {customer.lastName}
                  </p>
                  <div className="flex items-center gap-3 mt-0.5">
                    {customer.email && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {customer.email}
                      </span>
                    )}
                    {customer.phone && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {customer.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {customer.totalBookings} visite
                  </p>
                  {customer.lastBookingAt && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      Ultima: {formatDateOnly(customer.lastBookingAt)}
                    </p>
                  )}
                </div>
                <CaretRightIcon
                  size={16}
                  className="text-gray-300 dark:text-gray-700 shrink-0"
                />
              </button>
            ))}
          </div>
        ))}

      {/* TAB NO-SHOW */}
      {activeTab === "noshow" &&
        (filteredBlocked.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ProhibitIcon
              size={40}
              weight="duotone"
              className="text-gray-300 dark:text-gray-700 mb-3"
            />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {search ? "Nessun cliente trovato" : "Nessun cliente bloccato"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filteredBlocked.map((customer) => (
              <div
                key={customer.id}
                className="flex items-center gap-4 px-4 py-3.5 bg-white dark:bg-gray-900 rounded-xl border border-orange-100 dark:border-orange-900/30"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                  <ProhibitIcon
                    size={18}
                    weight="duotone"
                    className="text-orange-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {customer.firstName} {customer.lastName}
                  </p>
                  <div className="flex items-center gap-3 mt-0.5">
                    {customer.email && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {customer.email}
                      </span>
                    )}
                    {customer.phone && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {customer.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0 mr-2">
                  <p className="text-xs font-semibold text-orange-500">
                    {customer.noShows} no-show
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleUnblock(customer.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors shrink-0"
                >
                  <LockOpenIcon size={14} weight="duotone" />
                  Sblocca
                </button>
              </div>
            ))}
          </div>
        ))}

      {/* TAB BLACKLIST */}
      {activeTab === "blacklist" &&
        (blacklist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <WarningIcon
              size={40}
              weight="duotone"
              className="text-gray-300 dark:text-gray-700 mb-3"
            />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {search ? "Nessun risultato" : "Blacklist vuota"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {blacklist
              .filter((b) => {
                const q = search.toLowerCase();
                return (
                  b.email?.toLowerCase().includes(q) ||
                  b.phone?.includes(q) ||
                  b.reason?.toLowerCase().includes(q)
                );
              })
              .map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center gap-4 px-4 py-3.5 bg-white dark:bg-gray-900 rounded-xl border border-red-100 dark:border-red-900/30"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <WarningIcon
                      size={18}
                      weight="duotone"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      {entry.email && (
                        <span className="text-sm text-gray-900 dark:text-white font-medium">
                          {entry.email}
                        </span>
                      )}
                      {entry.phone && (
                        <span className="text-sm text-gray-900 dark:text-white font-medium">
                          {entry.phone}
                        </span>
                      )}
                    </div>
                    {entry.reason && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {entry.reason}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">
                      Aggiunto il{" "}
                      {new Date(entry.createdAt).toLocaleDateString("it-IT")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveBlacklist(entry.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors shrink-0"
                  >
                    <XIcon size={14} />
                    Rimuovi
                  </button>
                </div>
              ))}
          </div>
        ))}

      {/* MODAL DETTAGLIO CLIENTE */}
      {selectedCustomer !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedCustomer(null)}
          />
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {selectedCustomer.firstName[0]}
                      {selectedCustomer.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                      {selectedCustomer.firstName} {selectedCustomer.lastName}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 min-w-15">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      Visite
                    </span>
                    <span className="text-base font-bold text-gray-900 dark:text-white mt-0.5">
                      {selectedCustomer.totalBookings}
                    </span>
                  </div>
                  <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 min-w-15">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      Totale
                    </span>
                    <span className="text-base font-bold text-gray-900 dark:text-white mt-0.5">
                      €{selectedCustomer.totalSpent.toFixed(0)}
                    </span>
                  </div>
                  {selectedCustomer.noShows > 0 && (
                    <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-orange-50 dark:bg-orange-900/20 min-w-15">
                      <span className="text-xs text-orange-400">No-show</span>
                      <span className="text-base font-bold text-orange-500 mt-0.5">
                        {selectedCustomer.noShows}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
              >
                <XIcon size={18} />
              </button>
            </div>
            <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4 shrink-0">
              {selectedCustomer.email && (
                <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <EnvelopeIcon size={13} weight="duotone" />
                  {selectedCustomer.email}
                </div>
              )}
              {selectedCustomer.phone && (
                <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <PhoneIcon size={13} weight="duotone" />
                  {selectedCustomer.phone}
                </div>
              )}
            </div>
            <div className="overflow-y-auto flex-1 px-6 py-4">
              {detailLoading ? (
                <div className="flex items-center justify-center py-10">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                </div>
              ) : selectedCustomer.bookings.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">
                  Nessuna prenotazione
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-1">
                    Storico prenotazioni
                  </p>
                  {selectedCustomer.bookings.map((booking) => {
                    const status = statusLabel[booking.status] ?? {
                      label: booking.status,
                      color: "text-gray-400 bg-gray-50",
                    };
                    return (
                      <div
                        key={booking.id}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {formatDateOnly(booking.startAt)}
                            </p>
                            <span className="text-xs text-gray-400">
                              {formatTimeIT(booking.startAt)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1">
                              <ScissorsIcon size={10} weight="duotone" />
                              {booking.serviceName}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <ClockIcon size={10} weight="duotone" />
                              {formatDuration(booking.duration)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {booking.servicePrice != null && (
                            <p className="text-xs font-semibold text-gray-900 dark:text-white">
                              €{booking.servicePrice.toFixed(2)}
                            </p>
                          )}
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.color}`}
                          >
                            {status.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL BLOCCO MANUALE */}
      {blockModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setBlockModalOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
                <WarningIcon
                  size={20}
                  weight="duotone"
                  className="text-orange-500"
                />
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                  {activeTab === "blacklist"
                    ? "Aggiungi alla blacklist"
                    : "Aggiungi no-show"}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activeTab === "blacklist"
                    ? "Blocca email o telefono preventivamente"
                    : "Blocca un cliente tramite recapiti"}
                </p>
              </div>
              <button
                onClick={() => setBlockModalOpen(false)}
                className="ml-auto p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <XIcon size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="mario@example.com"
                  value={blockForm.email}
                  onChange={(e) =>
                    setBlockForm({ ...blockForm, email: e.target.value })
                  }
                  className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Telefono
                </label>
                <input
                  type="tel"
                  placeholder="+39 333 1234567"
                  value={blockForm.phone}
                  onChange={(e) =>
                    setBlockForm({ ...blockForm, phone: e.target.value })
                  }
                  className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                />
              </div>
              {activeTab === "blacklist" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Motivo (opzionale)
                  </label>
                  <input
                    type="text"
                    placeholder="es. Cliente problematico"
                    value={blockForm.reason}
                    onChange={(e) =>
                      setBlockForm({ ...blockForm, reason: e.target.value })
                    }
                    className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                  />
                </div>
              )}
              <p className="text-xs text-gray-400">
                Inserisci almeno uno dei due recapiti.
              </p>
              {blockError && (
                <div className="px-3 py-2 bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-900 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {blockError}
                  </p>
                </div>
              )}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setBlockModalOpen(false)}
                  className="flex-1 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="button"
                  onClick={handleBlockManual}
                  disabled={blockLoading}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-50 ${activeTab === "blacklist" ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}`}
                >
                  {blockLoading
                    ? "..."
                    : activeTab === "blacklist"
                      ? "Aggiungi alla blacklist"
                      : "Blocca cliente"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
