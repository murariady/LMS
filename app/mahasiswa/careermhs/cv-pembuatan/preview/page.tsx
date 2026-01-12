export default function PreviewCVPage() {
  return (
    <div className="min-h-screen bg-gray-300 py-10">
      {/* KERTAS A4 */}
      <div
        className="mx-auto bg-white shadow-lg flex"
        style={{ width: "794px", minHeight: "1123px" }} // A4 Portrait
      >
        {/* SIDEBAR KIRI */}
        <aside className="w-1/3 bg-gradient-to-b from-purple-700 to-indigo-700 text-white p-6">
          
          {/* FOTO */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-40 bg-white/20 border border-white/40 rounded-sm flex items-center justify-center text-xs text-white/80">
              FOTO
            </div>
          </div>

          {/* NAMA */}
          <h1 className="text-2xl font-bold mb-1 text-center">
            Akhmad Murariady
          </h1>
          <p className="text-sm mb-4 opacity-90 text-center">
            Mahasiswa Teknologi Informasi
          </p>

          {/* KONTAK */}
          <section className="mb-6">
            <h2 className="text-xs font-semibold uppercase mb-2 opacity-80">
              Kontak
            </h2>
            <p className="text-sm">email@gmail.com</p>
            <p className="text-sm">08xxxxxxxx</p>
            <p className="text-sm">Banjarmasin</p>
          </section>

          {/* KEAHLIAN */}
          <section>
            <h2 className="text-xs font-semibold uppercase mb-2 opacity-80">
              Keahlian
            </h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React & Next.js</li>
              <li>MySQL</li>
              <li>Dasar API & Backend</li>
            </ul>
          </section>
        </aside>

        {/* KONTEN KANAN */}
        <main className="w-2/3 p-8 text-gray-800 space-y-6">
          {/* PROFIL */}
          <section>
            <h2 className="text-sm font-bold text-purple-700 uppercase mb-2">
              Profil
            </h2>
            <p className="text-sm leading-relaxed">
              Mahasiswa Teknologi Informasi dengan minat pada pengembangan
              aplikasi berbasis web dan sistem informasi. Terbiasa
              menggunakan teknologi frontend dan backend dasar.
            </p>
          </section>

          {/* PENDIDIKAN */}
          <section>
            <h2 className="text-sm font-bold text-purple-700 uppercase mb-2">
              Pendidikan
            </h2>
            <p className="font-semibold text-sm">
              Universitas Cahaya Bangsa
            </p>
            <p className="text-sm text-gray-600">
              S1 Teknologi Informasi
            </p>
          </section>

          {/* PORTOFOLIO */}
          <section>
            <h2 className="text-sm font-bold text-purple-700 uppercase mb-2">
              Portofolio
            </h2>
            <ul className="text-sm space-y-1 text-blue-600 list-disc list-inside">
              <li>https://github.com/username</li>
              <li>https://portfolio-website.com</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
