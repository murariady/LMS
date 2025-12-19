import Link from "next/link"
import { GraduationCap, Target, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">RMURA LMS</span>
          </Link>
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
            <Link href="/about" className="text-sm font-medium text-primary">
              Tentang
            </Link>
          </nav>
          <Link href="/login">
            <Button>Masuk</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang CareerLearn LMS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform pembelajaran yang berfokus pada pengembangan skill dan persiapan karir untuk lulusan baru
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Menjadi platform pembelajaran terdepan yang menghubungkan pendidikan dengan dunia kerja, mempersiapkan
                  lulusan baru untuk sukses dalam karir mereka.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Menyediakan pembelajaran berkualitas dan program persiapan karir yang komprehensif untuk membantu
                  lulusan baru mengembangkan skill yang dibutuhkan industri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instruktur Berpengalaman</h3>
              <p className="text-sm text-muted-foreground">
                Belajar dari praktisi industri yang berpengalaman di bidangnya
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sertifikat Resmi</h3>
              <p className="text-sm text-muted-foreground">
                Dapatkan sertifikat yang diakui oleh industri setelah menyelesaikan kursus
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Pembelajaran Fleksibel</h3>
              <p className="text-sm text-muted-foreground">Belajar kapan saja, di mana saja sesuai dengan waktu Anda</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Cerita Kami</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              CareerLearn LMS didirikan dengan tujuan untuk mengatasi kesenjangan antara pendidikan formal dan kebutuhan
              industri. Kami memahami bahwa lulusan baru sering menghadapi kesulitan dalam memasuki dunia kerja karena
              kurangnya skill praktis dan persiapan karir yang memadai.
            </p>
            <p className="text-muted-foreground mb-4">
              Platform kami menawarkan kombinasi unik antara pembelajaran teknis dan pengembangan soft skill, dilengkapi
              dengan program persiapan karir yang komprehensif. Mulai dari pembuatan CV, persiapan interview, hingga
              strategi job hunting.
            </p>
            <p className="text-muted-foreground">
              Dengan ribuan lulusan yang telah berhasil memulai karir mereka, kami terus berkomitmen untuk menyediakan
              pendidikan berkualitas yang relevan dengan kebutuhan industri modern.
            </p>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Karirmu?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan lulusan lainnya yang telah berhasil mempersiapkan karir mereka bersama kami
          </p>
          <Link href="/login">
            <Button size="lg">Daftar Sekarang - Gratis</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
