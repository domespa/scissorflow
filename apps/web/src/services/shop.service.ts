import { api } from "./api";
import type {
  ShopDTO,
  ShopConfigDTO,
  ServiceDTO,
  AvailabilityDTO,
  BlockedSlotDTO,
  UpsertServiceDTO,
} from "@scissorflow/shared";

export const shopService = {
  // PAGINA PUBBLICA
  async getPublicShop(slug: string): Promise<
    ShopDTO & {
      config: ShopConfigDTO;
      services: ServiceDTO[];
      availability: AvailabilityDTO[];
    }
  > {
    const response = await api.get(`/shops/${slug}`);
    return response.data;
  },

  // SERVIZI
  async getServices(shopId: string): Promise<ServiceDTO[]> {
    const response = await api.get(`/shops/${shopId}/services`);
    return response.data;
  },

  async createService(
    shopId: string,
    data: UpsertServiceDTO,
  ): Promise<ServiceDTO> {
    const response = await api.post(`/shops/${shopId}/services`, data);
    return response.data;
  },

  async updateService(
    shopId: string,
    serviceId: string,
    data: UpsertServiceDTO,
  ): Promise<ServiceDTO> {
    const response = await api.put(
      `/shops/${shopId}/services/${serviceId}`,
      data,
    );
    return response.data;
  },

  async deleteService(shopId: string, serviceId: string): Promise<void> {
    await api.delete(`/shops/${shopId}/services/${serviceId}`);
  },

  // CONFIG
  async updateConfig(
    shopId: string,
    data: Partial<ShopConfigDTO>,
  ): Promise<ShopConfigDTO> {
    const response = await api.put(`/shops/${shopId}/config`, data);
    return response.data;
  },

  async getConfig(shopId: string): Promise<ShopConfigDTO> {
    const response = await api.get(`/shops/${shopId}/config`);
    return response.data;
  },

  // DISPONIBILITÀ
  async getAvailability(shopId: string): Promise<AvailabilityDTO[]> {
    const response = await api.get(`/shops/${shopId}/availability`);
    return response.data;
  },

  async setAvailability(
    shopId: string,
    data: {
      dayOfWeek: number;
      startTime: string;
      endTime: string;
      breakStart?: string | null;
      breakEnd?: string | null;
      isActive: boolean;
    },
  ) {
    const response = await api.post(`/shops/${shopId}/availability`, data);
    return response.data;
  },

  // SLOT BLOCCATI
  async getBlockedSlots(shopId: string): Promise<BlockedSlotDTO[]> {
    const response = await api.get(`/shops/${shopId}/blocked-slots`);
    return response.data;
  },

  async createBlockedSlot(
    shopId: string,
    data: Omit<BlockedSlotDTO, "id" | "shopId">,
  ): Promise<BlockedSlotDTO> {
    const response = await api.post(`/shops/${shopId}/blocked-slots`, data);
    return response.data;
  },

  async deleteBlockedSlot(shopId: string, slotId: string): Promise<void> {
    await api.delete(`/shops/${shopId}/blocked-slots/${slotId}`);
  },

  // DATE ECCEZIONI
  async getDateExceptions(shopId: string) {
    const response = await api.get(`/shops/${shopId}/date-exceptions`);
    return response.data;
  },

  async upsertDateException(
    shopId: string,
    data: {
      date: string;
      isOpen: boolean;
      startTime?: string;
      endTime?: string;
      breakStart?: string | null;
      breakEnd?: string | null;
      reason?: string;
    },
  ) {
    const response = await api.post(`/shops/${shopId}/date-exceptions`, data);
    return response.data;
  },

  async deleteDateException(shopId: string, date: string) {
    await api.delete(`/shops/${shopId}/date-exceptions/${date}`);
  },
};
