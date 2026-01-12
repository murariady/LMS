import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Clock,
  Star,
  Users,
  Search,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  const courses = [
    {
      title: "Full Stack Web Development",
      description:
        "Pelajari front-end dan back-end development dari dasar hingga mahir",
      category: "Programming",
      level: "Pemula - Menengah",
      duration: "40 jam",
      students: 1250,
      rating: 4.8,
      price: "Gratis",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Kuasai analisis data dan machine learning dengan Python",
      category: "Data Science",
      level: "Menengah",
      duration: "35 jam",
      students: 980,
      rating: 4.9,
      price: "Gratis",
    },
    {
      title: "UI/UX Design Mastery",
      description:
        "Belajar desain interface dan user experience yang menarik",
      category: "Design",
      level: "Pemula",
      duration: "25 jam",
      students: 1450,
      rating: 4.7,
      price: "Gratis",
    },
    {
      title: "Digital Marketing Strategy",
      description:
        "Strategi pemasaran digital untuk meningkatkan brand awareness",
      category: "Marketing",
      level: "Pemula - Menengah",
      duration: "30 jam",
      students: 2100,
      rating: 4.6,
      price: "Gratis",
    },
    {
      title: "Mobile App Development",
      description:
        "Bangun aplikasi mobile dengan React Native",
      category: "Programming",
      level: "Menengah",
      duration: "45 jam",
      students: 890,
      rating: 4.8,
      price: "Gratis",
    },
    {
      title: "Cloud Computing Fundamentals",
      description:
        "Pelajari AWS, Azure, dan Google Cloud Platform",
      category: "Cloud",
      level: "Menengah - Lanjut",
      duration: "38 jam",
      students: 760,
      rating: 4.9,
      price: "Gratis",
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

            {/* NAVBAR TANPA SERTIFIKAT */}
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/mahasiswa/dashboard"
                className="text-sm font-medium text-white hover:text-primary"
              >
                Beranda
              </Link>
              <Link
                href="/mahasiswa/coursesmhs"
                className="text-sm font-medium text-primary"
              >
                Kursus Saya
              </Link>
              <Link
                href="/mahasiswa/careermhs"
                className="text-sm font-medium text-white hover:text-primary"
              >
                Persiapan Karir
              </Link>
            </nav>
          </div>

          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 border-b">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Jelajahi Kursus
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Temukan berbagai kursus berkualitas untuk mengembangkan skill
            dan mempersiapkan karirmu
          </p>

          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari kursus..."
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Semua Kursus
          </h2>
          <div className="text-sm text-gray-300">
            Menampilkan {courses.length} kursus
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <CardTitle className="text-gray-900 line-clamp-2">
                  {course.title}
                </CardTitle>

                <CardDescription className="text-gray-700 line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>
                      {course.students.toLocaleString()} siswa
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="font-bold text-lg text-primary">
                  {course.price}
                </div>
                <Button>Mulai Belajar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 RMURA LMS. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
