import { api } from "./api";
import type {
  AuthResponseDTO,
  RegisterDTO,
  OnboardingDTO,
} from "@scissorflow/shared";

export const authService = {
  async register(data: RegisterDTO): Promise<AuthResponseDTO> {
    const response = await api.post<AuthResponseDTO>("/auth/register", data);
    return response.data;
  },

  async login(data: {
    email: string;
    password: string;
  }): Promise<AuthResponseDTO> {
    const response = await api.post<AuthResponseDTO>("/auth/login", data);
    return response.data;
  },

  async onboarding(data: OnboardingDTO): Promise<{ id: string }> {
    const response = await api.post("/auth/onboarding", data);
    return response.data;
  },
};
