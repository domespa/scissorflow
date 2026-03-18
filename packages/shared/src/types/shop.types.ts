// RUOLI UTENTI SHOP
export enum ShopRole {
  OWNER = "OWNER",
  COLLABORATOR = "COLLABORATOR",
}

// PIANI ABBONAMENTO
export enum ShopPlan {
  FREE = "FREE",
  PRO = "PRO",
  BUSINESS = "BUSINESS",
  ENTERPRISE = "ENTERPRISE",
}

// MODALITÀ SLOT
export enum SlotMode {
  FIXED = "FIXED",
  DYNAMIC = "DYNAMIC",
}

// I DTO TRA FE E BE
export interface ShopDTO {
  id: string;
  name: string;
  slug: string; // CI SERVE PER PERSONALIZZARE L'URL PER LA SAAS
  createdAt: string;
}

// PERSONALIZZAZIONE DELL'INTERFACCIA DELLO SHOP
export interface ShopConfigDTO {
  id: string;
  shopId: string;
  primaryColor: string;
  coverImage?: string;
  logo?: string;
  tagline?: string;
  showPrices: boolean;
}

// DATI REGISTRAZIONE NUOVO SHOP
export interface CreateShopDTO {
  name: string;
  slug: string;
  config: Omit<ShopConfigDTO, "id" | "shopId">;
}

// SERVIZIO OFFERTO
export interface ServiceDTO {
  id: string;
  shopId: string;
  name: string;
  duration: number;
  price?: number;
  isActive: boolean;
}

// ORARI DISPONIBILI
export interface AvailabilityDTO {
  id: string;
  shopId: string;
  dayOfWeek: number; // 0=DOMENICA
  startTime: string;
  endTime: string;
  isActive: boolean;
}

// SLOT BLOCCATO DAL BARBIERE PER MOTIVI DI FERIE O MALATTIA
export interface BlockedSlotDTO {
  id: string;
  shopId: string;
  startAt: string;
  endAt: string;
  reason?: string;
}

// CREAZIONE O MODIFICA MANUALE PER CHI TELEFONA ANCORA
export interface UpsertServiceDTO extends Omit<ServiceDTO, "id" | "shopId"> {}
