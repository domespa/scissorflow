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
  const [customers, setCustomers] = useState<CustomerSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [selectedCustomer, setSelectedCustomer] =
    useState<CustomerDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      setLoading(true);
      const data = await customerService.getCustomers();
      setCustomers(data);
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

  const filtered = customers.filter((c) => {
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Clienti
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
            {customers.length} clienti totali
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative">
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

      {/* LISTA */}
      {filtered.length === 0 ? (
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
              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  {customer.firstName[0]}
                  {customer.lastName[0]}
                </span>
              </div>

              {/* INFO */}
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

              {/* STATS */}
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
      )}

      {/* MODAL DETTAGLIO */}
      {selectedCustomer !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedCustomer(null)}
          />
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl max-h-[85vh] flex flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
              <div className="flex items-center justify-between w-full">
                {/* SINISTRA - AVATAR + NOME */}
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

                {/* DESTRA - STATS */}
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
                </div>
              </div>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <XIcon size={18} />
              </button>
            </div>

            {/* CONTATTI */}
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

            {/* STORICO */}
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
    </div>
  );
};
