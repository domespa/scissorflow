import { api } from "./api";

export type CustomerSummary = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  noShows: number;
  isBlocked: boolean;
  totalBookings: number;
  totalSpent: number;
  lastBookingAt: string | null;
  lastServiceName: string | null;
  firstVisitAt: string | null;
};

export type CustomerDetail = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  noShows: number;
  isBlocked: boolean;
  totalBookings: number;
  totalSpent: number;
  bookings: {
    id: string;
    startAt: string;
    endAt: string;
    status: string;
    serviceName: string;
    servicePrice: number | null;
    duration: number;
  }[];
};

export const customerService = {
  async getCustomers(): Promise<CustomerSummary[]> {
    const response = await api.get("/customers");
    return response.data;
  },

  async getCustomerDetail(customerId: string): Promise<CustomerDetail> {
    const response = await api.get(`/customers/${customerId}`);
    return response.data;
  },

  async getBlockedCustomers(): Promise<CustomerSummary[]> {
    const response = await api.get("/customers/blocked");
    return response.data;
  },

  async unblockCustomer(customerId: string): Promise<void> {
    await api.post(`/customers/${customerId}/unblock`);
  },

  async blockCustomerManual(email?: string, phone?: string): Promise<void> {
    await api.post("/customers/block-manual", { email, phone });
  },

  async getBlacklist(): Promise<
    {
      id: string;
      email: string | null;
      phone: string | null;
      reason: string | null;
      createdAt: string;
    }[]
  > {
    const response = await api.get("/customers/blacklist");
    return response.data;
  },

  async addToBlacklist(
    email?: string,
    phone?: string,
    reason?: string,
  ): Promise<void> {
    await api.post("/customers/blacklist", { email, phone, reason });
  },

  async removeFromBlacklist(blacklistId: string): Promise<void> {
    await api.delete(`/customers/blacklist/${blacklistId}`);
  },
};
