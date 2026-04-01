import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicOnlyRoute } from "@/router/PublicOnlyRoute";

// PAGINE PUBBLICHE
import { ShopPage } from "@/pages/public/ShopPage/ShopPage";
import { LoginPage } from "@/pages/public/LoginPage/LoginPage";
import { RegisterPage } from "@/pages/public/RegisterPage/RegisterPage";
import { CancelPage } from "@/pages/public/CancelPage/CancelPage";
import { LegalPage } from "@/pages/public/LegalPage/LegalPage";

// PAGINE PRIVATE
import { CalendarPage } from "@/pages/dashboard/CalendarPage/CalendarPage";
import { ServicesPage } from "@/pages/dashboard/ServicesPage/ServicesPage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage/SettingsPage";
import { AnalyticsPage } from "@/pages/dashboard/AnalyticsPage/AnalyticsPage";
import { BookingsPage } from "@/pages/dashboard/BookingsPage/BookingsPage";
import { CustomersPage } from "@/pages/dashboard/CustomersPage/CustomersPage";
import { OnboardingPage } from "@/pages/public/OnBoardingPage/OnBoardingPage";

export const router = createBrowserRouter([
  // ROOT
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // AUTH - SOLO UTENTI NON LOGGATI
  {
    element: <PublicOnlyRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  // PAGINA PUBBLICA BARBIERE
  {
    path: "/b/:slug",
    element: <ShopPage />,
  },
  {
    path: "/b/:slug/legal",
    element: <LegalPage />,
  },

  // CANCELLAZIONE PRENOTAZIONE
  {
    path: "/cancel/:bookingId",
    element: <CancelPage />,
  },

  // PAGINE PRIVATE
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/onboarding", element: <OnboardingPage /> },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <CalendarPage /> },
          { path: "/dashboard/bookings", element: <BookingsPage /> },
          { path: "/dashboard/services", element: <ServicesPage /> },
          { path: "/dashboard/customers", element: <CustomersPage /> },
          { path: "/dashboard/analytics", element: <AnalyticsPage /> },
          { path: "/dashboard/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);
