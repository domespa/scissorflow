import { type ReactNode, useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import {
  CalendarCheckIcon,
  ScissorsIcon,
  UsersIcon,
  ChartBarIcon,
  GearIcon,
  ListIcon,
  XIcon,
  SignOutIcon,
  ClipboardTextIcon,
} from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuthStore } from "@/store/auth.store";

interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Calendario",
    path: "/dashboard",
    icon: <CalendarCheckIcon size={20} weight="duotone" />,
  },
  // {
  //   label: "Prenotazioni",
  //   path: "/dashboard/bookings",
  //   icon: <ClipboardTextIcon size={20} weight="duotone" />,
  // },
  {
    label: "Servizi",
    path: "/dashboard/services",
    icon: <ScissorsIcon size={20} weight="duotone" />,
  },
  {
    label: "Clienti",
    path: "/dashboard/customers",
    icon: <UsersIcon size={20} weight="duotone" />,
  },
  {
    label: "Analytics",
    path: "/dashboard/analytics",
    icon: <ChartBarIcon size={20} weight="duotone" />,
  },
  {
    label: "Impostazioni",
    path: "/dashboard/settings",
    icon: <GearIcon size={20} weight="duotone" />,
  },
];

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-900
        border-r border-gray-100 dark:border-gray-800
        transform transition-transform duration-200
        lg:relative lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ScissorsIcon
              size={24}
              weight="duotone"
              className="text-gray-900 dark:text-white"
            />
            <span className="font-semibold text-gray-900 dark:text-white">
              ScissorFlow
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded text-gray-400 hover:text-gray-600"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* NAVIGAZIONE */}
        <nav className="flex flex-col gap-1 px-3 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                transition-colors duration-150
                ${
                  isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* UTENTE IN BASSO */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 px-3 py-2 mb-1">
            {/* AVATAR CON INIZIALI */}
            <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center shrink-0">
              <span className="text-xs font-medium text-white dark:text-gray-900">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
          >
            <SignOutIcon size={20} />
            Esci
          </button>
        </div>
      </aside>

      {/* CONTENUTO PRINCIPALE */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOPBAR */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ListIcon size={20} />
          </button>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        {/* PAGINA */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
