import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ScissorsIcon } from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await authService.login(form);
      setAuth(data.user, data.token);
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Email o password errati");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ScissorsIcon
            size={32}
            weight="duotone"
            className="text-gray-900 dark:text-white"
          />
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            ScissorFlow
          </span>
        </div>

        {/* CARD */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Bentornato
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Accedi al tuo account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="mario@barbershop.it"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" loading={loading} className="w-full mt-2">
              Accedi
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Non hai un account?{" "}
          <Link
            to="/register"
            className="text-gray-900 dark:text-white font-medium hover:underline"
          >
            Registrati
          </Link>
        </p>
      </div>
    </div>
  );
};
