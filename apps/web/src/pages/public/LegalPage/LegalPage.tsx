import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CaretLeftIcon } from "@phosphor-icons/react";
import { shopService } from "@/services/shop.service";
import { ShopLogo } from "@/components/ui/ShopLogo";

export const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    shopService
      .getPublicShop(slug)
      .then(setShop)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!shop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Shop non trovato</p>
      </div>
    );
  }

  const primaryColor = shop.config?.primaryColor ?? "#1a1a1a";
  const shopName = shop.name;
  const shopEmail = shop.users?.[0]?.user?.email ?? "info@example.com";
  const today = new Date().toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // SE HA URL ESTERNO FAI IL REDIRECT
  if (shop.config?.legalMode === "url" && shop.config?.legalUrl) {
    window.location.href = shop.config.legalUrl;
    return null;
  }

  // SE HA TESTO SUO
  if (shop.config?.legalMode === "custom" && shop.config?.legalText) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <Link
            to={`/b/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <CaretLeftIcon size={14} />
            Torna allo shop
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <ShopLogo
              shopName={shopName}
              primaryColor={primaryColor}
              logoStyle={shop.config?.logoStyle ?? "badge-vintage"}
              logoUrl={shop.config?.logoUrl}
              size={48}
              radius={10}
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {shopName}
              </h1>
              <p className="text-sm text-gray-500">Privacy & Cookie Policy</p>
            </div>
          </div>
          <div
            className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: shop.config.legalText }}
          />
        </div>
      </div>
    );
  }

  // MODALITÀ AUTOGEN
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          to={`/b/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <CaretLeftIcon size={14} />
          Torna allo shop
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <ShopLogo
            shopName={shopName}
            primaryColor={primaryColor}
            logoStyle={shop.config?.logoStyle ?? "badge-vintage"}
            logoUrl={shop.config?.logoUrl}
            size={48}
            radius={10}
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{shopName}</h1>
            <p className="text-sm text-gray-500">Privacy & Cookie Policy</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8">
          {/* PRIVACY POLICY */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Privacy Policy
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Ultimo aggiornamento: {today}
            </p>

            <div className="flex flex-col gap-5 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  1. Titolare del trattamento
                </h3>
                <p>
                  Il titolare del trattamento dei dati personali è{" "}
                  <strong>{shopName}</strong>, contattabile all'indirizzo email:{" "}
                  <a href={`mailto:${shopEmail}`} className="underline">
                    {shopEmail}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  2. Dati raccolti
                </h3>
                <p>
                  In fase di prenotazione raccogliamo i seguenti dati personali:
                </p>
                <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-gray-600">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Data e ora dell'appuntamento</li>
                  <li>Servizio prenotato</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  3. Finalità del trattamento
                </h3>
                <p>I dati sono trattati esclusivamente per:</p>
                <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-gray-600">
                  <li>Gestire e confermare la prenotazione</li>
                  <li>
                    Inviare promemoria e comunicazioni relative all'appuntamento
                  </li>
                  <li>Adempiere ad obblighi di legge</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  4. Base giuridica
                </h3>
                <p>
                  Il trattamento è basato sull'esecuzione di un contratto (art.
                  6, par. 1, lett. b del GDPR) e sul legittimo interesse del
                  titolare nella gestione dell'attività.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  5. Conservazione dei dati
                </h3>
                <p>
                  I dati vengono conservati per il tempo strettamente necessario
                  alle finalità indicate e comunque non oltre 24 mesi
                  dall'ultimo appuntamento.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  6. Diritti dell'interessato
                </h3>
                <p>
                  Hai il diritto di accedere ai tuoi dati, richiederne la
                  rettifica o la cancellazione, opporti al trattamento e
                  richiedere la portabilità. Per esercitare questi diritti
                  contatta:{" "}
                  <a href={`mailto:${shopEmail}`} className="underline">
                    {shopEmail}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  7. Responsabile del trattamento
                </h3>
                <p>
                  La piattaforma di prenotazione è fornita da{" "}
                  <strong>ScissorFlow</strong>, che agisce in qualità di
                  responsabile del trattamento ai sensi dell'art. 28 del GDPR.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-gray-100" />

          {/* COOKIE POLICY */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Cookie Policy
            </h2>

            <div className="flex flex-col gap-5 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  1. Cosa sono i cookie
                </h3>
                <p>
                  I cookie sono piccoli file di testo che i siti web salvano sul
                  tuo dispositivo durante la navigazione. Vengono utilizzati per
                  far funzionare il sito o per fornire informazioni ai
                  proprietari.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  2. Cookie utilizzati
                </h3>
                <p>
                  Questo sito utilizza esclusivamente{" "}
                  <strong>cookie tecnici</strong>, necessari al funzionamento
                  del servizio di prenotazione:
                </p>
                <div className="mt-3 border border-gray-100 rounded-xl overflow-hidden">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-2 text-gray-500 font-medium">
                          Nome
                        </th>
                        <th className="text-left px-4 py-2 text-gray-500 font-medium">
                          Scopo
                        </th>
                        <th className="text-left px-4 py-2 text-gray-500 font-medium">
                          Durata
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-4 py-2 font-mono text-gray-700">
                          cookie_consent_{slug}
                        </td>
                        <td className="px-4 py-2 text-gray-600">
                          Salva il consenso ai cookie
                        </td>
                        <td className="px-4 py-2 text-gray-600">Permanente</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  3. Cookie di terze parti
                </h3>
                <p>
                  Questo sito non utilizza cookie di profilazione o di terze
                  parti a scopi pubblicitari.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  4. Gestione dei cookie
                </h3>
                <p>
                  Puoi eliminare i cookie salvati in qualsiasi momento dalle
                  impostazioni del tuo browser. La rimozione del cookie di
                  consenso farà ricomparire il banner informativo alla
                  successiva visita.
                </p>
              </div>
            </div>
          </section>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">
          Questa pagina è generata automaticamente da{" "}
          <a
            href="https://scissorflow.it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ScissorFlow
          </a>
        </p>
      </div>
    </div>
  );
};
