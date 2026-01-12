import Link from "next/link"
import { GraduationCap, Target, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
         {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-white">RMURA LMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Kursus
            </Link>
            <Link href="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">
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
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tentang RMURA LMS
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Platform pembelajaran yang berfokus pada pengembangan skill dan persiapan karir
            untuk lulusan baru
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Vision & Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-gray-900">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Menjadi platform pembelajaran terdepan yang menghubungkan pendidikan
                  dengan dunia kerja, serta mempersiapkan lulusan baru untuk sukses dalam
                  karir mereka.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-gray-900">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Menyediakan pembelajaran berkualitas dan program persiapan karir yang
                  komprehensif untuk membantu lulusan baru mengembangkan skill yang
                  dibutuhkan industri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-white">
                Instruktur Berpengalaman
              </h3>
              <p className="text-sm text-gray-300">
                Belajar dari praktisi industri yang berpengalaman di bidangnya
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-white">
                Sertifikat Resmi
              </h3>
              <p className="text-sm text-gray-300">
                Dapatkan sertifikat yang diakui oleh industri setelah menyelesaikan kursus
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-white">
                Pembelajaran Fleksibel
              </h3>
              <p className="text-sm text-gray-300">
                Belajar kapan saja dan di mana saja sesuai dengan waktu Anda
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Cerita Kami
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              RMURA LMS didirikan dengan tujuan untuk mengatasi kesenjangan antara pendidikan
              formal dan kebutuhan industri. Kami memahami bahwa lulusan baru sering
              menghadapi kesulitan dalam memasuki dunia kerja karena kurangnya skill praktis
              dan persiapan karir yang memadai.
            </p>
            <p className="text-gray-300">
              Platform kami menawarkan kombinasi unik antara pembelajaran teknis dan
              pengembangan soft skill, dilengkapi dengan program persiapan karir yang
              komprehensif mulai dari pembuatan CV, persiapan interview, hingga strategi job
              hunting.
            </p>
            <p className="text-gray-300">
              Dengan ribuan lulusan yang telah berhasil memulai karir mereka, kami terus
              berkomitmen untuk menyediakan pendidikan berkualitas yang relevan dengan
              kebutuhan industri modern.
            </p>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Siap Memulai Perjalanan Karirmu?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan lulusan lainnya yang telah berhasil mempersiapkan
            karir mereka bersama RMURA LMS
          </p>
          <Link href="/login">
            <Button size="lg">Daftar Sekarang - Gratis</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
