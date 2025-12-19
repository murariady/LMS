"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { GraduationCap, BookOpen, Briefcase, Award, TrendingUp, Settings, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    const name = localStorage.getItem("userName")

    if (role !== "student") {
      router.push("/login")
      return
    }

    if (name) {
      setUserName(name)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userName")
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
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RMURA LMS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                Kursus Saya
              </Link>
              <Link href="/career" className="text-sm font-medium hover:text-primary transition-colors">
                Persiapan Karir
              </Link>
              <Link href="/certificates" className="text-sm font-medium hover:text-primary transition-colors">
                Sertifikat
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
              <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Selamat Datang Kembali, {userName}!</h1>
          <p className="text-muted-foreground">Mari lanjutkan perjalanan pembelajaran Anda hari ini</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kursus Aktif</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 dari bulan lalu</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kursus Selesai</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 bulan ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jam Belajar</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">Minggu ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sertifikat</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Total diperoleh</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Kursus yang Sedang Dipelajari */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kursus yang Sedang Dipelajari</CardTitle>
                <CardDescription>Lanjutkan pembelajaran dari terakhir kali</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                            {course.category}
                          </span>
                          <span>{course.lessons}</span>
                        </div>
                      </div>
                      <Button size="sm">Lanjutkan</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Persiapan Karir */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Persiapan Karir</CardTitle>
                <CardDescription>Tingkatkan kesiapan karirmu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {careerPrep.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 border rounded-lg hover:border-primary transition-colors"
                  >
                    <div className="mt-1">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          item.status === "Selesai"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Dalam Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
                <Link href="/career">
                  <Button variant="outline" className="w-full mt-2 bg-transparent">
                    Lihat Semua Program
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/courses">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Jelajahi Kursus Baru
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/career">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Cek Lowongan Kerja
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/certificates">
                    <Award className="mr-2 h-4 w-4" />
                    Download Sertifikat
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
