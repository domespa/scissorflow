import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

export const PublicOnlyRoute = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Outlet />;

  // AUTENTICATO CON SHOP VAI ALLA DASH
  if (user?.shopId) return <Navigate to="/dashboard" replace />;

  // AUTENTICATO SENZA SHOP VAI A ONBOARDING
  return <Navigate to="/onboarding" replace />;
};
