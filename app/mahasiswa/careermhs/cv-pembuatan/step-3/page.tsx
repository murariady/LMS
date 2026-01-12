"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Step3CV() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-xl text-center">
      <h1 className="text-3xl font-bold mb-4">
        Step 3: Portofolio & Finalisasi
      </h1>

      <p className="text-muted-foreground mb-8">
        Tambahkan link portofolio GitHub, website, atau project terbaikmu.
      </p>

      <p className="mb-8">
        🎉 Data CV kamu sudah lengkap!
      </p>

      <div className="flex justify-center gap-4">
        {/* ✅ PREVIEW CV — SEKARANG BISA DIKLIK */}
        <Button asChild variant="outline">
          <Link href="/career/cv-pembuatan/preview">
            Preview CV
          </Link>
        </Button>

        {/* DOWNLOAD PDF */}
        <Button onClick={() => window.print()}>
          Download CV (PDF)
        </Button>
      </div>

      <div className="mt-8">
        <Link href="/career">
          ← Kembali ke Modul Karir
        </Link>
      </div>
    </div>
  )
}
