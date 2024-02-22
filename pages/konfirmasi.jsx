import { useEffect, useState, useCallback } from "react";
import EditTiket from "@/components/EditTiket";
import EditPengunjung from "@/components/EditPengunjung";
import Info from "@/components/Info";
import Header from "@/components/Header";
import globalStore from "@/store";
import axios from "axios";
import { useRouter } from "next/router";
import ModalError from "@/components/ModalError";
import ModalAddSession from "@/components/ModalAddSession";
import IconPromo from "@/assets/iconPromo";


export default function Konfirmasi() {
  const router = useRouter();

  const dataUser = globalStore((state) => state.dataUser);

  const tokenGlobal = globalStore((state) => state.tokenGlobal);
  const [tokenEncode, setTokenEncode] = useState("");

  const datatiketList = globalStore((state) => state.datatiketList);
  const dataJumlahTiketPerJenis = globalStore((state) => state.dataJumlahTiketPerJenis);
  const dataTotalTicket = globalStore((state) => state.dataTotalTicket);
  const [session, setSession] = useState(false);


  const jumlah = globalStore((state) => state.jumlah);
  const [body, setBody] = useState([]);
  const [err, setErr] = useState("");
  const useMountEffect = (fun) => useEffect(fun, [])
  const [closeEvent, setCloseEvent] = useState(`/pilih-tiket`)

  const promoEventStatus = globalStore((state) => state.promoEventStatus);
  const promoLabel = globalStore((state) => state.promoLabel);
  const promoTerms = globalStore((state) => state.promoTerms);

  const setPromoEventStatus = globalStore((state) => state.setPromoEventStatus);
  const setPromoLabel = globalStore((state) => state.setPromoLabel);
  const setDataUser = globalStore((state) => state.setDataUser);
  const setTokenGlobal = globalStore((state) => state.setTokenGlobal);
  const setPromoTerms = globalStore((state) => state.setPromoTerms);
  const setDataInitEvent = globalStore((state) => state.setDataInitEvent);
  const setDataTotalHarga = globalStore((state) => state.setDataTotalHarga);
  const setDataTotalTicket = globalStore((state) => state.setDataTotalTicket);
  const setDataJumlahTiketPerJenis = globalStore((state) => state.setDataJumlahTiketPerJenis);
  const setDataTiketList = globalStore((state) => state.setDataTiketList);
  const setJumlah = globalStore((state) => state.setJumlah);













  const addsession = useCallback(() => {

    // axios
    //   .post(
    //     process.env.NEXT_PUBLIC_API_URL + "/addsession",
    //     {},
    //     {
    //       headers: {
    //         "Lifestyle-Token": tokenGlobal,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (res.length > 0) {
    //       setSession(true);
    //       setTokenGlobal("")
    //     }
    //   })
    //   .catch((err) => {
    //     location.reload();

    //   });

    // setTimeout(addsession, 10000);
  }, []);

  useEffect(() => {
    // addsession();
    // if (tokenGlobal == "") router.push("/")
  }, [addsession, tokenGlobal]);


  useMountEffect(() => {
    setTokenEncode(encodeURIComponent(tokenGlobal));
    fetch("/api/log", {
      method: "POST",
      body: JSON.stringify({
        message: dataUser.name + " masuk menu konfirmasi",
        token: tokenGlobal,
        page: window.location.href,
      }),
    });
    // if (dataTotalTicket <= 0) {
    //   setCloseEvent(`/pilih-tiket`);
    //   setErr("Tidak ada data Ticket Mohon kembali menu tiket");
    // }


  });

  useEffect(() => {

    let user = dataUser;

    const dataKirim = []

    datatiketList.map((e, i) => {
      if (dataJumlahTiketPerJenis[e.ticketname] > 0) {
        let dataTiket = {};
        dataTiket.name = user.name;
        dataTiket.gender = "";
        dataTiket.dob = user.dob;
        dataTiket.email = user.email;
        dataTiket.phone = user.phone;
        dataTiket.ticketid = e.ticketid;
        dataTiket.ticketqty = dataJumlahTiketPerJenis[e.ticketname];
        dataTiket.country = "";
        dataTiket.city = "";
        dataTiket.idcard = "";
        dataTiket.address = "";
        dataTiket.customer_ticket = [];
        dataKirim.push(dataTiket)
      }
    })
    setBody(dataKirim);
  }, []);

  const orderTiket = () => {

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/orderticket", body, {
      headers: {
        "Lifestyle-Token ": tokenGlobal,
      },
    })
      .then((res) => {
        if (res.data.responseCode == "9000") {
          window.location.href = process.env.NEXT_PUBLIC_API_URL + `/successOrder?data=${res.data.payloadMbank}`;
          setPromoEventStatus(false);
          setPromoLabel("");
          setDataUser({});
          // setTokenGlobal("");
          setPromoTerms("");
          setDataInitEvent([]);
          setDataTotalHarga("");
          setDataTotalTicket("");
          setDataJumlahTiketPerJenis("");
          setDataTiketList([]);
          setJumlah("");
          fetch("/api/log", {
            method: "POST",
            body: JSON.stringify({
              message: res.data,
              token: tokenGlobal,
              page: window.location.href,
              API: process.env.NEXT_PUBLIC_API_URL + "/orderticket"
            }),
          });
        } else {
          fetch("/api/log", {
            method: "POST",
            body: JSON.stringify({
              message: res.data,
              token: tokenGlobal,
              page: window.location.href,
            }),
          });
          setErr(res.data.responseMessage);
          setCloseEvent(`/konfirmasi`);
        }
      })
      .catch((err) => {
        setErr("Maaf Terjadi Kesalahan Dalam Pemesanan");
        setCloseEvent(`/konfirmasi`);
        fetch("/api/log", {
          method: "POST",
          body: JSON.stringify({
            message: err,
            token: tokenGlobal,
            page: window.location.href,
          }),
        });
      });

  };

  return (
    <div className="font-primary">
      {/* {err !== "" && <ModalError shown={err} close={() => setErr("")} >{err}</ModalError>} */}
      {/* {session == true && <ModalAddSession shown={"session"} close={() => setSession(false)} >{err}</ModalAddSession>} */}
      <Header progress="100%"> Konfirmasi Tiket</Header>

      {/* {promoEventStatus ? (
        <div className="ml-3 mt-3 mr-3 mb-3 p-3 rounded-lg flex items-start item-center bg-[#E9FCE9] rounded">
          <div>
            <IconPromo />
          </div>
          <p className="px-2 font-medium text-xs text-[#3C8530]">
            {promoTerms}
          </p>
        </div>
      ) : ( */}
        <div className="bg-[#E9FCE9] ml-3 mt-3 mr-3 mb-3 p-3 rounded-lg flex items-start">
          <div>
            <Info />
          </div>
          <p className="px-2 font-medium text-xs text-[#3C8530]">
            Tiket akan dikirimkan melalui <b>email yang terdaftar di BNI Mobile Banking.</b>
          </p>
        </div>
      )
      {/* } */}

      <div className="w-full bg-[#EFF2F7] h-2"></div>

      <div className="p-3 border-[#D0DDDE] flex justify-between">
        <div>
          <h2 className="font-semibold text-base flex justify-between ">
            Detail Pemesanan
          </h2>
        </div>
      </div>

      <div className={`p-3 font-primary border-b border-[#D0DDDE] flex justify-between`}>
        <div>
          {/* <h2 className="font-semibold text-sm">{dataUser.name}</h2> */}
          <h2 className="font-semibold text-sm">Abiyoga</h2>
          {/* <p className="font-medium text-xs opacity-50">{dataUser.email}</p> */}
          <p className="font-medium text-xs opacity-50">Abiyogakhusus@gmail.com</p>
        </div>
      </div>

      <div className="w-full bg-[#EFF2F7] h-2"></div>

      <div className="p-3 border-[#D0DDDE] flex justify-between">
        <div>
          <h2 className="font-semibold text-base"> Detail Ticket </h2>
        </div>
      </div>

      {/* {datatiketList.map((e, i) => ( */}
        {/* dataJumlahTiketPerJenis[e.ticketname] > 0 && ( */}
          {/* <div key={i}>
            <EditTiket
              title={e.ticketname}
              ticketqty={dataJumlahTiketPerJenis[e.ticketname]}
              date={e.ticketdate}
              price={e.pricetaxservice}
              className="border-b"
            />
          </div> */}
        {/* ) */}
      {/* ))} */}

          <div >
            <EditTiket
              title="hendra"
              ticketqty="10"
              date="12-Oktober"
              price="100000000"
              className="border-b"
            />
          </div>

      <div className="bg-biru p-3 ml-3 mt-3 mr-3 mb-3 rounded-lg flex items-start">
        <div>
          <Info />
        </div>
        <p className="px-2 font-medium text-xs text-[#006E85]">
          Produk ini merupakan produk kerjasama dengan Java Festival. Terkait kendala ketika pemesanan, informasi terkait proses perubahan jadwal dan pengembalian dana dapat menghubungi pihak <b>Java Festival di (021)727836 01/02 Ext. 193/195</b>
        </p>
      </div>

      <div className=" mt-12 py-4 px-3 border-t border-[#D0DDDE] ">
        <div className="flex justify-between">
          <p className="font-semibold text-xs opacity-50"> Harga Total </p>
          <p className="font-semibold text-xs opacity-50"> Jumlah Tiket </p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold text-base text-[#F15A23]">
            {jumlah.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="font-semibold text-base">
            {/* {dataTotalTicket} */} 10
          </p>
        </div>
      </div>

      <div className="m-4">
        <button
          // onClick={orderTiket}
          onClick="ss"
          className="w-full bg-[#F15A23]  py-3 rounded-3xl text-white"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
