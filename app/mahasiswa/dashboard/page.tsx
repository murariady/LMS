"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // ✅ AMBIL USER YANG DISIMPAN SAAT LOGIN
    const user = localStorage.getItem("user")

    if (!user) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(user)

    // ✅ ROLE HARUS MAHASISWA
    if (parsedUser.role !== "mahasiswa") {
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

  const courses = [
    {
      title: "Web Development Fundamental",
      progress: 75,
      category: "Programming",
      lessons: "12/16 Lessons",
    },
    {
      title: "UI/UX Design Basics",
      progress: 45,
      category: "Design",
      lessons: "7/15 Lessons",
    },
    {
      title: "Digital Marketing Strategy",
      progress: 90,
      category: "Marketing",
      lessons: "18/20 Lessons",
    },
  ]

  const careerPrep = [
    {
      title: "Membuat CV Profesional",
      status: "Selesai",
      icon: Award,
    },
    {
      title: "Teknik Interview yang Efektif",
      status: "Dalam Progress",
      icon: Briefcase,
    },
    {
      title: "Portfolio Project",
      status: "Belum Dimulai",
      icon: BookOpen,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 cursor-default select-none">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">RMURA LMS</span>
              </div>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/mahasiswa/dashboard" className="text-sm font-medium text-primary">
                Beranda
              </Link>
              <Link href="/mahasiswa/coursesmhs" className="text-sm font-medium hover:text-primary">
                Kursus Saya
              </Link>
              <Link href="/mahasiswa/careermhs" className="text-sm font-medium hover:text-primary">
                Persiapan Karir
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
            <Avatar>
              <AvatarFallback>
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Selamat Datang Kembali, {userName}!
          </h1>
          <p className="text-muted-foreground">
            Mari lanjutkan perjalanan pembelajaran Anda hari ini
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Kursus Aktif</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Kursus Selesai</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Jam Belajar</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kursus yang Sedang Dipelajari</CardTitle>
                <CardDescription>
                  Lanjutkan pembelajaran dari terakhir kali
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-4 hover:border-primary"
                  >
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {course.lessons}
                        </span>
                      </div>
                      <Button size="sm">Lanjutkan</Button>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Persiapan Karir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {careerPrep.map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 border rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-xs text-muted-foreground">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
                <Link href="/career">
                  <Button variant="outline" className="w-full mt-2">
                    Lihat Semua Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 RMURA LMS. Semua hak dilindungi.
      </footer>
    </div>
  )
}
