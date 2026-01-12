import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* JUDUL */}
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
          Daftar Akun Baru
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Buat akun untuk mulai menggunakan RMURA LMS
        </p>

        {/* FORM */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="nama">Nama Lengkap</Label>
            <Input
              id="nama"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@gmail.com"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
            />
          </div>

          <div>
            <Label htmlFor="confirm">Konfirmasi Password</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="********"
            />
          </div>
        </div>

        {/* TOMBOL DAFTAR */}
        <Button className="w-full mt-6">
          Daftar
        </Button>

        {/* LINK KE LOGIN */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Masuk
          </Link>
        </p>
      </div>
    </div>
  )
}
