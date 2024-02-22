// import poster1 from "../../assets/detailEvent1.svg";
// import poster2 from "../../assets/detailEvent2.svg";
import Image from "next/image";
import carousel3 from "@/assets/banner3.svg";
import banner4 from "@/assets/banner1.svg";


import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import IconPromo from "@/assets/iconPromo";
import Modal from "@/components/Modal";

// import IconPromo from "@/assets/iconPromo";
// import { CarouselProvider, Slider, Slide, DotGroup, Dot } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import Modal from "@/components/Modal";

import axios from "axios";
import globalStore from "@/store";
// import { CurrencyFormat } from "@/components/CurrencyFormat";

// const items = [
//     {
//         id: 3,
//         title: "Item 1",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         imageUrl: poster3,
//     },

// ];

const images = [
    {
        id: 3,
        title: "Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: carousel3,
    },

];

export default function DetailEvent({ apiUrl }) {
    const router = useRouter();
    const { id } = router.query;
    const dataUser = globalStore((state) => state.dataUser);

    const [isExpanded, setIsExpanded] = useState(false);


    const [respon, setRespon] = useState();

    const [isEnable, setIsEnable] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const promoEventStatus = globalStore((state) => state.promoEventStatus);
    const setPromoEventStatus = globalStore((state) => state.setPromoEventStatus);
    const promoLabel = globalStore((state) => state.promoLabel);
    const setPromoLabel = globalStore((state) => state.setPromoLabel);
    const promoTerms = globalStore((state) => state.promoTerms);
    const setPromoTerms = globalStore((state) => state.setPromoTerms);
    const eventchoice = globalStore((state) => state.eventchoice);
    const setEventChoice = globalStore((state) => state.setEventChoice);

    const tokenGlobal = globalStore((state) => state.tokenGlobal);
    const res = globalStore((state) => state.dataInitEvent);

    useEffect(() => {
        // res.now.data.map((a, b) => {
            // if (a.event_id == id) {
                setEventChoice({
                    "banner": "https://lifestyle.haluan.co/wp-content/uploads/2023/12/Java-Jazz-2024-1152x648.jpg",
                    "title": "Java Jazz 2024",
                    "desc": "The Jakarta International BNI Java Jazz Festival (JJF) is held in Jakarta, Indonesia, and is one of the world's largest jazz festivals, if not the largest in the Southern Hemisphere, due to the number of stages held in each festival, which present more than 100 shows in three days. The inaugural edition of this annual Jazz Festival took place in 2005.",
                    "date_start": "2024-06-24",
                    "date_end": "2024-06-26",
                    "location": "Istora Senayan",
                    "info": [
                        {
                            "icon": "INSTAGRAM",
                            "detail": "@javajazz"
                        }
                    ],
                    "tnc_link": "https://jfp.com/termcondition",
                    "buy_link": "/getticket/JFP24"
                })
                // if (a.event_promo_label != "") {
                    // setPromoEventStatus(true);
                    // setPromoLabel(a.event_promo_label);
                    // setPromoTerms(a.event_promo_term);
                // }
            // }
        // })
    }
    , [])

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.toLocaleDateString("id-ID", { weekday: "long" });
        const dayNumber = date.getDate();
        const month = date.toLocaleDateString("id-ID", { month: "long" });
        const year = date.getFullYear();

        return `${dayNumber} ${month} ${year}`;
    }

    const useMountEffect = (fun) => useEffect(fun, [])

    useMountEffect(() => {

        fetch("/api/log", {
            method: "POST",
            body: JSON.stringify({
                message: dataUser.name + " akses Menu Detail Event",
                token: tokenGlobal,
                page: window.location.href,
            }),
        })

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

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <>
            <Modal shown={isOpen} close={() => setIsOpen(false)}>
                <div className='relative bg-transparent w-screen '>
                    <Image
                        className='object-contain w-full h-full  bg-transparent '
                        src={banner4}
                        alt='Carousel Image'
                    />
                    <div className=' bottom-0 left-0 w-full flex justify-center mt-4'>
                        <button
                            className="bg-white opacity-40 h-2 w-2 rounded-full mx-2 focus:outline-none"
                            onClick={() => setCurrentImage(index)}></button>
                    </div>
                </div>
            </Modal>

            <div className='  font-primary bg-[#F4F6F6] flex flex-col justify-between  min-h-screen'>
                {/* <div className=' l '> */}
                <div className='p-3  bg-white'>
                    <h1 className='text-center text-lg font-semibold'>Detail Event</h1>
                </div>
                <div className='bg-white mb-1  '>
                    <div className={""}>
                        <div className=''>
                            <Image
                                className='m-auto w-full'
                                src={banner4}
                                priority={true}
                                alt='s'
                                onClick={() => setIsOpen(true)}
                            // width={350}
                            // height={150}
                            />
                        </div>
                    </div>

                    <div className='p-6'>
                        <div className='border-b'>
                            <h1 className='font-medium text-base mb-2'>{eventchoice.event_title}</h1>
                            <div className='flex items-center gap-1 text-abu mb-1'>
                                <svg
                                    width='12'
                                    height='14'
                                    viewBox='0 0 12 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M3.33333 8.33325C3.14445 8.33325 2.986 8.26925 2.858 8.14125C2.73 8.01325 2.66622 7.85503 2.66667 7.66659C2.66667 7.4777 2.73067 7.31925 2.85867 7.19125C2.98667 7.06325 3.14489 6.99947 3.33333 6.99992C3.52222 6.99992 3.68067 7.06392 3.80867 7.19192C3.93667 7.31992 4.00045 7.47814 4 7.66659C4 7.85547 3.936 8.01392 3.808 8.14192C3.68 8.26992 3.52178 8.3337 3.33333 8.33325ZM6 8.33325C5.81111 8.33325 5.65267 8.26925 5.52467 8.14125C5.39667 8.01325 5.33289 7.85503 5.33333 7.66659C5.33333 7.4777 5.39734 7.31925 5.52533 7.19125C5.65333 7.06325 5.81156 6.99947 6 6.99992C6.18889 6.99992 6.34733 7.06392 6.47534 7.19192C6.60333 7.31992 6.66711 7.47814 6.66667 7.66659C6.66667 7.85547 6.60267 8.01392 6.47467 8.14192C6.34667 8.26992 6.18845 8.3337 6 8.33325ZM8.66667 8.33325C8.47778 8.33325 8.31933 8.26925 8.19133 8.14125C8.06333 8.01325 7.99956 7.85503 8 7.66659C8 7.4777 8.064 7.31925 8.192 7.19125C8.32 7.06325 8.47822 6.99947 8.66667 6.99992C8.85556 6.99992 9.014 7.06392 9.142 7.19192C9.27 7.31992 9.33378 7.47814 9.33333 7.66659C9.33333 7.85547 9.26933 8.01392 9.14133 8.14192C9.01334 8.26992 8.85511 8.3337 8.66667 8.33325ZM1.33333 13.6666C0.966668 13.6666 0.652668 13.5359 0.391334 13.2746C0.130001 13.0133 -0.000443313 12.6995 1.13186e-06 12.3333V2.99992C1.13186e-06 2.63325 0.130668 2.31925 0.392001 2.05792C0.653334 1.79659 0.967112 1.66614 1.33333 1.66659H2V0.983252C2 0.794363 2.064 0.638808 2.192 0.516585C2.32 0.394363 2.47822 0.333252 2.66667 0.333252C2.85556 0.333252 3.014 0.397252 3.142 0.525252C3.27 0.653252 3.33378 0.811474 3.33333 0.999919V1.66659H8.66667V0.983252C8.66667 0.794363 8.73067 0.638808 8.85867 0.516585C8.98667 0.394363 9.14489 0.333252 9.33333 0.333252C9.52222 0.333252 9.68067 0.397252 9.80867 0.525252C9.93667 0.653252 10.0004 0.811474 10 0.999919V1.66659H10.6667C11.0333 1.66659 11.3473 1.79725 11.6087 2.05859C11.87 2.31992 12.0004 2.6337 12 2.99992V12.3333C12 12.6999 11.8693 13.0139 11.608 13.2753C11.3467 13.5366 11.0329 13.667 10.6667 13.6666H1.33333ZM1.33333 12.3333H10.6667V5.66659H1.33333V12.3333ZM1.33333 4.33325H10.6667V2.99992H1.33333V4.33325Z'
                                        fill='#818181'
                                    />
                                </svg>
                                <p className='text-sm'>{formatDate(eventchoice.event_start_date)}</p>
                            </div>
                            <div className='flex items-center gap-1 text-abu mb-2'>
                                <svg
                                    className='text-abu'
                                    width='12'
                                    height='15'
                                    viewBox='0 0 12 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M6 12.9334L9.3 9.63344C9.9526 8.98078 10.397 8.14926 10.577 7.24403C10.7571 6.33879 10.6646 5.40051 10.3114 4.54781C9.95817 3.69512 9.36003 2.96632 8.59261 2.45356C7.82519 1.9408 6.92296 1.66711 6 1.66711C5.07704 1.66711 4.17481 1.9408 3.40739 2.45356C2.63997 2.96632 2.04183 3.69512 1.68861 4.54781C1.33539 5.40051 1.24294 6.33879 1.42297 7.24403C1.603 8.14926 2.04741 8.98078 2.7 9.63344L6 12.9334ZM6 14.8188L1.75734 10.5761C0.918228 9.73699 0.346791 8.66789 0.115286 7.50401C-0.11622 6.34013 0.00260456 5.13373 0.456732 4.03738C0.91086 2.94103 1.6799 2.00396 2.66659 1.34467C3.65328 0.685388 4.81332 0.333496 6 0.333496C7.18669 0.333496 8.34672 0.685388 9.33342 1.34467C10.3201 2.00396 11.0891 2.94103 11.5433 4.03738C11.9974 5.13373 12.1162 6.34013 11.8847 7.50401C11.6532 8.66789 11.0818 9.73699 10.2427 10.5761L6 14.8188ZM6 7.66678C6.35362 7.66678 6.69276 7.5263 6.94281 7.27625C7.19286 7.0262 7.33334 6.68707 7.33334 6.33344C7.33334 5.97982 7.19286 5.64068 6.94281 5.39064C6.69276 5.14059 6.35362 5.00011 6 5.00011C5.64638 5.00011 5.30724 5.14059 5.05719 5.39064C4.80715 5.64068 4.66667 5.97982 4.66667 6.33344C4.66667 6.68707 4.80715 7.0262 5.05719 7.27625C5.30724 7.5263 5.64638 7.66678 6 7.66678ZM6 9.00011C5.29276 9.00011 4.61448 8.71916 4.11438 8.21906C3.61429 7.71896 3.33334 7.04069 3.33334 6.33344C3.33334 5.6262 3.61429 4.94792 4.11438 4.44783C4.61448 3.94773 5.29276 3.66678 6 3.66678C6.70725 3.66678 7.38552 3.94773 7.88562 4.44783C8.38572 4.94792 8.66667 5.6262 8.66667 6.33344C8.66667 7.04069 8.38572 7.71896 7.88562 8.21906C7.38552 8.71916 6.70725 9.00011 6 9.00011Z'
                                        fill='#818181'
                                    />
                                </svg>
                                <p className='text-sm'>{eventchoice.event_location}</p>

                            </div>
                            {promoEventStatus && (
                                <div className="flex gap-1 item-center bg-[#E9FCE9] max-w-fit  rounded p-1 mb-4">
                                    <div>
                                        <IconPromo />
                                    </div>
                                    <p className="text-xs text-[#3C8530] font-semibold">
                                        {promoLabel}
                                    </p>
                                </div>
                            )
                            }
                        </div>
                        <div className='py-2'>
                            <div
                                className={`text-container  overflow-hidden ${isExpanded ? "h-auto" : "h-40"
                                    } transition-height duration-500 ease-in-out`}>
                                <p className='text-sm mb-4 text-justify'>
                                    {eventchoice.event_desc}
                                    {/* Established in 2006, SKYAVENUE or Labschool Kebayoran's Art Event For Unity 
                                and Equality is an event that showcases dan values, a diverse form of art, 
                                hardships, and creativity of the Indonesian youth. Held annually for seventeen
                                 years straight, SKYAVENUE has become one of the most favored and anticipated 
                                 events annually by those living in Jakarta and its surroundings.  */}
                                </p>
                                <p className='text-sm mb-4 text-justify'>
                                    {/* This Year, SKYAVENUE will be presented within the concept of a music festival, 
                                Jazzed up by Indonesia's most favored A-list guest stars. With our visual theme, 
                                Exploring the nature bash, SKY AVENUE 2022 will take our visitors on a journey 
                                to bloom in the lively nature. Where in this world, life is to be colorful and free. 
                                With Our brand new concept in SKYAVENUE's 18th year, we genuinely hope that SKYAVENUE 
                                2023 will be an aspiring revolutionary movement for all high school students in terms 
                                of organizing art-appreciating events and taking theirs to a whole new level towards a 
                                better Indonesian youth in which being by passion and creativity from in generation. */}
                                </p>
                            </div>
                            <button
                                className='float-right text-sm text-primary font-semibold underline'
                                onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? "Sembunyikan" : "Selengkapnya"}
                            </button>



                        </div>
                    </div>

                </div>
                <div className='p-6 bg-white my-1 '>

                    <h1 className=' mb-2 font-medium'>Info Acara</h1>

                    <div className='flex items-center gap-1 text-abu mb-1'>
                        <svg
                            width='15'
                            height='14'
                            viewBox='0 0 15 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4.75412 0.333496H10.3541C12.4875 0.333496 14.2208 2.06683 14.2208 4.20016V9.80016C14.2208 10.8257 13.8134 11.8092 13.0883 12.5343C12.3631 13.2594 11.3796 13.6668 10.3541 13.6668H4.75412C2.62078 13.6668 0.887451 11.9335 0.887451 9.80016V4.20016C0.887451 3.17466 1.29483 2.19116 2.01997 1.46602C2.74511 0.740876 3.72861 0.333496 4.75412 0.333496ZM4.62078 1.66683C3.98426 1.66683 3.37382 1.91969 2.92373 2.36977C2.47364 2.81986 2.22078 3.43031 2.22078 4.06683V9.9335C2.22078 11.2602 3.29412 12.3335 4.62078 12.3335H10.4875C11.124 12.3335 11.7344 12.0806 12.1845 11.6306C12.6346 11.1805 12.8875 10.57 12.8875 9.9335V4.06683C12.8875 2.74016 11.8141 1.66683 10.4875 1.66683H4.62078ZM11.0541 2.66683C11.2751 2.66683 11.4871 2.75463 11.6434 2.91091C11.7997 3.06719 11.8875 3.27915 11.8875 3.50016C11.8875 3.72118 11.7997 3.93314 11.6434 4.08942C11.4871 4.2457 11.2751 4.3335 11.0541 4.3335C10.8331 4.3335 10.6211 4.2457 10.4649 4.08942C10.3086 3.93314 10.2208 3.72118 10.2208 3.50016C10.2208 3.27915 10.3086 3.06719 10.4649 2.91091C10.6211 2.75463 10.8331 2.66683 11.0541 2.66683ZM7.55412 3.66683C8.43817 3.66683 9.28602 4.01802 9.91114 4.64314C10.5363 5.26826 10.8875 6.11611 10.8875 7.00016C10.8875 7.88422 10.5363 8.73206 9.91114 9.35718C9.28602 9.98231 8.43817 10.3335 7.55412 10.3335C6.67006 10.3335 5.82222 9.98231 5.19709 9.35718C4.57197 8.73206 4.22078 7.88422 4.22078 7.00016C4.22078 6.11611 4.57197 5.26826 5.19709 4.64314C5.82222 4.01802 6.67006 3.66683 7.55412 3.66683ZM7.55412 5.00016C7.02368 5.00016 6.51498 5.21088 6.1399 5.58595C5.76483 5.96102 5.55412 6.46973 5.55412 7.00016C5.55412 7.5306 5.76483 8.0393 6.1399 8.41438C6.51498 8.78945 7.02368 9.00016 7.55412 9.00016C8.08455 9.00016 8.59326 8.78945 8.96833 8.41438C9.3434 8.0393 9.55412 7.5306 9.55412 7.00016C9.55412 6.46973 9.3434 5.96102 8.96833 5.58595C8.59326 5.21088 8.08455 5.00016 7.55412 5.00016Z'
                                fill='#8C8C8C'
                            />
                        </svg>

                        <p className='text-[#8C8C8C] text-sm font-medium '>{eventchoice.event_info}</p>
                    </div>
                </div>
                <div className='bg-white p-6 pb-44 mt-1 '>
                    <div className='flex  gap-1 justify-center  '>
                        <svg
                            width='14'
                            height='18'
                            viewBox='0 0 14 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M7.05412 13.1665C7.29023 13.1665 7.48828 13.0865 7.64828 12.9265C7.80773 12.7671 7.88745 12.5693 7.88745 12.3332V8.99984C7.88745 8.76373 7.80773 8.56567 7.64828 8.40567C7.48828 8.24623 7.29023 8.16651 7.05412 8.16651C6.81801 8.16651 6.62023 8.24623 6.46078 8.40567C6.30078 8.56567 6.22078 8.76373 6.22078 8.99984V12.3332C6.22078 12.5693 6.30078 12.7671 6.46078 12.9265C6.62023 13.0865 6.81801 13.1665 7.05412 13.1665ZM7.05412 6.49984C7.29023 6.49984 7.48828 6.41984 7.64828 6.25984C7.80773 6.10039 7.88745 5.90262 7.88745 5.6665C7.88745 5.43039 7.80773 5.23234 7.64828 5.07234C7.48828 4.91289 7.29023 4.83317 7.05412 4.83317C6.81801 4.83317 6.62023 4.91289 6.46078 5.07234C6.30078 5.23234 6.22078 5.43039 6.22078 5.6665C6.22078 5.90262 6.30078 6.10039 6.46078 6.25984C6.62023 6.41984 6.81801 6.49984 7.05412 6.49984ZM7.05412 17.2707H6.84578C6.77634 17.2707 6.71384 17.2568 6.65828 17.229C4.83884 16.6596 3.33884 15.531 2.15828 13.8432C0.977729 12.156 0.387451 10.2915 0.387451 8.24984V4.31234C0.387451 3.96512 0.488284 3.65262 0.689951 3.37484C0.891062 3.09706 1.15134 2.89567 1.47078 2.77067L6.47078 0.895671C6.66523 0.826226 6.85967 0.791504 7.05412 0.791504C7.24856 0.791504 7.44301 0.826226 7.63745 0.895671L12.6375 2.77067C12.9569 2.89567 13.2175 3.09706 13.4191 3.37484C13.6202 3.65262 13.7208 3.96512 13.7208 4.31234V8.24984C13.7208 10.2915 13.1305 12.156 11.95 13.8432C10.7694 15.531 9.2694 16.6596 7.44995 17.229C7.38051 17.2568 7.24856 17.2707 7.05412 17.2707ZM7.05412 15.5832C8.49856 15.1248 9.69301 14.2082 10.6375 12.8332C11.5819 11.4582 12.0541 9.93039 12.0541 8.24984V4.31234L7.05412 2.43734L2.05412 4.31234V8.24984C2.05412 9.93039 2.52634 11.4582 3.47078 12.8332C4.41523 14.2082 5.60967 15.1248 7.05412 15.5832Z'
                                fill='#F15A23'
                            />
                        </svg>
                        <p
                            onClick={() => router.push("/kebijakan-acara")}
                            className='text-sm text-primary font-medium underline'>
                            Kebijakan Acara
                        </p>

                    </div>

                </div>
                {/* </div> */}
                <div className='px-4  pt-2 pb-6 fixed bottom-0 w-screen bg-white border-t '>

                    <Button
                        className={!isEnable ? "" : " bg-[#EDF1F3] disabled:cursor-not-allowed"}
                        disabled={isEnable}
                        onClick={() => router.push("/pilih-tiket")}>
                        <p className={
                            !isEnable ? "text-base" : " text-base text-[#141414] opacity-[0.35] "
                        }>
                            Beli Tiket
                        </p>
                    </Button>
                </div>
            </div>
        </>
    );
}
