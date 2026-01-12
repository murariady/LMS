"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AdminDashboard() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // ✅ AMBIL DATA LOGIN YANG BENAR
    const user = localStorage.getItem("user")

    if (!user) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(user)

    // ✅ CEK ROLE ADMIN
    if (parsedUser.role !== "admin") {
      router.push("/login")
      return
    }

    // ✅ SET NAMA USER (PAKAI USERNAME)
    setUserName(parsedUser.username)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RMURA LMS - Admin</span>
            </Link>

            <nav className="hidden md:flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link href="/admin/mahasiswa" className="text-sm font-medium hover:text-primary">
                Kelola Mahasiswa
              </Link>
              <Link href="/admin/courses" className="text-sm font-medium hover:text-primary">
                Kelola Kursus
              </Link>
              <Link href="/admin/laporan" className="text-sm font-medium hover:text-primary">
                Laporan
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Selamat Datang, {userName}
        </h1>
        <p className="text-muted-foreground">
          Dashboard Admin - Kelola mahasiswa dan kursus dengan mudah
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader className="flex flex-row justify-between pb-2">
              <CardTitle className="text-sm">Total Mahasiswa</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between pb-2">
              <CardTitle className="text-sm">Total Kursus</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between pb-2">
              <CardTitle className="text-sm">Kelulusan</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 RMURA LMS
      </footer>
    </div>
  )
}
