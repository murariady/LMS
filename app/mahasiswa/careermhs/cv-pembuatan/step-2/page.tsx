"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step2CV() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">
        Step 2: Pendidikan & Skill
      </h1>

      <div className="space-y-4">
        <div>
          <Label>Pendidikan Terakhir</Label>
          <Input placeholder="S1 Teknologi Informasi" />
        </div>

        <div>
          <Label>Institusi</Label>
          <Input placeholder="Universitas Cahaya Bangsa" />
        </div>

        <div>
          <Label>Skill Utama</Label>
          <Input placeholder="HTML, CSS, JavaScript, React" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/career/cv-pembuatan/step-1">
          <Button variant="outline">Kembali</Button>
        </Link>

        <Link href="/career/cv-pembuatan/step-3">
          <Button>Lanjut</Button>
        </Link>
      </div>
    </div>
  )
}
