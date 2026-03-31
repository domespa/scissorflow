import { ShopConfigDTO } from "./shop.types";

// DATI UTENTE CHE VIAGGIANO TRA FE E BE
export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  shopId: string | null;
}

// DATI LOGIN
export interface LoginDTO {
  email: string;
  password: string;
}

// DATI REGISTRAZIONE
export interface RegisterDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// DATI SUCCESSIVI PER IL SETUP
export interface OnboardingDTO {
  shopName: string;
  shopSlug?: string;
  config: Omit<ShopConfigDTO, "id" | "shopId">;
  availability?: {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    breakStart?: string | null;
    breakEnd?: string | null;
    isActive: boolean;
  }[];
  services?: {
    name: string;
    duration: number;
    price?: number;
  }[];
}

// RESPONSE DOPO LOGIN O REGISTRAZIONE
export interface AuthResponseDTO {
  user: UserDTO;
  token: string;
}

// DATI PER INVITARE UN COLLABORATE DA OWNER
export interface InviteCollaboratorDTO {
  email: string;
  firstName: string;
  lastName: string;
}
