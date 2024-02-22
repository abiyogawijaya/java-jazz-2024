// import IconTiket from "@/assets/iconTiket";
import IncrementTiket from "@/components/IncrementTiket";
import Header from "@/components/Header";
import globalStore from "@/store";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import IconPromo from "@/assets/iconPromo";
// import IconTiketSpesial from "@/assets/iconTiketSpesial";
// import Info from "@/components/Info";
// import IconPromo from "@/assets/iconPromo";
import ModalSliedeUp from "@/components/ModalSlideUp";
import ModalError from "@/components/ModalError";

export default function PilihTiket() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSlide, setIsSlide] = useState(true);
    const [res, setRes] = useState([]);
    const [openmodal, setopenmodal] = useState(false);
    const [body, setBody] = useState([])




    const openModal = () => {
        setIsOpen(true);
        setIsSlide(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsSlide(false);
        setTimeout(() => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
        }, 90);
    };

    const datatiketList = globalStore((state) => state.datatiketList);
    const dataJumlahTiketPerJenis = globalStore((state) => state.dataJumlahTiketPerJenis);
    const dataTotalTicket = globalStore((state) => state.dataTotalTicket);
    const dataTotalHarga = globalStore((state) => state.dataTotalHarga);
    const dataUser = globalStore((state) => state.dataUser);

    const setDataTiketList = globalStore((state) => state.setDataTiketList);
    const setDataJumlahTiketPerJenis = globalStore((state) => state.setDataJumlahTiketPerJenis);
    const setDataTotalTicket = globalStore((state) => state.setDataTotalTicket);
    const setDataTotalHarga = globalStore((state) => state.setDataTotalHarga);

    const [err, setErr] = useState("");
    const [tokenEncode, setTokenEncode] = useState("");
    const tokenGlobal = globalStore((state) => state.tokenGlobal);
    const useMountEffect = (fun) => useEffect(fun, [])

    const promoEventStatus = globalStore((state) => state.promoEventStatus);
    const setPromoEventStatus = globalStore((state) => state.setPromoEventStatus);
    const promoLabel = globalStore((state) => state.promoLabel);
    const setPromoLabel = globalStore((state) => state.setPromoLabel);
    const promoTerms = globalStore((state) => state.promoTerms);
    const setPromoTerms = globalStore((state) => state.setPromoTerms);

    useMountEffect(() => {
        setTokenEncode(encodeURIComponent(tokenGlobal));
        fetch("/api/log", {
            method: "POST",
            body: JSON.stringify({
                message: dataUser.name + " akses Menu Pilih Tiket",
                token: tokenGlobal,
                API: process.env.NEXT_PUBLIC_API_URL + "/getticket",
                page: window.location.href,
            }),
        })
        setErr("Maaf, pembelian mengalami gangguan. Silahkan coba beberapa saat lagi")
        // axios
        //     .get(process.env.NEXT_PUBLIC_API_URL + "/getticket", {
        //         headers: {
        //             "Lifestyle-Token ": tokenGlobal,
        //         },
        //     })
        //     .then((res) => {
        //         setopenmodal(false)
        //         if (res.data.isSuccess) {
                    setDataTiketList( [
                        {
                            "category": "A",
                            "description": "",
                            "insurance": 0,
                            "isavailable": 1,
                            "price": 1265000,
                            "pricetaxservice": 1525000,
                            "ticketdate": "Fri-Sun, 24-26 May 2024",
                            "ticketid": 1582,
                            "ticketname": "3 Days Pass",
                            "type": "regular",
                            "promo": "C"
                        },
                        {
                            "category": "B",
                            "description": "",
                            "insurance": 0,
                            "isavailable": 1,
                            "price": 550000,
                            "pricetaxservice": 675000,
                            "ticketdate": "Friday, 24 May 2024",
                            "ticketid": 1583,
                            "ticketname": "Daily Pass Friday",
                            "type": "regular",
                            "promo": ""
                        },
                        {
                            "category": "C",
                            "description": "",
                            "insurance": 0,
                            "isavailable": 1,
                            "price": 550000,
                            "pricetaxservice": 675000,
                            "ticketdate": "Saturday, 25 May 2024",
                            "ticketid": 1584,
                            "ticketname": "Daily Pass Saturday",
                            "type": "regular",
                            "promo": ""
                        },
                        {
                            "category": "D",
                            "description": "",
                            "insurance": 0,
                            "isavailable": 1,
                            "price": 550000,
                            "pricetaxservice": 675000,
                            "ticketdate": "Sunday, 26 May 2024",
                            "ticketid": 1585,
                            "ticketname": "Daily Pass Sunday",
                            "type": "regular",
                            "promo": ""
                        }
                    ])
        //             // setRes(res.data.payload);
        //             let dataObj = {}
        //             if (dataTotalTicket == 0) {
        //                 res.data.payload.map((e, i) => {
        //                     dataObj[e.ticketname] = 0
        //                 })
        //                 setDataJumlahTiketPerJenis(dataObj)
        //             }
        //             fetch("/api/log", {
        //                 method: "POST",
        //                 body: JSON.stringify({
        //                     message: res.data,
        //                     token: tokenGlobal,
        //                     API: process.env.NEXT_PUBLIC_API_URL + "/getticket",
        //                     page: window.location.href,
        //                 }),
        //             })
        //         } else {
        //             fetch("/api/log", {
        //                 method: "POST",
        //                 body: JSON.stringify({
        //                     message: res.data,
        //                     token: tokenGlobal,
        //                     API: process.env.NEXT_PUBLIC_API_URL + "/getticket",
        //                     page: window.location.href,
        //                 }),
        //             })
        //             setopenmodal(true)
        //         }
        //     })
        //     .catch((err) => {
        //         setopenmodal(true)
        //         fetch("/api/log", {
        //             method: "POST",
        //             body: JSON.stringify({
        //                 message: res.data,
        //                 token: tokenGlobal,
        //                 API: process.env.NEXT_PUBLIC_API_URL + "/getticket",
        //                 page: window.location.href,
        //             }),
        //         })
        //     });
    });


    const addsession = useCallback(() => {

        // axios
        //     .post(
        //         process.env.NEXT_PUBLIC_API_URL + "/addsession",
        //         {},
        //         {
        //             headers: {
        //                 "Lifestyle-Token": tokenGlobal,
        //             },
        //         }
        //     )
        //     .then((res) => {
        //         if (res.length > 0) {
        //             setSession(true);
        //             setTokenGlobal("")
        //         }
        //     })
        //     .catch((err) => {
        //         location.reload();

        //     });

        // setTimeout(addsession, 10000);
    }, []);

    useEffect(() => {
        // addsession();
        // if (tokenGlobal == "") router.push("/")
    }, [addsession, tokenGlobal]);


    const setJumlah = globalStore((state) => state.setJumlah);


    const lanjutkan = () => {
        setJumlah(
            dataTotalHarga
        );
        router.push("/konfirmasi");
    };

    return (
        <>
            {" "}
            {/* {openmodal && <ModalError shown={err} close={() => window.location.href = `/homepage/${tokenEncode}/dd`} >{err}</ModalError>} */}
            { }
            <div className='flex flex-col justify-between min-h-screen font-primary'>
                <div className='mb-48'>
                    <Header progress='30%'>Pilih Tiket</Header>

                    <div className='p-3 flex items-center'>

                        <div className='px-3'>
                            <p className='font-medium text-xs opacity-50 italic'>
                                <b>*Harga dapat berubah sewaktu waktu</b>
                            </p>
                        </div>
                    </div>
                    {promoEventStatus && (

                        <div className="flex gap-1 item-center bg-[#E9FCE9] max-w-fit  rounded p-1 mb-4" style={{marginLeft :"22px"}}>
                            <div>
                                <IconPromo />
                            </div>
                            <p className="text-xs text-[#3C8530] font-semibold">
                                {promoLabel}
                            </p>
                        </div>
                    )
                    }
                    {datatiketList.map((e, i) => (
                        // setDataTicket({
                        //     name : e.ticketname,
                        //     ticketID : e.ticketID
                        // }),
                        <div key={i}>
                            <IncrementTiket
                                ticketList={datatiketList}
                                disabled={e.isavailable != 1}
                                title={e.ticketname}
                                date={e.ticketdate}
                                price={e.pricetaxservice}
                                totalHarga={dataTotalHarga}
                                setTotalHarga={setDataTotalHarga}
                                value={dataJumlahTiketPerJenis}
                                setValue={setDataJumlahTiketPerJenis}
                                setCountTiket={setDataTotalTicket}
                                countTiket={dataTotalTicket}
                                className='border-t'
                            />

                        </div>
                    ))}

                    <div className='w-full bg-[#EFF2F7] h-2'></div>
                </div>

                <div className='fixed bottom-0 bg-white w-full'>
                    <div className='py-4 px-3 border-t border-[#D0DDDE] '>
                        <div className='flex justify-between'>
                            <p className='font-semibold text-xs opacity-50'>Harga Total</p>
                            <p className='font-semibold text-xs opacity-50'>Jumlah Tiket</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-semibold text-base text-[#F15A23]'>
                                {(dataTotalHarga).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                            </p>
                            <p className='font-semibold text-base'>
                                {dataTotalTicket}
                            </p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <button
                            onClick={lanjutkan}
                            disabled={dataTotalTicket
                                ===
                                0
                            }
                            className='disabled:bg-[#EDF1F3] disabled:text-gray-400 w-full bg-[#F15A23]  py-3 rounded-3xl text-white'>
                            Lanjutkan
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

