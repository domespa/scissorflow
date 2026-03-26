import { useState, useEffect } from "react";
import {
  TrendUpIcon,
  CalendarIcon,
  UsersIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { bookingService } from "@/services/booking.service";
import { customerService } from "@/services/customer.service";

type Analytics = {
  thisMonth: { bookings: number; revenue: number; noShowRate: number };
  byMonth: { month: string; bookings: number; revenue: number }[];
  byDayOfWeek: { day: string; bookings: number }[];
  topServices: { name: string; count: number; revenue: number }[];
};

const COLORS = ["#1a1a1a", "#2D6A4F", "#0077B6", "#7B2D8B", "#E85D04"];

// TOOLTIP PERSONALIZZATO
const CustomTooltip = ({
  active,
  payload,
  label,
  prefix = "",
  suffix = "",
}: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
        {label}
      </p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-sm font-semibold" style={{ color: p.color }}>
          {prefix}
          {typeof p.value === "number" && prefix === "€"
            ? p.value.toFixed(2)
            : p.value}
          {suffix}
        </p>
      ))}
    </div>
  );
};

export const AnalyticsPage = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [revenueView, setRevenueView] = useState<"bookings" | "revenue">(
    "bookings",
  );

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [analyticsData, customersData] = await Promise.all([
        bookingService.getAnalytics(),
        customerService.getCustomers(),
      ]);
      setAnalytics(analyticsData);
      setTotalCustomers(customersData.length);
    } catch {
      console.error("Errore caricamento analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !analytics) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  const maxDayBookings = Math.max(
    ...analytics.byDayOfWeek.map((d) => d.bookings),
  );

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Statistiche e andamento del tuo shop
        </p>
      </div>

      {/* CARD STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <CalendarIcon
              size={16}
              weight="duotone"
              className="text-blue-500"
            />
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Prenotazioni
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {analytics.thisMonth.bookings}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">questo mese</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendUpIcon
              size={16}
              weight="duotone"
              className="text-green-500"
            />
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Incasso
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            €{analytics.thisMonth.revenue.toFixed(0)}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">questo mese</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon size={16} weight="duotone" className="text-purple-500" />
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Clienti
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {totalCustomers}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">totali</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <WarningIcon
              size={16}
              weight="duotone"
              className="text-orange-500"
            />
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              No-show
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {analytics.thisMonth.noShowRate}%
          </p>
          <p className="text-xs text-gray-400 mt-0.5">questo mese</p>
        </div>
      </div>

      {/* GRAFICO ANDAMENTO MENSILE */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Andamento ultimi 6 mesi
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Prenotazioni confermate e incasso
            </p>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setRevenueView("bookings")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                revenueView === "bookings"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Prenotazioni
            </button>
            <button
              onClick={() => setRevenueView("revenue")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                revenueView === "revenue"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Incasso
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={analytics.byMonth}
            margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
          >
            <defs>
              <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1a1a1a" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#1a1a1a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              className="dark:stroke-gray-800"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              width={35}
              tickFormatter={(v) =>
                revenueView === "revenue" ? `€${v}` : `${v}`
              }
            />
            <Tooltip
              content={
                <CustomTooltip
                  prefix={revenueView === "revenue" ? "€" : ""}
                  suffix={revenueView === "bookings" ? " prev." : ""}
                />
              }
            />
            <Area
              type="monotone"
              dataKey={revenueView}
              stroke="#1a1a1a"
              strokeWidth={2}
              fill="url(#colorGrad)"
              dot={{ fill: "#1a1a1a", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, fill: "#1a1a1a" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* GRIGLIA INFERIORE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* GIORNI SETTIMANA */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Giorni più trafficati
          </p>
          <p className="text-xs text-gray-400 mb-4">
            Prenotazioni per giorno della settimana
          </p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={analytics.byDayOfWeek}
              margin={{ top: 0, right: 0, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                className="dark:stroke-gray-800"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip suffix=" prev." />} />
              <Bar dataKey="bookings" radius={[4, 4, 0, 0]}>
                {analytics.byDayOfWeek.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.bookings === maxDayBookings ? "#1a1a1a" : "#e5e7eb"
                    }
                    className={
                      entry.bookings === maxDayBookings
                        ? ""
                        : "dark:fill-gray-700"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* TOP SERVIZI */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Servizi più richiesti
          </p>
          <p className="text-xs text-gray-400 mb-4">Ultimi 6 mesi</p>

          {analytics.topServices.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <p className="text-sm text-gray-400">Nessun dato disponibile</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {analytics.topServices.map((service, i) => {
                const max = analytics.topServices[0].count;
                const pct = Math.round((service.count / max) * 100);
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300 truncate flex-1 mr-2">
                        {service.name}
                      </span>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white shrink-0">
                        {service.count}×
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: COLORS[i % COLORS.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
