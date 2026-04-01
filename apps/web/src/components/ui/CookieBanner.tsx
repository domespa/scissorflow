import { useState } from "react";

type CookieBannerProps = {
  slug: string;
  primaryColor: string;
  shopName: string;
  legalMode?: string;
  legalUrl?: string;
};

export const CookieBanner = ({
  slug,
  primaryColor,
  shopName,
  legalMode,
  legalUrl,
}: CookieBannerProps) => {
  const [visible, setVisible] = useState(
    !localStorage.getItem(`cookie_consent_${slug}`),
  );

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem(`cookie_consent_${slug}`, "true");
    setVisible(false);
  };

  const policyUrl =
    legalMode === "url" && legalUrl ? legalUrl : `/b/${slug}/legal`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg px-5 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          <span className="font-medium text-gray-900">{shopName}</span> usa
          cookie tecnici per garantire il funzionamento del sito.{" "}
          <a
            href={policyUrl}
            className="underline hover:text-gray-900 transition-colors"
          >
            Leggi la policy
          </a>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 px-5 py-2 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: primaryColor }}
        >
          Accetta
        </button>
      </div>
    </div>
  );
};
