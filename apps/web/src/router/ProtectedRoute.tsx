import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

export const ProtectedRoute = () => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  // NON AUTENTICATO  VA AL LOGIN
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // AUTENTICATO MA SENZA SHOP VA ALL'ONBOARDING
  if (!user?.shopId && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  // AUTENTICATO CON SHOP
  if (user?.shopId && location.pathname === "/onboarding") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
