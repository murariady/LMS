import Link from "next/link"
import { GraduationCap, FileText, Briefcase, Users, Award, CheckCircle2, TrendingUp, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// fungsi slug otomatis untuk URL
const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "dan")
    .replace(/[^\w-]+/g, "")


export default function CareerPage() {
  const careerModules = [
    {
      icon: FileText,
      title: "Pembuatan CV dan Portfolio",
      description: "Belajar membuat CV dan portfolio yang menarik perhatian recruiter",
      lessons: 8,
      duration: "3 jam",
      status: "available",
    },
    {
      icon: Users,
      title: "Teknik Interview",
      description: "Persiapan interview dari basic hingga behavioral questions",
      lessons: 12,
      duration: "5 jam",
      status: "available",
    },
    {
      icon: Briefcase,
      title: "Job Hunting Strategy",
      description: "Strategi efektif mencari dan melamar pekerjaan",
      lessons: 10,
      duration: "4 jam",
      status: "available",
    },
    {
      icon: TrendingUp,
      title: "Personal Branding",
      description: "Membangun personal brand di LinkedIn dan media profesional",
      lessons: 6,
      duration: "2 jam",
      status: "available",
    },
  ]

  const jobListings = [
    {
      company: "Tech Startup Indonesia",
      position: "Junior Full Stack Developer",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 6-9 juta",
      posted: "2 hari lalu",
    },
    {
      company: "Digital Agency Creative",
      position: "UI/UX Designer",
      location: "Bandung",
      type: "Full-time",
      salary: "Rp 5-8 juta",
      posted: "3 hari lalu",
    },
    {
      company: "E-commerce Platform",
      position: "Digital Marketing Specialist",
      location: "Surabaya",
      type: "Full-time",
      salary: "Rp 6-10 juta",
      posted: "1 minggu lalu",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RMURA LMS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                Kursus Saya
              </Link>
              <Link href="/career" className="text-sm font-medium text-primary">
                Persiapan Karir
              </Link>
              <Link href="/certificates" className="text-sm font-medium hover:text-primary transition-colors">
                Sertifikat
              </Link>
            </nav>
          </div>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Persiapan Karir</h1>
            <p className="text-lg text-muted-foreground">
              Program lengkap untuk mempersiapkan lulusan baru memasuki dunia kerja dengan percaya diri
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Career Modules */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Modul Persiapan Karir</h2>
              <p className="text-muted-foreground mb-6">
                Ikuti program terstruktur untuk meningkatkan kesiapan karirmu
              </p>
            </div>

            <div className="grid gap-4">
              {careerModules.map((module, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <module.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{module.title}</CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <span>{module.lessons} pelajaran</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>

                      {/* tombol sudah aktif */}
                      <Link
                        href={`/career/courses/${createSlug(module.title)}`}
                        className="bg-primary hover:bg-primary/80 transition text-white px-4 py-2 rounded"
                      >
                        Mulai
                      </Link>

                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Job Listings Sidebar */}
          <div className="space-y-6">
            …
            {/* bagian lain tetap sama */}
          </div>

        </div>
      </main>

      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
