import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <div className="flex flex-col items-center text-center p-4">
        {/* Logo */}
        <div className="mt-8">
          <div className="p-8">
            <Image
              src="/logoJatengParadise.png"
              alt="Logo Jateng Paradise"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div className="max-w-4xl mt-8 bg-white rounded-lg shadow-lg border">
          <div className="p-8">
            <h1 className="text-2xl font-bold">Tentang Kami</h1>
            <p className="mt-4">
              Selamat datang di <strong>Jateng Paradise</strong>, panduan utama
              Anda untuk menjelajahi keajaiban alam, kekayaan budaya, dan
              warisan sejarah yang tak ternilai di Jawa Tengah. Dari candi megah
              Borobudur dan Prambanan hingga keindahan alam yang menenangkan,
              Jateng Paradise berkomitmen untuk menampilkan yang terbaik dari
              Jawa Tengah kepada dunia.
            </p>
          </div>
        </div>

        {/* Misi Kami */}
        <div className="max-w-4xl mt-8 bg-white rounded-lg shadow-lg border">
          <div className="p-8">
            <h2 className="text-xl font-semibold">Misi Kami</h2>
            <p className="mt-4">
              Misi kami adalah mempromosikan Jawa Tengah sebagai destinasi
              wisata kelas dunia, menginspirasi pengunjung dari dalam dan luar
              negeri untuk menjelajahi dan menghargai keunikan yang ditawarkan
              wilayah ini.
            </p>
          </div>
        </div>

        {/* Section Credit */}
        <div className="max-w-4xl mt-8 bg-white rounded-lg shadow-lg border">
          <div className="p-8 text-left">
            <h2 className="text-xl font-semibold">Kredit</h2>
            <ul className="list-disc pl-5 mt-4">
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </div>
        </div>

        {/* Hubungi Kami */}
        <div className="max-w-4xl mt-8 bg-white rounded-lg shadow-lg border">
          <div className="p-8">
            <h2 className="text-xl font-semibold">Hubungi Kami</h2>
            <p>
              Saran dan feedback Anda akan sangat kami hargai. Hubungi kami di{" "}
              <a
                href="mailto:info@jatengparadise.com"
                className="text-blue-600"
              >
                info@jatengparadise.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
