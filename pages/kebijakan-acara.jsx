import Header from "@/components/Header";
import { useRouter } from "next/router";
import globalStore from "@/store";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function TermAndCondition() {
  const router = useRouter();
  const dataUser = globalStore((state) => state.dataUser);
  const tokenGlobal = globalStore((state) => state.tokenGlobal);
  const eventchoice = globalStore((state) => state.eventchoice);

  const addsession = useCallback(() => {
    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + "/addsession",
        {},
        {
          headers: {
            "Lifestyle-Token ": tokenGlobal,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log("error")
        // location.reload();
      });

    setTimeout(addsession, 240000);
  }, []);

  useEffect(() => {
    addsession();
    // if(!tokenGlobal)router.push("/")
  }, [addsession]);

  const useMountEffect = (fun) => useEffect(fun, []);

  useMountEffect(() => {
    fetch("/api/log", {
      method: "POST",
      body: JSON.stringify({
        message: dataUser.name + " akses Menu Kebijakan Acara",
        //   API : process.env.NEXT_PUBLIC_API_URL + "/getticket",
        page: window.location.href,
      }),
    });
  });

  const handleClose = () => {
    // router.push(`/detailEvent/${eventchoice.event_id}`);
    history.back()
  };

  return (
    <div className="font-primary">
      <div className="flex justify-between p-5 items-center border-b-2">
        <div onClick={handleClose}>
          <svg
            className="m-auto"
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 8.39999L1.85 13.3C1.66667 13.4833 1.43334 13.575 1.15 13.575C0.86667 13.575 0.633336 13.4833 0.450003 13.3C0.266669 13.1167 0.175003 12.8833 0.175003 12.6C0.175003 12.3167 0.266669 12.0833 0.450003 11.9L5.35 6.99999L0.450003 2.09999C0.266669 1.91665 0.175003 1.68332 0.175003 1.39999C0.175003 1.11665 0.266669 0.883321 0.450003 0.699987C0.633336 0.516654 0.86667 0.424988 1.15 0.424988C1.43334 0.424988 1.66667 0.516654 1.85 0.699987L6.75 5.59999L11.65 0.699987C11.8333 0.516654 12.0667 0.424988 12.35 0.424988C12.6333 0.424988 12.8667 0.516654 13.05 0.699987C13.2333 0.883321 13.325 1.11665 13.325 1.39999C13.325 1.68332 13.2333 1.91665 13.05 2.09999L8.15 6.99999L13.05 11.9C13.2333 12.0833 13.325 12.3167 13.325 12.6C13.325 12.8833 13.2333 13.1167 13.05 13.3C12.8667 13.4833 12.6333 13.575 12.35 13.575C12.0667 13.575 11.8333 13.4833 11.65 13.3L6.75 8.39999Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="font-semibold">Kebijakan Acara</div>
        <div></div>
      </div>
      <div className="py-3 px-4 flex items-center">
        <h2 className="font-semibold text-base">SYARAT DAN KETENTUAN</h2>
      </div>

      <div className="px-5 ">
        <p className="text-justify">
          Syarat dan Ketentuan Pembelian tiket event Sky Avenue 2023 pada menu
          pembelian event pada Aplikasi BNI Mobile Banking (selanjutnya disebut
          sebagai <b>“Syarat dan Ketentuan”)</b> {""}
          mengatur mengenai tata cara pembelian event Sky Avenue 2023 , disusun
          berdasarkan syarat dan ketentuan Java Festival Production.
        </p>
      </div>

      <div className="px-5 py-5 ">
        <h2 className="font-semibold text-base">ISTILAH UMUM</h2>
        <ul className="text-justify py-2 px-5 list-decimal " style={{paddingRight:"0.5rem"}}>
          <li>
            Aplikasi BNI Mobile Banking adalah aplikasi mobile banking yang
            dimiliki dan dioperasikan oleh Bank.
          </li>

          <li>Bank adalah PT Bank Negara Indonesia Persero (Tbk).</li>
          <li>
            Data Pribadi adalah data pribadi termasuk data yang secara langsung
            mengidentifikasi Pengguna, seperti nama, alamat, tanggal lahir,
            pekerjaan, nomor telepon, alamat surat elektronik, rekening bank dan
            detail kartu kredit, jenis kelamin, data kesehatan, informasi
            terkait keuangan dan informasi biometrik; termasuk informasi atau
            data lain yang dapat secara tidak langsung dan secara wajar
            digunakan untuk mengidentifikasi pengguna, seperti nomor serial pada
            perangkat Pengguna.
          </li>
          <li>
            Layanan adalah layanan pembelian event yang disediakan oleh Java
            Festival Production untuk Nasabah.
          </li>
          <li>
            Pengguna adalah setiap nasabah Bank yang mengakses Layanan melalui
            menu pembelian event yang terdapat pada Aplikasi BNI Mobile Banking.
          </li>
          <li>
            Java Festival Production adalah PT Java Festival Production, yaitu
            partner penyedia event and show melalui website{" "}
            <u>www.jfp.events/</u>
            {/* <span className='underline'>
                            <a href='https://jfp.events/'>www.jfp.events/</a>
                        </span> */}
          </li>
        </ul>
      </div>

      <div className="px-5 py-5 ">
        <h2 className="font-semibold text-base">KETENTUAN LAYANAN</h2>
        <ul className="text-justify py-2 px-5 list-decimal" style={{paddingRight:"0.5rem"}}>
          <li>
            Java Festival Production menyediakan layanan yang dapat digunakan
            oleh Pengguna melalui menu Pembelian event dan show yang terdapat
            pada Aplikasi BNI Mobile Banking. Dengan memanfaatkan Layanan
            tersebut, Pengguna dianggap telah membaca, memahami, dan menyetujui
            semua isi dalam Syarat dan Ketentuan ini serta syarat dan ketentuan
            yang diatur langsung oleh Java Festival Production. Detail syarat
            dan ketentuan, kebijakan Acarayang diatur langsung oleh Java
            Festival Production dan dapat diakses melelui website resmi Java
            Fesival Production. Java Festival Production menyediakan layanan
            yang dapat digunakan oleh Pengguna melalui menu Pembelian event dan
            show yang terdapat pada Aplikasi BNI Mobile Banking. Dengan
            memanfaatkan Layanan tersebut, Pengguna dianggap telah membaca,
            memahami, dan menyetujui semua isi dalam Syarat dan Ketentuan ini
            serta syarat dan ketentuan yang ' diatur langsung oleh Java Festival
            Production dan Sky Avenue 2023. Detail syarat dan ketentuan dapat
            diakses oleh Pengguna melalui link{" "}
            <span className="underline">
              <a href="https://jfp.events/custompage/event-ticket-policy/skyavenue2023">
                https://jfp.events/custompage/event-ticket-policy/skyavenue2023.
              </a>
            </span>{" "}
          </li>
          <li>
            Penyediaan Layanan melalui menu Pembelian Event dan Show merupakan
            kerja sama antara Java Festival Production, Sky Avenue 2023 dengan
            Bank. Pengguna memahami dan mengakui bahwa:
          </li>
          <ul className="text-justify list-disc px-1 py-2 ">
            <li>
              Pemanfaatan atau penggunaan Layanan oleh Pengguna melalui menu
              pembelian event pada Aplikasi BNI Mobile Banking, merupakan
              hubungan hukum dan kontraktual yang mengikat antara Pengguna dan
              Java Festival Production. Dalam hal ini, Bank hanya bertindak
              sebagai partner yang memunculkan menu Layanan dan memfasilitasi
              pemrosesan pembayaran Layanan;
            </li>
            <li>
              Data dan informasi terkait dengan Layanan yang tercantum pada menu
              Pembelian pada Aplikasi BNI Mobile Banking merupakan data dan
              informasi yang diterima oleh Bank dari Java Festival Production
              dan Sky Avenue, dan Bank dapat mempublikasikan data dan informasi
              tersebut dengan bijaksana sesuai dengan persetujuan dari Java
              Festival Production, Sky Avenue dan sesuai perundang-undangan yang
              berlaku.
            </li>
          </ul>

          <li>Dengan menggunakan Layanan, maka Pengguna menyatakan setuju:</li>
          <ul className="text-justify list-disc px-1 py-2 ">
            <li className="my-2">
              Tidak akan menyalin informasi apapun termasuk layanan yang
              tersedia di dalamnya untuk segala macam tujuan, selain tujuan
              pembelian event yang disediakan oleh Java Festival Production dan
              Sky Avenue;
            </li>
            <li className="my-2">
              Tidak akan mengunduh, mereproduksi, atau menampilkan segala
              produk, informasi, atau layanan yang tersedia untuk tujuan apapun,
              selain tujuan pembelian yang disediakan Java Festival Production
              dan Sky Avenue;
            </li>
            <li className="my-2">
              Java Festival Production dan/atau Bank dapat membagi Data Pribadi
              Pelanggan kepada badan hukum dan/atau individual lain termasuk
              anak perusahaan dan afiliasi (setiap “Pihak Ketiga”) sehubungan
              dengan penggunaan Layanan oleh Pengguna untuk tujuan yang
              diperbolehkan oleh regulasi yang berlaku; dan/atau
            </li>
            <li className="my-2">
              Memberikan Data Pribadi yang akurat dan lengkap untuk penggunaan
              Layanan.
            </li>
          </ul>
        </ul>
      </div>

      <div className="px-5 py-5 ">
        <h2 className="font-semibold text-base">
          KEBIJAKAN TIKET ACARA SKY AVENUE 2023
        </h2>
        <ul className="text-justify py-2 px-5 list-decimal " style={{paddingRight:"0.5rem"}}>
          <li>Tiket yang sudah dibeli tidak dapat dikembalikan.</li>
          <li>E-voucher ini tidak dapat dipindah-tangankan.</li>
          <li>Kami tidak bertanggung jawab atas kehilangan e-voucher ini.</li>
          <li>
            E-voucher ini harus ditukarkan menjadi gelang asli. Waktu dan tempat
            penukaran sebagai berikut:{" "}
            <b>
              Tanggal 24 Agustus 2023, pk. 13.00 – 18.00 at Labschool Kebayoran.
            </b>{" "}
            JL. KH Ahmad Dahlan No. 14, Kramat Pela, Kebayoran Baru, Kota
            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130. Atau{" "}
            <b>Tanggal 26 Agustus 2023, pk. 11.00 – 15.00, Istora Senayan (Venue).</b>
          </li>
          <li>
            Wajib membawa dan menunjukkan Kartu Identitas (KTP/Kartu
            Pelajar/Passpor/SIM) pada saat penukaran e-voucher dengan gelang.
          </li>
          <li>Dilarang membawa senjata tajam/api dan obat-obatan terlarang.</li>
          <li>
            Penyelenggara berhak untuk tidak memberikan izin masuk ke dalam
            tempat acara jika tidak mengikuti syarat-syarat & ketentuan yang
            berlaku.
          </li>
        </ul>
      </div>

      <div className="bg-biru mb-10 py-5 text-xs">
        <p className="px-6 font-black text-[#004558] italic pb-1">
          Disclaimer :{" "}
        </p>
        <p className="px-6 pb-5 font-medium text-justify text-[#006E85]">
          Syarat dan Ketentuan terkait Layanan pada menu pembelian event yang
          terdapat pada Aplikasi BNI Mobile Banking diperoleh Bank dari Java
          Festival Production. Bank tidak bertanggung jawab atas isi,
          pelaksanaan, dan pemenuhan Syarat dan Ketentuan, hal tersebut
          merupakan tanggung jawab dari Java Festival Production dan Sky Avenue.
          Segala permasalahan yang timbul terkait dengan Layanan yang berasal
          dari Java Festival Production dan Sky Avenue wajib diselesaikan oleh
          Pengguna dengan Java Festival Production dan Sky Avenue tanpa
          melibatkan Bank.
        </p>
      </div>
    </div>
  );
}
