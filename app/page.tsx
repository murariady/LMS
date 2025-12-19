import Link from "next/link"
import { BookOpen, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">RMURA LMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Kursus
            </Link>
            <Link href="/career" className="text-sm font-medium hover:text-primary transition-colors">
              Persiapan Karir
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              Tentang
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Masuk</Button>
            </Link>
            <Link href="/login">
              <Button>Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Platform Pembelajaran & Persiapan Karir
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Tingkatkan Skill & Siapkan Karirmu Bersama Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Platform Learning Management System yang dirancang khusus untuk membantu lulusan baru mengembangkan skill
            dan mempersiapkan karir dengan lebih baik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Mulai Belajar Gratis
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Kursus Berkualitas</CardTitle>
              <CardDescription>
                Akses ratusan kursus dari berbagai bidang yang dirancang oleh profesional
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Briefcase className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Persiapan Karir</CardTitle>
              <CardDescription>Bimbingan lengkap dari pembuatan CV, interview, hingga job hunting</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Award className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Sertifikat Resmi</CardTitle>
              <CardDescription>Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Kursus Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground mt-1">Siswa Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground mt-1">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">1K+</div>
            <div className="text-sm text-muted-foreground mt-1">Lulusan Berkarir</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
