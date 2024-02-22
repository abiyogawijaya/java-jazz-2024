import Button from "@/components/Button";
import Card from "@/components/Card";
import poster from "@/assets/poster.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import carousel1 from "@/assets/banner1.svg";
import banner4 from "@/assets/banner1.svg";
import IconPromo from "@/assets/iconPromo";
import ContainerEvent from "@/components/ContainerEvent";
import { useState, useEffect } from "react";
import React from "react";
import IconNoEvent from "@/assets/iconNoEvent";
// import { CarouselProvider, Slider, Slide, DotGroup, Dot } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
import globalStore from "@/store";

import axios from "axios";

import Router from "next/router";

const items = [
  {
    id: 1,
    title: "Item 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: poster,
  },
  ,
];

export default function Homepage() {
  const [res, setRes] = useState({
    "banner": [
        "https://lifestyle.haluan.co/wp-content/uploads/2023/12/Java-Jazz-2024-1152x648.jpg",
        "https://kebayoran.labschool-unj.sch.id/wp-content/uploads/2022/09/skyavenue.jpeg"
    ],
    "now": {
        "title": "Event Saat ini",
        "subtitle": "Nikmati kemudahan beli tiketnya hanya di BNI Mobile Banking.",
        "data": [{
                "banner": "https://lifestyle.haluan.co/wp-content/uploads/2023/12/Java-Jazz-2024-1152x648.jpg",
                "title": "Java Jazz 2024",
                "desc": "The Jakarta International BNI Java Jazz Festival (JJF) is held in Jakarta, Indonesia, and is one of the world's largest jazz festivals, if not the largest in the Southern Hemisphere, due to the number of stages held in each festival, which present more than 100 shows in three days. The inaugural edition of this annual Jazz Festival took place in 2005.",
                "date_start": "2024-06-24",
                "date_end": "2024-06-26",
                "location": "Istora Senayan",
                "info": [{
                    "icon": "INSTAGRAM",
                    "detail": "@javajazz"
                }],
                "tnc_link": "https://jfp.com/termcondition",
                "buy_link": "/ticket-category/JFP24"
            },
            {
                "banner": "https://kebayoran.labschool-unj.sch.id/wp-content/uploads/2022/09/skyavenue.jpeg",
                "title": "Sky Avenue",
                "desc": "The Jakarta International BNI Java Jazz Festival (JJF) is held in Jakarta, Indonesia, and is one of the world's largest jazz festivals, if not the largest in the Southern Hemisphere, due to the number of stages held in each festival, which present more than 100 shows in three days. The inaugural edition of this annual Jazz Festival took place in 2005.",
                "date_start": "2023-08-21",
                "date_end": "2023-08-22",
                "location": "Istora Senayan",
                "info": [{
                    "icon": "INSTAGRAM",
                    "detail": "@skyavenue"
                }],
                "tnc_link": "https://jfp.com.termcondition",
                "buy_link": "/ticket-category/sky2023"
            }
        ],
        "music": {
            "title": "Konser",
            "subtitle": "Nikmati kemudahan beli tiketnya hanya di BNI Mobile Banking.",
            "data": [{
                    "banner": "https://lifestyle.haluan.co/wp-content/uploads/2023/12/Java-Jazz-2024-1152x648.jpg",
                    "title": "Java Jazz 2024",
                    "desc": "The Jakarta International BNI Java Jazz Festival (JJF) is held in Jakarta, Indonesia, and is one of the world's largest jazz festivals, if not the largest in the Southern Hemisphere, due to the number of stages held in each festival, which present more than 100 shows in three days. The inaugural edition of this annual Jazz Festival took place in 2005.",
                    "date_start": "2024-06-24",
                    "date_end": "2024-06-26",
                    "location": "Istora Senayan",
                    "info": [{
                        "icon": "INSTAGRAM",
                        "detail": "@javajazz"
                    }],
                    "tnc_link": "https://jfp.com/termcondition",
                    "buy_link": "/getticket/JFP24"
                },
                {
                    "banner": "https://kebayoran.labschool-unj.sch.id/wp-content/uploads/2022/09/skyavenue.jpeg",
                    "title": "Sky Avenue",
                    "desc": "The Jakarta International BNI Java Jazz Festival (JJF) is held in Jakarta, Indonesia, and is one of the world's largest jazz festivals, if not the largest in the Southern Hemisphere, due to the number of stages held in each festival, which present more than 100 shows in three days. The inaugural edition of this annual Jazz Festival took place in 2005.",
                    "date_start": "2023-08-21",
                    "date_end": "2023-08-22",
                    "location": "Istora Senayan",
                    "info": [{
                        "icon": "INSTAGRAM",
                        "detail": "@skyavenue"
                    }],
                    "tnc_link": "https://jfp.com.termcondition",
                    "buy_link": "/getticket/sky2023"
                }
            ]
        },
        "sport": {
            "title": "Olahraga",
            "subtitle": "Event olahraga populer saat ini",
            "data": []
        }
    }
});
  // const [title, setTitle] = useState([]);
  const router = useRouter();
  const { token, data } = router.query;
  const [openornot, setOpenornot] = useState(true)

  const setDataUser = globalStore((state) => state.setDataUser);
  const setTokenGlobal = globalStore((state) => state.setTokenGlobal);
  const setDataInitEvent = globalStore((state) => state.setDataInitEvent);
  const tokenGlobal = globalStore((state) => state.tokenGlobal);
  const dataUser = globalStore((state) => state.dataUser);
  
  if(token){
    setTokenGlobal(token);
  }
  useEffect(() => {
    fetch("/api/log", {
      method: "POST",
      body: JSON.stringify({
        message: dataUser.name + " akses Menu Homepage",
        token : tokenGlobal,
        page: window.location.href,
      }),
    })
    if (token) {
      setTokenGlobal(token);

      let decodedData;
      try {
        // decodedData = decodeURIComponent(token);
        decodedData = token;
        // axios.post(process.env.NEXT_PUBLIC_INIT_URL + "/user-info", {}, {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Lifestyle-Token": decodedData,
        //   },
        // })
        //   .then((dat) => {
        //     // setOpenornot(true);
        //     if (dat.data.responseCode == 9000) {
        //       setDataUser(dat.data.payload)
        //     }
        //     else {
        //       setOpenornot(false);
        //       fetch("/api/log", {
        //         method: "POST",
        //         body: JSON.stringify({
        //           message: res.data,
        //           token : tokenGlobal,
        //           page: window.location.href,
        //         }),
        //       });
        //       setErr(res.data.responseMessage);
        //       // router.push("/404");
        //     }
        //   })
        //   .catch((err) => {
        //     setOpenornot(false);
        //     fetch("/api/log", {
        //       method: "POST",
        //       body: JSON.stringify({
        //         message: err,
        //         token : tokenGlobal,
        //         page: window.location.href,
        //       }),
        //     });
        //   });

        setTokenGlobal("decodedData");
      } catch (error) {
        // Jika decoding gagal, alihkan ke halaman error
        // router.push("/404");
        return null;
      }
      // 
      // axios
      //   .get(process.env.NEXT_PUBLIC_INIT_URL + "/init-event", {
      //     headers: {
      //       "Lifestyle-Token ": tokenGlobal,
      //     },
      //   })
      //   .then((res) => {
      //     setOpenornot(true);
      //     if(res.data.responseCode === "9000"){
      //       setDataInitEvent(res.data.payload)
      //       // setRes(res.data.payload);
      //     }else if(res.data.responseCode != "9000"){
      //       setOpenornot(false);
      //       fetch("/api/log", {
      //         method: "POST",
      //         body: JSON.stringify({
      //           message: res.data,
      //           token : tokenGlobal,
      //         }),
      //       });
      //     }
          
      //     setDataInitEvent(res.data.payload)

      //     // setRes(res.data.payload);
          
      //   })
      //   .catch((err) => {
      //     setOpenornot(false);
      //     fetch("/api/log", {
      //       method: "POST",
      //       body: JSON.stringify({
      //         message: err,
      //         token : tokenGlobal,
      //       }),
      //     });
      //   });
    }
  }, [token, setTokenGlobal]);

  const [images, setImages] = useState([
    {
      id: 1,
      title: "Item 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: carousel1,
    },
  ]);


  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("id-ID", { weekday: "long" });
    const dayNumber = date.getDate();
    const month = date.toLocaleDateString("id-ID", { month: "long" });
    const year = date.getFullYear();

    return `${dayNumber} ${month} ${year}`;
  }


  if (openornot) {
    return (
      <>
        <div className=" justify-between min-h-screen flex flex-col w-screen border  mx-auto font-primary  bg-[#F4F6F6] ">
          <div className={"bg-white p-2 mb-1"}>
            <div className="rounded-xl ">
              {res?.banner?.map((item, index) => {

                return (
                  <Image key={index}
                    onClick={() => Router.push(`/detailEvent/${item.event_id}`)}
                    priority={true}
                    src={banner4}
                    className=" m-auto object-contain rounded-xl"
                    // width={full}
                    // height={160}
                    alt="s"
                   style={{ width: "100%", height: "auto" }}

                  />
                );
              })}
            </div>
          </div>

          <div className="my-1">
            <ContainerEvent title={res?.now?.title} subtitle={res?.now?.subTitle}>
              {res?.now?.data?.map((item, index) => (
                <Card className="min-w-max " key={index}>
                  <Image
                    src={banner4}
                    className=" object-fill rounded-t-md"
                    alt={index}
                    // width={304}
                    // height={124}
                  />
                  <div className="m-2 ">
                    <h1 className="font-bold text-sm mb-2">{item.event_title}</h1>
                    <div className="flex items-center gap-1 text-abu mb-1">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 8.33325C3.14445 8.33325 2.986 8.26925 2.858 8.14125C2.73 8.01325 2.66622 7.85503 2.66667 7.66659C2.66667 7.4777 2.73067 7.31925 2.85867 7.19125C2.98667 7.06325 3.14489 6.99947 3.33333 6.99992C3.52222 6.99992 3.68067 7.06392 3.80867 7.19192C3.93667 7.31992 4.00045 7.47814 4 7.66659C4 7.85547 3.936 8.01392 3.808 8.14192C3.68 8.26992 3.52178 8.3337 3.33333 8.33325ZM6 8.33325C5.81111 8.33325 5.65267 8.26925 5.52467 8.14125C5.39667 8.01325 5.33289 7.85503 5.33333 7.66659C5.33333 7.4777 5.39734 7.31925 5.52533 7.19125C5.65333 7.06325 5.81156 6.99947 6 6.99992C6.18889 6.99992 6.34733 7.06392 6.47534 7.19192C6.60333 7.31992 6.66711 7.47814 6.66667 7.66659C6.66667 7.85547 6.60267 8.01392 6.47467 8.14192C6.34667 8.26992 6.18845 8.3337 6 8.33325ZM8.66667 8.33325C8.47778 8.33325 8.31933 8.26925 8.19133 8.14125C8.06333 8.01325 7.99956 7.85503 8 7.66659C8 7.4777 8.064 7.31925 8.192 7.19125C8.32 7.06325 8.47822 6.99947 8.66667 6.99992C8.85556 6.99992 9.014 7.06392 9.142 7.19192C9.27 7.31992 9.33378 7.47814 9.33333 7.66659C9.33333 7.85547 9.26933 8.01392 9.14133 8.14192C9.01334 8.26992 8.85511 8.3337 8.66667 8.33325ZM1.33333 13.6666C0.966668 13.6666 0.652668 13.5359 0.391334 13.2746C0.130001 13.0133 -0.000443313 12.6995 1.13186e-06 12.3333V2.99992C1.13186e-06 2.63325 0.130668 2.31925 0.392001 2.05792C0.653334 1.79659 0.967112 1.66614 1.33333 1.66659H2V0.983252C2 0.794363 2.064 0.638808 2.192 0.516585C2.32 0.394363 2.47822 0.333252 2.66667 0.333252C2.85556 0.333252 3.014 0.397252 3.142 0.525252C3.27 0.653252 3.33378 0.811474 3.33333 0.999919V1.66659H8.66667V0.983252C8.66667 0.794363 8.73067 0.638808 8.85867 0.516585C8.98667 0.394363 9.14489 0.333252 9.33333 0.333252C9.52222 0.333252 9.68067 0.397252 9.80867 0.525252C9.93667 0.653252 10.0004 0.811474 10 0.999919V1.66659H10.6667C11.0333 1.66659 11.3473 1.79725 11.6087 2.05859C11.87 2.31992 12.0004 2.6337 12 2.99992V12.3333C12 12.6999 11.8693 13.0139 11.608 13.2753C11.3467 13.5366 11.0329 13.667 10.6667 13.6666H1.33333ZM1.33333 12.3333H10.6667V5.66659H1.33333V12.3333ZM1.33333 4.33325H10.6667V2.99992H1.33333V4.33325Z"
                          fill="#818181"
                        />
                      </svg>
                      <p className="text-xs">{formatDate(item.event_start_date)}</p>
                    </div>
                    <div className="flex items-center gap-1 text-abu mb-2">
                      <svg
                        className="text-abu"
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12.9334L9.3 9.63344C9.9526 8.98078 10.397 8.14926 10.577 7.24403C10.7571 6.33879 10.6646 5.40051 10.3114 4.54781C9.95817 3.69512 9.36003 2.96632 8.59261 2.45356C7.82519 1.9408 6.92296 1.66711 6 1.66711C5.07704 1.66711 4.17481 1.9408 3.40739 2.45356C2.63997 2.96632 2.04183 3.69512 1.68861 4.54781C1.33539 5.40051 1.24294 6.33879 1.42297 7.24403C1.603 8.14926 2.04741 8.98078 2.7 9.63344L6 12.9334ZM6 14.8188L1.75734 10.5761C0.918228 9.73699 0.346791 8.66789 0.115286 7.50401C-0.11622 6.34013 0.00260456 5.13373 0.456732 4.03738C0.91086 2.94103 1.6799 2.00396 2.66659 1.34467C3.65328 0.685388 4.81332 0.333496 6 0.333496C7.18669 0.333496 8.34672 0.685388 9.33342 1.34467C10.3201 2.00396 11.0891 2.94103 11.5433 4.03738C11.9974 5.13373 12.1162 6.34013 11.8847 7.50401C11.6532 8.66789 11.0818 9.73699 10.2427 10.5761L6 14.8188ZM6 7.66678C6.35362 7.66678 6.69276 7.5263 6.94281 7.27625C7.19286 7.0262 7.33334 6.68707 7.33334 6.33344C7.33334 5.97982 7.19286 5.64068 6.94281 5.39064C6.69276 5.14059 6.35362 5.00011 6 5.00011C5.64638 5.00011 5.30724 5.14059 5.05719 5.39064C4.80715 5.64068 4.66667 5.97982 4.66667 6.33344C4.66667 6.68707 4.80715 7.0262 5.05719 7.27625C5.30724 7.5263 5.64638 7.66678 6 7.66678ZM6 9.00011C5.29276 9.00011 4.61448 8.71916 4.11438 8.21906C3.61429 7.71896 3.33334 7.04069 3.33334 6.33344C3.33334 5.6262 3.61429 4.94792 4.11438 4.44783C4.61448 3.94773 5.29276 3.66678 6 3.66678C6.70725 3.66678 7.38552 3.94773 7.88562 4.44783C8.38572 4.94792 8.66667 5.6262 8.66667 6.33344C8.66667 7.04069 8.38572 7.71896 7.88562 8.21906C7.38552 8.71916 6.70725 9.00011 6 9.00011Z"
                          fill="#818181"
                        />
                      </svg>
                      <p className="text-xs">{item.event_location}</p>
                    </div>
                    {item.event_promo_label?(
                      <div className="flex gap-1 item-center bg-[#E9FCE9] max-w-fit  rounded p-1 mb-4">
                        <div>
                            <IconPromo />
                        </div>
                        <p className="text-xs text-[#3C8530] font-semibold">
                          {/* Gratis 1 Tiket Setiap Pembelian */}
                          {item.event_promo_label}
                        </p>
                    </div>
                    ):(<></>)}

                    <Button
                      className=""
                      onClick={() => Router.push(`/detailEvent/${item.event_id}`)}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </Card>
              ))}
            </ContainerEvent>
          </div>

          <div className="my-1">
            <ContainerEvent
              title={res?.music?.title}
              subtitle={res?.music?.subTitle}
            >
              {res?.music?.data?.map((item, index) => (

                <Card className="min-w-[304px] min-h-[124px] " key={index}>
                  <Image
                    src={banner4}
                    className="  object-fill rounded-t-md"
                    alt={index}
                    // width={304}
                    // height={124}
                  // style={{ width: "100%", height: "auto" }}
                  />
                  <div className="m-2 ">
                    <h1 className="font-bold text-sm mb-2">{item.event_title}</h1>
                    <div className="flex items-center gap-1 text-abu mb-1">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 8.33325C3.14445 8.33325 2.986 8.26925 2.858 8.14125C2.73 8.01325 2.66622 7.85503 2.66667 7.66659C2.66667 7.4777 2.73067 7.31925 2.85867 7.19125C2.98667 7.06325 3.14489 6.99947 3.33333 6.99992C3.52222 6.99992 3.68067 7.06392 3.80867 7.19192C3.93667 7.31992 4.00045 7.47814 4 7.66659C4 7.85547 3.936 8.01392 3.808 8.14192C3.68 8.26992 3.52178 8.3337 3.33333 8.33325ZM6 8.33325C5.81111 8.33325 5.65267 8.26925 5.52467 8.14125C5.39667 8.01325 5.33289 7.85503 5.33333 7.66659C5.33333 7.4777 5.39734 7.31925 5.52533 7.19125C5.65333 7.06325 5.81156 6.99947 6 6.99992C6.18889 6.99992 6.34733 7.06392 6.47534 7.19192C6.60333 7.31992 6.66711 7.47814 6.66667 7.66659C6.66667 7.85547 6.60267 8.01392 6.47467 8.14192C6.34667 8.26992 6.18845 8.3337 6 8.33325ZM8.66667 8.33325C8.47778 8.33325 8.31933 8.26925 8.19133 8.14125C8.06333 8.01325 7.99956 7.85503 8 7.66659C8 7.4777 8.064 7.31925 8.192 7.19125C8.32 7.06325 8.47822 6.99947 8.66667 6.99992C8.85556 6.99992 9.014 7.06392 9.142 7.19192C9.27 7.31992 9.33378 7.47814 9.33333 7.66659C9.33333 7.85547 9.26933 8.01392 9.14133 8.14192C9.01334 8.26992 8.85511 8.3337 8.66667 8.33325ZM1.33333 13.6666C0.966668 13.6666 0.652668 13.5359 0.391334 13.2746C0.130001 13.0133 -0.000443313 12.6995 1.13186e-06 12.3333V2.99992C1.13186e-06 2.63325 0.130668 2.31925 0.392001 2.05792C0.653334 1.79659 0.967112 1.66614 1.33333 1.66659H2V0.983252C2 0.794363 2.064 0.638808 2.192 0.516585C2.32 0.394363 2.47822 0.333252 2.66667 0.333252C2.85556 0.333252 3.014 0.397252 3.142 0.525252C3.27 0.653252 3.33378 0.811474 3.33333 0.999919V1.66659H8.66667V0.983252C8.66667 0.794363 8.73067 0.638808 8.85867 0.516585C8.98667 0.394363 9.14489 0.333252 9.33333 0.333252C9.52222 0.333252 9.68067 0.397252 9.80867 0.525252C9.93667 0.653252 10.0004 0.811474 10 0.999919V1.66659H10.6667C11.0333 1.66659 11.3473 1.79725 11.6087 2.05859C11.87 2.31992 12.0004 2.6337 12 2.99992V12.3333C12 12.6999 11.8693 13.0139 11.608 13.2753C11.3467 13.5366 11.0329 13.667 10.6667 13.6666H1.33333ZM1.33333 12.3333H10.6667V5.66659H1.33333V12.3333ZM1.33333 4.33325H10.6667V2.99992H1.33333V4.33325Z"
                          fill="#818181"
                        />
                      </svg>

                      <p className="text-xs">{formatDate(item.event_start_date)}</p>
                    </div>
                    <div className="flex items-center gap-1 text-abu mb-2">
                      <svg
                        className="text-abu"
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12.9334L9.3 9.63344C9.9526 8.98078 10.397 8.14926 10.577 7.24403C10.7571 6.33879 10.6646 5.40051 10.3114 4.54781C9.95817 3.69512 9.36003 2.96632 8.59261 2.45356C7.82519 1.9408 6.92296 1.66711 6 1.66711C5.07704 1.66711 4.17481 1.9408 3.40739 2.45356C2.63997 2.96632 2.04183 3.69512 1.68861 4.54781C1.33539 5.40051 1.24294 6.33879 1.42297 7.24403C1.603 8.14926 2.04741 8.98078 2.7 9.63344L6 12.9334ZM6 14.8188L1.75734 10.5761C0.918228 9.73699 0.346791 8.66789 0.115286 7.50401C-0.11622 6.34013 0.00260456 5.13373 0.456732 4.03738C0.91086 2.94103 1.6799 2.00396 2.66659 1.34467C3.65328 0.685388 4.81332 0.333496 6 0.333496C7.18669 0.333496 8.34672 0.685388 9.33342 1.34467C10.3201 2.00396 11.0891 2.94103 11.5433 4.03738C11.9974 5.13373 12.1162 6.34013 11.8847 7.50401C11.6532 8.66789 11.0818 9.73699 10.2427 10.5761L6 14.8188ZM6 7.66678C6.35362 7.66678 6.69276 7.5263 6.94281 7.27625C7.19286 7.0262 7.33334 6.68707 7.33334 6.33344C7.33334 5.97982 7.19286 5.64068 6.94281 5.39064C6.69276 5.14059 6.35362 5.00011 6 5.00011C5.64638 5.00011 5.30724 5.14059 5.05719 5.39064C4.80715 5.64068 4.66667 5.97982 4.66667 6.33344C4.66667 6.68707 4.80715 7.0262 5.05719 7.27625C5.30724 7.5263 5.64638 7.66678 6 7.66678ZM6 9.00011C5.29276 9.00011 4.61448 8.71916 4.11438 8.21906C3.61429 7.71896 3.33334 7.04069 3.33334 6.33344C3.33334 5.6262 3.61429 4.94792 4.11438 4.44783C4.61448 3.94773 5.29276 3.66678 6 3.66678C6.70725 3.66678 7.38552 3.94773 7.88562 4.44783C8.38572 4.94792 8.66667 5.6262 8.66667 6.33344C8.66667 7.04069 8.38572 7.71896 7.88562 8.21906C7.38552 8.71916 6.70725 9.00011 6 9.00011Z"
                          fill="#818181"
                        />
                      </svg>
                      <p className="text-xs">{item.event_location}</p>
                    </div>
                    {item.event_promo_label?(
                      <div className="flex gap-1 item-center bg-[#E9FCE9] max-w-fit  rounded p-1 mb-4">
                        <div>
                            <IconPromo />
                        </div>
                        <p className="text-xs text-[#3C8530] font-semibold">
                          {/* Gratis 1 Tiket Setiap Pembelian */}
                          {item.event_promo_label}
                        </p>
                    </div>
                    ):(<></>)}

                    <Button
                      className=""
                      onClick={() => Router.push(`/detailEvent/${item.event_id}`)}>
                      {/* onClick={() => Router.push(`/detailEvent`)}> */}
                      Lihat Detail
                    </Button>
                  </div>
                </Card>
              ))}
            </ContainerEvent>
          </div>
          <div className="my-1">
            <ContainerEvent
              title={res?.sport?.title}
              subtitle={res?.sport?.subTitle}
            ></ContainerEvent>
          </div>
        </div>  ``
      </>
    );
  } else {
    return (
      <>

        <div className='flex flex-col justify-between min-h-screen font-primary'>

          <div className=" m-auto ">

            <IconNoEvent />

            <p className='font-semibold text-base text-center'>Event Belum Tersedia</p>
            <p className='font-medium text-center text-xs opacity-50 italic'>Nantikan Event Lainnya di BNI</p>
            <p className='font-medium text-center text-xs opacity-50 italic'>Mobile Banking</p>

          </div>
        </div>
      </>
    );
  }

}
