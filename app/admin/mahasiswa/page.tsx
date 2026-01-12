"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

type Mahasiswa = {
  id: number
  name: string
  nim: string
  email: string
  status: "Aktif" | "Nonaktif"
}

export default function KelolaMahasiswaPage() {
  const [students, setStudents] = useState<Mahasiswa[]>([
    {
      id: 1,
      name: "Akhmad Murariady",
      nim: "202201001",
      email: "akhmad@email.com",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Muhammad Ariandi",
      nim: "202201002",
      email: "ariandi@email.com",
      status: "Aktif",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [form, setForm] = useState<Mahasiswa>({
    id: 0,
    name: "",
    nim: "",
    email: "",
    status: "Aktif",
  })

  /* ================= ACTIONS ================= */

  const openTambah = () => {
    setIsEdit(false)
    setForm({ id: 0, name: "", nim: "", email: "", status: "Aktif" })
    setShowForm(true)
  }

  const openEdit = (mhs: Mahasiswa) => {
    setIsEdit(true)
    setForm(mhs)
    setShowForm(true)
  }

  const simpanMahasiswa = () => {
    if (!form.name || !form.nim || !form.email) {
      alert("Lengkapi data mahasiswa")
      return
    }

    if (isEdit) {
      setStudents(students.map(s => (s.id === form.id ? form : s)))
    } else {
      setStudents([...students, { ...form, id: Date.now() }])
    }

    setShowForm(false)
  }

  const hapusMahasiswa = (id: number) => {
    if (confirm("Yakin ingin menghapus mahasiswa ini?")) {
      setStudents(students.filter(s => s.id !== id))
    }
  }

  /* ================= UI ================= */

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Kelola Mahasiswa</h1>
        <Button
          onClick={openTambah}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          + Tambah Mahasiswa
        </Button>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl p-5 space-y-4 shadow">
        {students.map(s => (
          <div
            key={s.id}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <div>
              <p className="font-semibold text-gray-900">{s.name}</p>
              <p className="text-sm text-gray-600">
                {s.nim} • {s.email}
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                {s.status}
              </span>
            </div>

            <div className="space-x-2">
              <Button variant="outline" onClick={() => openEdit(s)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => hapusMahasiswa(s.id)}>
                Hapus
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">
              {isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
            </h2>

            <input
              className="w-full border border-gray-300 p-2 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Nama Mahasiswa"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="w-full border border-gray-300 p-2 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="NIM"
              value={form.nim}
              onChange={e => setForm({ ...form, nim: e.target.value })}
            />

            <input
              className="w-full border border-gray-300 p-2 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Batal
              </Button>
              <Button
                onClick={simpanMahasiswa}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Simpan
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
