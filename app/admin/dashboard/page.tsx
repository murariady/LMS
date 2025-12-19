"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  UserCheck,
  FileText,
  Calendar,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AdminDashboard() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    const name = localStorage.getItem("userName")

    if (role !== "admin") {
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

  const recentStudents = [
    { name: "Akhmad Murariady", course: "Web Development", progress: 75, status: "Aktif" },
    { name: "Muhammad Ariandi", course: "UI/UX Design", progress: 60, status: "Aktif" },
    { name: "Widya Diasti Permata", course: "Digital Marketing", progress: 90, status: "Aktif" },
    { name: "Muhammad Fikri Haikal", course: "Data Science", progress: 65, status: "Aktif" },
  ]

  const courseStats = [
    { title: "Web Development Fundamental", students: 45, completion: 68 },
    { title: "UI/UX Design Basics", students: 32, completion: 54 },
    { title: "Digital Marketing Strategy", students: 28, completion: 75 },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RMURA LMS - Admin</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link href="/admin/students" className="text-sm font-medium hover:text-primary transition-colors">
                Kelola Mahasiswa
              </Link>
              <Link href="/admin/courses" className="text-sm font-medium hover:text-primary transition-colors">
                Kelola Kursus
              </Link>
              <Link href="/admin/reports" className="text-sm font-medium hover:text-primary transition-colors">
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
          <h1 className="text-3xl font-bold mb-2">Selamat Datang, Admin RMURA</h1>
          <p className="text-muted-foreground">Dashboard Admin - Kelola mahasiswa dan kursus dengan mudah</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+12 dari bulan lalu</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Kursus</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+2 kursus baru</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sertifikat Diterbitkan</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">189</div>
              <p className="text-xs text-muted-foreground">+23 bulan ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tingkat Kelulusan</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">+5% dari semester lalu</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Aktivitas Mahasiswa Terkini */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Aktivitas Mahasiswa Terkini</CardTitle>
                <CardDescription>Mahasiswa yang sedang aktif belajar hari ini</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{student.progress}%</p>
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                          {student.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistik Kursus */}
            <Card>
              <CardHeader>
                <CardTitle>Statistik Kursus</CardTitle>
                <CardDescription>Performa kursus berdasarkan tingkat penyelesaian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseStats.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-muted-foreground">{course.students} mahasiswa</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${course.completion}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Tingkat penyelesaian: {course.completion}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Users className="mr-2 h-4 w-4" />
                  Tambah Mahasiswa Baru
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Buat Kursus Baru
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Laporan
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="mr-2 h-4 w-4" />
                  Terbitkan Sertifikat
                </Button>
              </CardContent>
            </Card>

            {/* Jadwal Hari Ini */}
            <Card>
              <CardHeader>
                <CardTitle>Jadwal Hari Ini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Meeting Tim Dosen</p>
                    <p className="text-xs text-muted-foreground">09:00 - 10:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <UserCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Review Tugas Mahasiswa</p>
                    <p className="text-xs text-muted-foreground">13:00 - 15:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Evaluasi Semester</p>
                    <p className="text-xs text-muted-foreground">16:00 - 17:00</p>
                  </div>
                </div>
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
