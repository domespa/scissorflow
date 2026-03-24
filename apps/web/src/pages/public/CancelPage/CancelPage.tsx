import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ScissorsIcon,
  CheckCircleIcon,
  XCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { bookingService } from "@/services/booking.service";
import { formatDateOnly, formatTimeIT } from "@/lib/utils";

export const CancelPage = () => {
  const { bookingId } = useParams<{ bookingId: string }>();

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookingId) return;
    loadBooking();
  }, [bookingId]);

  const loadBooking = async () => {
    try {
      const data = await bookingService.getPublicBooking(bookingId!);
      setBooking(data);
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    setCancelling(true);
    setError("");
    try {
      await bookingService.cancelBooking(bookingId!);
      setCancelled(true);
    } catch (err: any) {
      if (err?.response?.status === 409) {
        setError(
          "Non è possibile cancellare una prenotazione a meno di 2 ore dall'appuntamento.",
        );
      } else {
        setError("Errore durante la cancellazione. Riprova.");
      }
    } finally {
      setCancelling(false);
    }
  };

  const primaryColor = "#1a1a1a";

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  // NON TROVATA
  if (notFound || !booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <XCircleIcon
            size={48}
            weight="duotone"
            className="text-red-400 mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Prenotazione non trovata
          </h1>
          <p className="text-sm text-gray-500">
            Il link potrebbe essere scaduto o non valido.
          </p>
        </div>
      </div>
    );
  }

  // GIÀ CANCELLATA
  if (booking.status === "CANCELLED") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <WarningIcon
            size={48}
            weight="duotone"
            className="text-yellow-400 mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Prenotazione già cancellata
          </h1>
          <p className="text-sm text-gray-500">
            Questa prenotazione è già stata cancellata.
          </p>
        </div>
      </div>
    );
  }

  // CANCELLATA CON SUCCESSO
  if (cancelled) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <CheckCircleIcon
            size={48}
            weight="duotone"
            className="text-green-500 mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Prenotazione cancellata
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            La tua prenotazione presso <strong>{booking.shop.name}</strong> è
            stata cancellata con successo.
          </p>
          <Link
            to={`/b/${booking.shop.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Prenota di nuovo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ScissorsIcon size={28} weight="duotone" className="text-gray-900" />
          <span className="text-xl font-semibold text-gray-900">
            ScissorFlow
          </span>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h1 className="text-lg font-semibold text-gray-900 mb-1">
            Cancella prenotazione
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Sei sicuro di voler cancellare questo appuntamento?
          </p>

          {/* DETTAGLI */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Shop</span>
              <span className="text-sm font-medium text-gray-900">
                {booking.shop.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Servizio</span>
              <span className="text-sm font-medium text-gray-900">
                {booking.service.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Data</span>
              <span className="text-sm font-medium text-gray-900">
                {formatDateOnly(booking.startAt)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Orario</span>
              <span className="text-sm font-medium text-gray-900">
                {formatTimeIT(booking.startAt)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Cliente</span>
              <span className="text-sm font-medium text-gray-900">
                {booking.customer.firstName} {booking.customer.lastName}
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-4">
            ⚠️ La cancellazione non è possibile a meno di 2 ore
            dall'appuntamento.
          </p>

          {error && (
            <div className="px-3 py-2 rounded-lg bg-red-50 border border-red-100 mb-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="flex gap-3">
            <Link
              to={`/b/${booking.shop.slug}`}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Torna al negozio
            </Link>
            <button
              onClick={handleCancel}
              disabled={cancelling}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
              {cancelling && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              Cancella
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
