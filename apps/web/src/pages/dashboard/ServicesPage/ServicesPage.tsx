import type { UpsertServiceDTO, ServiceDTO } from "@scissorflow/shared";
import { useShop } from "@/hooks/useShop";
import { useEffect, useState } from "react";
import { shopService } from "@/services/shop.service";
import {
  PencilIcon,
  PlusIcon,
  ScissorsIcon,
  TrashIcon,
  ClockIcon,
  CurrencyEurIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";

// FORM VUOTO
const EMPTY_FORM: UpsertServiceDTO = {
  name: "",
  duration: 30,
  price: undefined,
  isActive: true,
};
export const ServicesPage = () => {
  const { shopId } = useShop();
  const [services, setServices] = useState<ServiceDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<ServiceDTO | null>(null);
  const [form, setForm] = useState<UpsertServiceDTO>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // CARICHIAMO TUTTI I SERVIZI
  useEffect(() => {
    if (!shopId) return;
    loadServices();
  }, [shopId]);

  const loadServices = async () => {
    try {
      setLoading(true);
      const data = await shopService.getServices(shopId!);
      setServices(data);
    } catch {
      setError("Errore caricamento servizi");
    } finally {
      setLoading(false);
    }
  };
  // =========

  // APRI MODAL NUOVO
  const handleNew = () => {
    setEditingService(null);
    setForm(EMPTY_FORM);
    setError("");
    setModalOpen(true);
  };

  // APRI MODAL MODIFICA
  const handleEdit = (service: ServiceDTO) => {
    setEditingService(service);
    setForm({
      name: service.name,
      duration: service.duration,
      price: service.price ?? undefined,
      isActive: service.isActive,
    });
    setError("");
    setModalOpen(true);
  };

  // SALVA, AGGIORNA, CREA
  const handleSave = async () => {
    if (!form.name || !form.duration) {
      setError("Nome e durata sono obbligatori");
      return;
    }
    setSaving(true);
    setError("");

    try {
      if (editingService) {
        // AGGIORNIAMO
        const updated = await shopService.updateService(
          shopId!,
          editingService.id,
          form,
        );
        setServices(services.map((s) => (s.id === updated.id ? updated : s)));
      } else {
        // CREA
        const created = await shopService.createService(shopId!, form);
        setServices([...services, created]);
      }
      setModalOpen(false);
    } catch {
      setError("Errore durante il salvataggio");
    } finally {
      setSaving(false);
    }
  };

  //  ELIMINA
  const handleDelete = async (serviceId: string) => {
    try {
      await shopService.deleteService(shopId!, serviceId);
      setServices(services.filter((s) => s.id !== serviceId));
      setDeleteId(null);
    } catch {
      setError("Errore eliminazione");
    }
  };

  // FORMATTA DURATA
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Servizi
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
            Gestisci i servizi del tuo shop
          </p>
        </div>
        <Button onClick={handleNew}>
          <PlusIcon size={16} weight="bold" className="mr-2" />
          Nuovo servizio
        </Button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
        </div>
      )}

      {/* LISTA VUOTA */}
      {!loading && services.length === 0 && (
        <Card className="shadow-md border border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <ScissorsIcon
              size={24}
              weight="duotone"
              className="text-gray-400"
            />
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
            Nessun servizio
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Aggiungi il primo servizio del tuo shop
          </p>
          <Button onClick={handleNew}>
            <PlusIcon size={16} weight="bold" className="mr-2" />
            Aggiungi servizio
          </Button>
        </Card>
      )}

      {/* LISTA SERVIZI */}
      {!loading && services.length > 0 && (
        <div className="flex flex-col gap-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`shadow-md flex items-center gap-4 border-2 ${service.isActive ? "border-green-500 dark:border-green-600" : "border-gray-300 dark:border-gray-500"}`}
            >
              {/* ICONA */}
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <ScissorsIcon
                  size={20}
                  weight="duotone"
                  className="text-gray-600 dark:text-gray-400"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {service.name}
                  </p>
                  <Badge
                    label={service.isActive ? "Attivo" : "Inattivo"}
                    variant={service.isActive ? "success" : "default"}
                  />
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <ClockIcon size={11} weight="duotone" />
                    {formatDuration(service.duration)}
                  </span>
                  {service.price != null && (
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <CurrencyEurIcon size={11} weight="duotone" />
                      {service.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              {/* AZIONI */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleEdit(service)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <PencilIcon size={16} />
                </button>
                <button
                  onClick={() => setDeleteId(service.id)}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* MODAL CREA/MODIFICA */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingService ? "Modifica servizio" : "Nuovo servizio"}
      >
        <div className="flex flex-col gap-4">
          <Input
            label="Nome servizio"
            placeholder="es. Taglio capelli"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Durata (minuti)"
              type="number"
              min={5}
              step={5}
              placeholder="30"
              value={form.duration}
              onChange={(e) =>
                setForm({ ...form, duration: Number(e.target.value) })
              }
            />
            <Input
              label="Prezzo €"
              type="number"
              min={0}
              step={0.5}
              placeholder="15.00"
              value={form.price ?? ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value ? Number(e.target.value) : undefined,
                })
              }
            />
          </div>

          {/* TOGGLE ATTIVO */}
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Servizio attivo
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                I clienti possono prenotare questo servizio
              </p>
            </div>
            <button
              onClick={() => setForm({ ...form, isActive: !form.isActive })}
              className={`
                relative w-11 h-6 rounded-full transition-colors
                ${form.isActive ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}
              `}
            >
              <span
                className={`
                absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900
                transition-transform ${form.isActive ? "translate-x-5" : "translate-x-0"}
              `}
              />
            </button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={() => setModalOpen(false)}
              className="flex-1"
            >
              Annulla
            </Button>
            <Button loading={saving} onClick={handleSave} className="flex-1">
              {editingService ? "Salva modifiche" : "Crea servizio"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* MODAL CONFERMA ELIMINAZIONE */}
      <Modal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        title="Elimina servizio"
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Sei sicuro di voler eliminare questo servizio? L'operazione non può
            essere annullata.
          </p>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={() => setDeleteId(null)}
              className="flex-1"
            >
              Annulla
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(deleteId!)}
              className="flex-1"
            >
              Elimina
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
