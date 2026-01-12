"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step1CV() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">
        Step 1: Data Diri
      </h1>

      <div className="space-y-4">
        <div>
          <Label>Nama Lengkap</Label>
          <Input placeholder="Contoh: Akhmad Murariady" />
        </div>

        <div>
          <Label>Email</Label>
          <Input placeholder="email@gmail.com" />
        </div>

        <div>
          <Label>No. HP</Label>
          <Input placeholder="08xxxxxxxxxx" />
        </div>

        <div>
          <Label>Ringkasan Diri</Label>
          <Input placeholder="Mahasiswa TI yang tertarik pada web development..." />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Link href="/career/cv-pembuatan/step-2">
          <Button>Lanjut</Button>
        </Link>
      </div>
    </div>
  )
}
