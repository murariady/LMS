"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, Mail, Lock, Eye, EyeOff, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const DEMO_ACCOUNTS = {
  student: {
    email: "mahasiswa@demo.com",
    password: "mahasiswa123",
    role: "student",
    name: "Akhmad Murariady",
  },
  admin: {
    email: "admin@demo.com",
    password: "admin123",
    role: "admin",
    name: "RMURA",
  },
}

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password } = formData

    if (email === DEMO_ACCOUNTS.student.email && password === DEMO_ACCOUNTS.student.password) {
      localStorage.setItem("userRole", "student")
      localStorage.setItem("userName", DEMO_ACCOUNTS.student.name)
      router.push("/dashboard")
    } else if (email === DEMO_ACCOUNTS.admin.email && password === DEMO_ACCOUNTS.admin.password) {
      localStorage.setItem("userRole", "admin")
      localStorage.setItem("userName", DEMO_ACCOUNTS.admin.name)
      router.push("/admin/dashboard")
    } else {
      alert("Email atau password salah!")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fillDemoCredentials = (role: "student" | "admin") => {
    const account = DEMO_ACCOUNTS[role]
    setFormData({
      email: account.email,
      password: account.password,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">RMURA LMS</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Kembali ke Beranda</Button>
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 bg-muted/20">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Selamat Datang Kembali</CardTitle>
            <CardDescription className="text-center">Masuk ke akun Anda untuk melanjutkan pembelajaran</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 space-y-3">
              <p className="text-sm font-medium text-center text-muted-foreground">Akun Demo untuk Testing</p>
              <div className="grid grid-cols-2 gap-3">
                <Card
                  className="cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fillDemoCredentials("student")}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Mahasiswa</p>
                        <p className="text-xs text-muted-foreground">mahasiswa@demo.com</p>
                        <p className="text-xs text-muted-foreground">mahasiswa123</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fillDemoCredentials("admin")}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Admin/Dosen</p>
                        <p className="text-xs text-muted-foreground">admin@demo.com</p>
                        <p className="text-xs text-muted-foreground">admin123</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Atau masuk dengan email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    className="pl-9"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-9 pr-9"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Masuk
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center w-full text-muted-foreground">
              Belum punya akun?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Daftar sekarang
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
