import Link from "next/link"
import { FileText, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function CVPembuatanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Pembuatan CV & Portofolio
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Pelajari cara membuat CV profesional dan portofolio yang
            menarik perhatian recruiter serta sesuai standar industri.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        {/* PENJELASAN */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-gray-900">
              Apa yang akan kamu pelajari?
            </CardTitle>
            <CardDescription className="text-gray-600">
              Modul ini dirancang bertahap agar mudah diikuti, bahkan untuk pemula.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800">
                Struktur CV yang disukai HR & recruiter
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800">
                Menulis deskripsi diri, skill, dan pengalaman
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800">
                Membuat portofolio sederhana dan profesional
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800">
                CV siap diunduh dan digunakan melamar kerja
              </span>
            </div>
          </CardContent>
        </Card>

        {/* STEP */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <FileText className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-gray-900">
                Step 1
              </CardTitle>
              <CardDescription className="text-gray-600">
                Data Diri & Profil
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Isi identitas, ringkasan diri, dan tujuan karir.
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <FileText className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-gray-900">
                Step 2
              </CardTitle>
              <CardDescription className="text-gray-600">
                Pendidikan & Skill
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Tambahkan riwayat pendidikan, skill teknis, dan soft skill.
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <FileText className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-gray-900">
                Step 3
              </CardTitle>
              <CardDescription className="text-gray-600">
                Portofolio & Finalisasi
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Upload link portofolio dan siapkan CV final.
            </CardContent>
          </Card>
        </div>

        {/* AKSI */}
        <Card className="bg-white">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                Siap membuat CV profesional?
              </h3>
              <p className="text-gray-600">
                Mulai isi data CV kamu sekarang.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/career/cv-pembuatan/step-1">
                <Button size="lg">
                  Mulai Isi CV
                </Button>
              </Link>

              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Contoh CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
