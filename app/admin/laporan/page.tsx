export default function LaporanAdminPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Judul di background gelap */}
      <h1 className="text-3xl font-bold text-white">
        Laporan Sistem
      </h1>

      {/* Card statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Total Mahasiswa</p>
          <p className="text-2xl font-bold text-gray-900">245</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Total Kursus</p>
          <p className="text-2xl font-bold text-gray-900">18</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Sertifikat Terbit</p>
          <p className="text-2xl font-bold text-gray-900">189</p>
        </div>
      </div>

      {/* Card catatan */}
      <div className="bg-white p-6 rounded shadow">
        <p className="font-semibold text-gray-900 mb-2">
          Catatan
        </p>
        <p className="text-gray-600">
          Laporan ini digunakan admin untuk memantau perkembangan sistem LMS.
        </p>
      </div>
    </div>
  )
}
