import Link from "next/link"
import {
  GraduationCap,
  FileText,
  Briefcase,
  Users,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareerPage() {
  const careerModules = [
    {
      icon: FileText,
      title: "Pembuatan CV dan Portofolio",
      description:
        "Belajar membuat CV dan portofolio yang menarik perhatian recruiter",
      lessons: 8,
      duration: "3 jam",
      status: "available",
      href: "/career/cv-pembuatan",
    },
    {
      icon: Users,
      title: "Teknik Interview",
      description:
        "Persiapan interview dari basic hingga behavioral questions",
      lessons: 12,
      duration: "5 jam",
      status: "coming-soon",
    },
    {
      icon: Briefcase,
      title: "Job Hunting Strategy",
      description:
        "Strategi efektif mencari dan melamar pekerjaan",
      lessons: 10,
      duration: "4 jam",
      status: "coming-soon",
    },
    {
      icon: TrendingUp,
      title: "Personal Branding",
      description:
        "Membangun personal brand di LinkedIn dan media profesional",
      lessons: 6,
      duration: "2 jam",
      status: "coming-soon",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
       {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 cursor-default select-none">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">RMURA LMS</span>
              </div>

              {/* NAVIGATION */}
              <nav className="hidden md:flex items-center gap-4">
                <Link
                  href="/mahasiswa/dashboard"
                  className="text-sm font-medium text-white hover:text-primary"
                >
                  Beranda
                </Link>

                <Link
                  href="/mahasiswa/coursesmhs"
                  className="text-sm font-medium text-white hover:text-primary"
                >
                  Kursus Saya
                </Link>

                <Link
                  href="/mahasiswa/careermhs"
                  className="text-sm font-medium text-primary"
                >
                  Persiapan Karir
                </Link>
              </nav>
            </div>

            {/* KANAN */}
            <Link href="/mahasiswa/dashboard">
              <Button>Dashboard</Button>
            </Link>

          </div>
        </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Modul Persiapan Karir
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Ikuti program terstruktur untuk meningkatkan kesiapan karirmu
            sebelum terjun ke dunia kerja
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid gap-4 max-w-4xl">
          {careerModules.map((module, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow bg-white"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <CardTitle className="mb-2 text-gray-900">
                      {module.title}
                    </CardTitle>

                    <CardDescription className="text-gray-700">
                      {module.description}
                    </CardDescription>

                    <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
                      <span>{module.lessons} pelajaran</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>

                  {/* ACTION */}
                  {module.status === "available" ? (
                    <Link href={module.href!}>
                      <Button>Mulai</Button>
                    </Link>
                  ) : (
                    <Badge variant="secondary">
                      Segera Hadir
                    </Badge>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          &copy; 2025 RMURA LMS. Semua hak dilindungi.
        </div>
      </footer>
    </div>
  )
}
