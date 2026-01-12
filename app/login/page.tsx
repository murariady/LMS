"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, User, Lock, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        return;
      }

      // 🔑 SIMPAN USER LOGIN (INI PENTING)
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userRole", data.user.role);
      localStorage.setItem("userName", data.user.username);

      // 🚦 REDIRECT SESUAI ROLE
      if (data.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/mahasiswa/dashboard");
      }
    } catch (err) {
      setError("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-800 via-purple-800 to-fuchsia-800">
      {/* HEADER */}
      <header className="h-14 flex items-center justify-between px-6 bg-black/40 text-white">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-purple-400" />
          <span className="font-semibold">RMURA LMS</span>
        </div>
        <Link href="/" className="text-sm hover:underline">
          Kembali ke Beranda
        </Link>
      </header>

      {/* CONTENT */}
      <main className="flex flex-1 items-center justify-center px-4">
          <Card className="w-full max-w-md rounded-2xl shadow-xl">

          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold">
              Selamat Datang Kembali
            </CardTitle>
            <p className="text-sm text-gray-500">
              Masuk ke akun Anda untuk melanjutkan pembelajaran
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* FORM LOGIN */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-center text-xs text-gray-500">
                LOGIN DENGAN USERNAME
              </p>

              {/* USERNAME */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="
                    pl-10
                    bg-black
                    text-white
                    placeholder:text-gray-400
                    border-gray-700
                    focus:border-purple-500
                    focus:ring-purple-500
                  "
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="
                    pl-10 pr-10
                    bg-black
                    text-white
                    placeholder:text-gray-400
                    border-gray-700
                    focus:border-purple-500
                    focus:ring-purple-500
                  "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={loading}
              >
                {loading ? "Memproses..." : "Masuk"}
              </Button>
            </form>

            <p className="text-center text-xs text-gray-500">
              Belum punya akun?{" "}
              <Link href="/register" className="text-purple-600 hover:underline">
                Daftar sekarang
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>

      {/* FOOTER */}
      <footer className="h-12 flex items-center justify-center text-xs text-gray-300 bg-black/30">
        © 2025 RMURA LMS. Semua hak dilindungi.
      </footer>
    </div>
  );
}
