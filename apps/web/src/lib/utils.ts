// FORMATTAZIONE DATA IN ITALIANO - martedì 17 marzo 2026, 10.30
export const formatDateIT = (date: Date | string): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// SOLO DATA SENZA ORA martedì 17 marzo 2026
export const formatDateOnly = (date: Date | string): string => {
  const d = typeof date === "string" ? new Date(date) : date;

  return d.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// SOLO ORA
export const formatTimeIT = (date: Date | string): string => {
  const d = typeof date === "string" ? new Date(date) : date;

  return d.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
