import { api } from "./api";

export type CustomerSummary = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
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
};
