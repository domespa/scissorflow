type Props = {
  shopName: string;
  primaryColor: string;
  coverImageUrl: string | null;
};

export const ShopPreviewMockup = ({
  shopName,
  primaryColor,
  coverImageUrl,
}: Props) => {
  const heroBg = coverImageUrl
    ? `url(${coverImageUrl}) center/cover`
    : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}cc 100%)`;

  return (
    <div className="flex items-end gap-4 w-full">
      {/* DESKTOP */}
      <div className="flex-1 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        {/* BROWSER BAR */}
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="flex-1 mx-2 h-3 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>

        {/* HERO */}
        <div
          className="relative h-24 flex items-end"
          style={{ background: heroBg }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative px-2 pb-1.5 flex items-end gap-1.5">
            <div
              className="w-5 h-5 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="text-white text-xs">✂</span>
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight truncate max-w-20">
                {shopName || "Il tuo shop"}
              </p>
            </div>
          </div>
        </div>

        {/* CONTENUTO */}
        <div className="bg-white dark:bg-gray-900 p-2">
          <div className="flex gap-1 mb-2">
            {["Taglio", "Barba", "Colore"].map((s) => (
              <div
                key={s}
                className="px-2 py-0.5 rounded-full text-xs text-white"
                style={{ backgroundColor: primaryColor }}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["Lun", "Mar", "Mer", "Gio", "Ven"].map((d) => (
              <div key={d} className="flex flex-col items-center gap-0.5">
                <p className="text-xs text-gray-400">{d}</p>
                <div className="w-full h-3 bg-green-100 rounded text-center">
                  <span
                    className="text-xs text-green-700"
                    style={{ fontSize: "7px" }}
                  >
                    9:00
                  </span>
                </div>
                <div className="w-full h-3 bg-green-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="w-28 shrink-0">
        <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
          {/* NOTCH */}
          <div className="bg-gray-900 h-3 flex items-center justify-center">
            <div className="w-6 h-1.5 bg-gray-700 rounded-full" />
          </div>

          {/* HERO */}
          <div
            className="relative h-16 flex items-end"
            style={{ background: heroBg }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative px-1.5 pb-1 flex items-end gap-1">
              <div
                className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="text-white" style={{ fontSize: "8px" }}>
                  ✂
                </span>
              </div>
              <p
                className="text-white font-semibold leading-tight truncate"
                style={{ fontSize: "7px" }}
              >
                {shopName || "Shop"}
              </p>
            </div>
          </div>

          {/* CONTENUTO */}
          <div className="p-1.5">
            <div className="flex gap-0.5 mb-1.5 overflow-hidden">
              {["Taglio", "Barba"].map((s) => (
                <div
                  key={s}
                  className="px-1 py-0.5 rounded-full text-white shrink-0"
                  style={{ backgroundColor: primaryColor, fontSize: "6px" }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-0.5">
              {["L", "M", "M", "G", "V"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <p className="text-gray-400" style={{ fontSize: "5px" }}>
                    {d}
                  </p>
                  <div
                    className="w-full bg-green-100 rounded"
                    style={{ height: "8px" }}
                  />
                  <div
                    className="w-full bg-green-100 rounded"
                    style={{ height: "8px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-1">Mobile</p>
      </div>
    </div>
  );
};
