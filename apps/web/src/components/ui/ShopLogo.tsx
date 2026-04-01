type ShopLogoProps = {
  shopName: string;
  primaryColor: string;
  logoStyle: string;
  logoUrl?: string | null;
  size?: number;
  radius?: number;
};

export const ShopLogo = ({
  shopName,
  primaryColor,
  logoStyle,
  logoUrl,
  size = 48,
  radius = 10,
}: ShopLogoProps) => {
  const initials = shopName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  if (logoUrl && logoStyle === "custom") {
    return (
      <img
        src={logoUrl}
        alt={shopName}
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          objectFit: "cover",
        }}
      />
    );
  }

  const svgMap: Record<string, string> = {
    "hex-scissors": `
      <polygon points="${size * 0.5},${size * 0.12} ${size * 0.82},${size * 0.31} ${size * 0.82},${size * 0.69} ${size * 0.5},${size * 0.88} ${size * 0.18},${size * 0.69} ${size * 0.18},${size * 0.31}" fill="none" stroke="white" stroke-width="${size * 0.025}" opacity="0.6"/>
      <circle cx="${size * 0.34}" cy="${size * 0.375}" r="${size * 0.078}" fill="none" stroke="white" stroke-width="${size * 0.034}"/>
      <circle cx="${size * 0.34}" cy="${size * 0.625}" r="${size * 0.078}" fill="none" stroke="white" stroke-width="${size * 0.034}"/>
      <line x1="${size * 0.41}" y1="${size * 0.42}" x2="${size * 0.72}" y2="${size * 0.69}" stroke="white" stroke-width="${size * 0.034}" stroke-linecap="round"/>
      <line x1="${size * 0.41}" y1="${size * 0.58}" x2="${size * 0.72}" y2="${size * 0.31}" stroke="white" stroke-width="${size * 0.034}" stroke-linecap="round"/>
    `,
    "shield-razor": `
      <path d="M${size * 0.5} ${size * 0.15} L${size * 0.75} ${size * 0.27} L${size * 0.75} ${size * 0.55} Q${size * 0.75} ${size * 0.75} ${size * 0.5} ${size * 0.85} Q${size * 0.25} ${size * 0.75} ${size * 0.25} ${size * 0.55} L${size * 0.25} ${size * 0.27} Z" fill="white" opacity="0.12" stroke="white" stroke-width="${size * 0.025}" stroke-opacity="0.7"/>
      <rect x="${size * 0.34}" y="${size * 0.34}" width="${size * 0.32}" height="${size * 0.08}" rx="${size * 0.03}" fill="white" opacity="0.9"/>
      <rect x="${size * 0.4}" y="${size * 0.42}" width="${size * 0.2}" height="${size * 0.22}" rx="${size * 0.015}" fill="white" opacity="0.65"/>
      <rect x="${size * 0.44}" y="${size * 0.64}" width="${size * 0.12}" height="${size * 0.05}" rx="${size * 0.025}" fill="white" opacity="0.5"/>
    `,
    "circle-comb": `
      <rect x="${size * 0.28}" y="${size * 0.44}" width="${size * 0.44}" height="${size * 0.094}" rx="${size * 0.031}" fill="white" opacity="0.95"/>
      ${[0.29, 0.35, 0.41, 0.47, 0.53, 0.59, 0.65].map((x) => `<rect x="${size * x}" y="${size * 0.53}" width="${size * 0.039}" height="${size * 0.125}" rx="${size * 0.016}" fill="white" opacity="0.8"/>`).join("")}
      <text x="${size * 0.5}" y="${size * 0.37}" text-anchor="middle" font-family="sans-serif" font-size="${size * 0.22}" font-weight="500" fill="white" opacity="0.9">${initials}</text>
    `,
    "square-scissors": `
      <circle cx="${size * 0.31}" cy="${size * 0.31}" r="${size * 0.109}" fill="none" stroke="white" stroke-width="${size * 0.034}"/>
      <circle cx="${size * 0.31}" cy="${size * 0.69}" r="${size * 0.109}" fill="none" stroke="white" stroke-width="${size * 0.034}"/>
      <circle cx="${size * 0.31}" cy="${size * 0.31}" r="${size * 0.031}" fill="white"/>
      <circle cx="${size * 0.31}" cy="${size * 0.69}" r="${size * 0.031}" fill="white"/>
      <line x1="${size * 0.39}" y1="${size * 0.375}" x2="${size * 0.75}" y2="${size * 0.735}" stroke="white" stroke-width="${size * 0.034}" stroke-linecap="round"/>
      <line x1="${size * 0.39}" y1="${size * 0.625}" x2="${size * 0.75}" y2="${size * 0.265}" stroke="white" stroke-width="${size * 0.034}" stroke-linecap="round"/>
    `,
    "hex-razor": `
      <polygon points="${size * 0.5},${size * 0.09} ${size * 0.84},${size * 0.28} ${size * 0.84},${size * 0.72} ${size * 0.5},${size * 0.91} ${size * 0.16},${size * 0.72} ${size * 0.16},${size * 0.28}" fill="white" opacity="0.1" stroke="white" stroke-width="${size * 0.019}" stroke-opacity="0.5"/>
      <rect x="${size * 0.33}" y="${size * 0.27}" width="${size * 0.34}" height="${size * 0.078}" rx="${size * 0.031}" fill="white" opacity="0.9"/>
      <rect x="${size * 0.39}" y="${size * 0.34}" width="${size * 0.22}" height="${size * 0.19}" rx="${size * 0.016}" fill="white" opacity="0.6"/>
      <rect x="${size * 0.42}" y="${size * 0.53}" width="${size * 0.16}" height="${size * 0.047}" rx="${size * 0.023}" fill="white" opacity="0.45"/>
      <text x="${size * 0.5}" y="${size * 0.81}" text-anchor="middle" font-family="sans-serif" font-size="${size * 0.16}" font-weight="500" fill="white" opacity="0.85">${initials}</text>
    `,
    "badge-vintage": `
      <circle cx="${size * 0.5}" cy="${size * 0.5}" r="${size * 0.38}" fill="none" stroke="white" stroke-width="${size * 0.019}" opacity="0.5"/>
      <circle cx="${size * 0.5}" cy="${size * 0.5}" r="${size * 0.3}" fill="none" stroke="white" stroke-width="${size * 0.013}" opacity="0.3"/>
      <line x1="${size * 0.12}" y1="${size * 0.5}" x2="${size * 0.88}" y2="${size * 0.5}" stroke="white" stroke-width="${size * 0.013}" opacity="0.3"/>
      <text x="${size * 0.5}" y="${size * 0.45}" text-anchor="middle" font-family="sans-serif" font-size="${size * 0.125}" fill="white" opacity="0.7">BARBER</text>
      <text x="${size * 0.5}" y="${size * 0.63}" text-anchor="middle" font-family="sans-serif" font-size="${size * 0.22}" font-weight="500" fill="white">${initials}</text>
      <text x="${size * 0.5}" y="${size * 0.78}" text-anchor="middle" font-family="sans-serif" font-size="${size * 0.109}" fill="white" opacity="0.6">EST. 2025</text>
    `,
  };

  const content = svgMap[logoStyle] ?? svgMap["badge-vintage"];

  const svgString = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${radius}" fill="${primaryColor}"/>
    ${content}
  </svg>`;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        flexShrink: 0,
      }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
};
