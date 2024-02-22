import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="text-xl text-center font-medium font-montserrat flex flex-col justify-center items-center h-screen">
      <h1 className="py-3">Gagal Memuat Halaman</h1>
      <h1 className="py-3">Mohon Tutup Aplikasi dan Lakukan Login Ulang</h1>
    </div>
  );
}
