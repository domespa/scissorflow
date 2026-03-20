import { useAuthStore } from "@/store/auth.store";

export const useShop = () => {
  const { user } = useAuthStore();

  return {
    shopId: user?.shopId ?? null,
  };
};
