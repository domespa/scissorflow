import { createBrowserRouter, Navigate } from "react-router-dom";

// PAGINE PUBBLICHE
import { ShopPage } from "@/pages/public/ShopPage/ShopPage";

// PAGINE DASHBOARD
import { CalendarPage } from "@/pages/dashboard/CalendarPage/CalendarPage";
import { ServicesPage } from "@/pages/dashboard/ServicesPage/ServicesPage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage/SettingsPage";
import { AnalyticsPage } from "@/pages/dashboard/AnalyticsPage/AnalyticsPage";
import { BookingsPage } from "@/pages/dashboard/BookingsPage/BookingsPage";
import { CustomersPage } from "@/pages/dashboard/CustomersPage/CustomersPage";

export const router = createBrowserRouter([
  // REDIRECT ALLA DASH
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  // =========================================
  //           ROTTE PUBBLICHE
  // =========================================
  {
    path: "/b/:slug",
    element: <ShopPage />,
  },
  // =========================================

  // =========================================
  //           ROTTE DASHBOARD
  // =========================================
  {
    path: "/dashboard",
    element: <CalendarPage />,
  },
  {
    path: "/dashboard/bookings",
    element: <BookingsPage />,
  },
  {
    path: "/dashboard/services",
    element: <ServicesPage />,
  },
  {
    path: "/dashboard/customers",
    element: <CustomersPage />,
  },
  {
    path: "/dashboard/analytics",
    element: <AnalyticsPage />,
  },
  {
    path: "/dashboard/settings",
    element: <SettingsPage />,
  },
  // =========================================
]);
