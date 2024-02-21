import Image from "next/image";

export default function Home() {
  // return (
  //   <section className="section pt-14">
  //     <div className="container">
  //       <div className="row justify-center">
  //         <div className="lg:col-7 md:col-9 mb-8 text-center">
  //           <h1 className="mb-4 text-h3 lg:text-h1">
  //             Jelajahi Surga Tersembunyi
  //           </h1>
  //           <p className="mb-8">
  //             Temukan Keajaiban Alam, Kekayaan Budaya, dan Warisan Sejarah yang
  //             Tak Ternilai di Jawa Tengah
  //           </p>
  //         </div>
  //         <Image
  //           src="/images/Telaga-Warna-wonosobo.jpeg"
  //           alt="Telaga Warna Wonosobo"
  //           width={800}
  //           height={533}
  //         />
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/images/Telaga-Warna-wonosobo.jpeg" // Ganti dengan path ke gambar background Anda
        layout="fill"
        objectFit="cover"
        alt="Jateng Paradise Background"
        className="absolute z-0"
      />
      <div className="absolute z-10 w-full h-full bg-black bg-opacity-40"></div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full z-20 relative text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Jelajahi Surga Tersembunyi di Hati Jawa</h1>
        <p className="text-xl md:text-2xl mt-4 px-4 md:px-8">
          Temukan Keajaiban Alam, Kekayaan Budaya, dan Warisan Sejarah yang Tak Ternilai di Jawa Tengah.
        </p>
      </div>
    </div>
  );
}
