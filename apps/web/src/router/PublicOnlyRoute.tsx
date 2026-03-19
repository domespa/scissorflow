import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

// SE GIA' LOGGATO VA ALLA DASH
export const PublicOnlyRoute = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
