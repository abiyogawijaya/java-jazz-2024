import Header from "@/components/Header";
import globalStore from "@/store";
import { useEffect, useState, forwardRef, useCallback } from "react";
import { useRouter } from "next/router";
// import IconTiket from "@/assets/iconTiket";
// import IconPengunjung from "@/assets/iconPengunjung";
// import IconAllert from "@/assets/iconAllert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import IconArrow from "@/assets/iconArrow";
// import ModalNIK from "@/components/ModalNIK";
import axios from "axios";

export default function DataPengunjung() {
  const router = useRouter();
  const { ticketid, pengunjung_ke } = router.query;

  const tokenGlobal = globalStore((state) => state.tokenGlobal);

  const addsession = useCallback(() => {
  //   axios
  //     .post(
  //       process.env.NEXT_PUBLIC_API_URL + "/addsession",
  //       {},
  //       {
  //         headers: {
  //           "Lifestyle-Token ": tokenGlobal,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //       location.reload();

  //     });

  //   setTimeout(addsession, 240000);
  }, []);

  useEffect(() => {
    // addsession();
    // if(!tokenGlobal)router.push("/")
  }, [addsession]);

  // const idFriday = globalStore((state) => state.idFriday);
  // const idSaturday = globalStore((state) => state.idSaturday);
  // const idSunday = globalStore((state) => state.idSunday);
  // const id3Day = globalStore((state) => state.id3Day);
  // const idChicago = globalStore((state) => state.idChicago);
  // const idStephen = globalStore((state) => state.idStephen);
  // const idMax = globalStore((state) => state.idMax);
  // const idCorry = globalStore((state) => state.idCorry);

  // const listPengunjung = globalStore((state) => state.listPengunjung);
  // const addPengunjung = globalStore((state) => state.addPengunjung);

  const [fullname, setFullname] = useState("");
  const [idcard, setIdcard] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");
  const [citizen, setCitizen] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [errNIK, setErrNIK] = useState(false);

  const now = new Date();

  const handleDate = (date) => {
    const setDate = () => {
      setDob(
        `${date.getFullYear()}-${
          date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : `0${date.getMonth() + 1}`
        }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`
      );
    };
    if (date.getFullYear() < now.getFullYear()) setDate();
    if (
      now.getFullYear() == date.getFullYear() &&
      date.getMonth() < now.getMonth()
    )
      setDate();
    if (
      now.getFullYear() == date.getFullYear() &&
      date.getMonth() == now.getMonth() &&
      date.getDate() <= now.getDate()
    )
      setDate();
  };

  const handleSimpan = () => {
    let array = listPengunjung;
    let sama = false;
    let err = false;

    // for (let i = 0; i < listPengunjung.length; i++) {
    //   if (
    //     listPengunjung[i].ticketid == ticketid &&
    //     listPengunjung[i].idcard == idcard &&
    //     listPengunjung[i].pengunjung_ke !== pengunjung_ke
    //   ) {
    //     setErrNIK(true);
    //     err = true;
    //   }
    //   if (
    //     listPengunjung[i].ticketid == ticketid &&
    //     listPengunjung[i].pengunjung_ke == pengunjung_ke &&
    //     !err
    //   ) {
    //     sama = true;
    //     array[i] = {
    //       title,
    //       fullname,
    //       idcard,
    //       dob,
    //       gender,
    //       citizen,
    //       // email,
    //       // phone,
    //       ticketid: parseInt(ticketid),
    //       pengunjung_ke,
    //       country,
    //       status_foreign: "",
    //       address_foreign: "",
    //       ticket_name:
    //         ticketid == idFriday
    //           ? "Daily Pass Friday"
    //           : ticketid == idSaturday
    //           ? "Daily Pass Saturday"
    //           : ticketid == idSunday
    //           ? "Daily Pass Sunday"
    //           : ticketid == id3Day
    //           ? "3 Day Pass"
    //           : ticketid == idChicago
    //           ? "Special Show - The Chicago Experience"
    //           : ticketid == idStephen
    //           ? "Special Show - Stephen Sanchez - Friday"
    //           : ticketid == idMax
    //           ? "Special Show - Max - Saturday"
    //           : ticketid == idCorry
    //           ? "Special Show - Cory Wong - Saturday"
    //           : "",
    //     };
    //     addPengunjung(array);
    //   }
    // }

    // if (!sama && !err) {
    //   addPengunjung([
    //     ...array,
    //     {
    //       title,
    //       fullname,
    //       idcard,
    //       dob,
    //       gender,
    //       citizen,
    //       // email,
    //       // phone,
    //       ticketid: parseInt(ticketid),
    //       pengunjung_ke,
    //       country,
    //       status_foreign: "",
    //       address_foreign: "",
    //       ticket_name:
    //         ticketid == idFriday
    //           ? "Daily Pass Friday"
    //           : ticketid == idSaturday
    //           ? "Daily Pass Saturday"
    //           : ticketid == idSunday
    //           ? "Daily Pass Sunday"
    //           : ticketid == id3Day
    //           ? "3 Day Pass"
    //           : ticketid == idChicago
    //           ? "Special Show - The Chicago Experience"
    //           : ticketid == idStephen
    //           ? "Special Show - Stephen Sanchez - Friday"
    //           : ticketid == idMax
    //           ? "Special Show - Max - Saturday"
    //           : ticketid == idCorry
    //           ? "Special Show - Cory Wong - Saturday"
    //           : "",
    //     },
    //   ]);
    // }

    if (!err) router.push("/data-pengunjung");
  };

  useEffect(() => {
    // for (let i = 0; i < listPengunjung.length; i++) {
    //   if (
    //     listPengunjung[i].ticketid == ticketid &&
    //     listPengunjung[i].pengunjung_ke == pengunjung_ke
    //   ) {
    //     setFullname(listPengunjung[i].fullname);
    //     setIdcard(listPengunjung[i].idcard);
    //     setDob(listPengunjung[i].dob);
    //     setGender(listPengunjung[i].gender);
    //     setCitizen(listPengunjung[i].citizen);
    //     setTitle(listPengunjung[i].title);
    //     setCountry(listPengunjung[i].country);
    //     // setEmail(listPengunjung[i].email);
    //     // setPhone(listPengunjung[i].phone);
    //   }
    // }
  }, []);

  const DatepickerInput = forwardRef(({ ...props }, ref) => (
    <input type="text" {...props} readOnly ref={ref} value={dob} />
  ));

  return (
    <div className="flex flex-col justify-between min-h-screen font-primary">
      {/* {errNIK && <ModalNIK shown={errNIK} close={() => setErrNIK(false)} />} */}
      <div>
        <Header progress="50%">Isi Data Pengunjung</Header>

        <div className="grid grid-cols-5 ">
          <div className="col-span-3 p-3 flex items-center">
            <div>
              {/* <IconTiket /> */}
            </div>
            <div className="px-3">
              <h2 className="font-semibold text-sm">
              {/*  {ticketid == idFriday
                  ? "Daily Pass Friday"
                  : ticketid == idSaturday
                  ? "Daily Pass Saturday"
                  : ticketid == idSunday
                  ? "Daily Pass Sunday"
                  : ticketid == id3Day
                  ? "3 Day Pass"
                  : ticketid == idChicago
                  ? "Special Show - The Chicago Experience"
                  : ticketid == idStephen
                  ? "Special Show - Stephen Sanchez - Friday"
                  : ticketid == idMax
                  ? "Special Show - Max - Saturday"
                  : ticketid == idCorry
                  ? "Special Show - Cory Wong - Saturday"
                  : ""}
                  */}
              </h2>
              <p className="font-medium text-xs opacity-50">
                {/*  
                {ticketid == idFriday ||
                ticketid == idChicago ||
                ticketid == idStephen
                  ? "2 Juni 2023"
                  : ticketid == idSaturday ||
                    ticketid == idMax ||
                    ticketid == idCorry
                  ? "3 Juni 2023"
                  : ticketid == idSunday
                  ? "4 Juni 2023"
                  : "Fri-Sun, 2-4 June 2023"}
                  */}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div>
              {/* <IconPengunjung /> */}
            </div>
            <div className="px-2 text-sm font-medium text-[#F15A23]">
              pengunjung ke 1
              {/* Pengunjung {pengunjung_ke} */}
            </div>
          </div>
        </div>

        <div className="w-full bg-[#EFF2F7] h-2"></div>

        <div className="p-3">
          <div className="font-semibold text-sm py-1">Data Pribadi</div>
          <div className="font-medium text-sm">
            Isi dan lengkapi sesuai data pengunjung
          </div>
        </div>

        <div className="flex items-center p-2 m-3 bg-[#EFFEFF]">
          <div>
            {/* <IconAllert /> */}
          </div>
          <p className="pl-2 text-[#006E85] text-xs font-medium">
            1 (satu) nama/ NIK hanya bisa digunakan 1 (satu) orang dan 1 (satu)
            jenis tiket
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold">Nama Lengkap</p>
          <input
            type="text"
            placeholder="Masukan Nama Lengkap"
            className="py-2 border-b w-full focus:outline-none"
            value={fullname}
            onChange={(e) => {
              if (e.target.value.length <= 30) setFullname(e.target.value);
            }}
          />
          <p className="font-medium text-xs py-1 text-gray-400">Harus Diisi</p>
        </div>

        <div className="py-3">
          <p className="px-3 text-sm font-semibold">Kewarganegaraan</p>
          <div className="relative">
            <select
              onChange={(e) => {
                if (
                  e.target.value == "Indonesia" ||
                  e.target.value == "Foreign"
                ) {
                  setCitizen(e.target.value);
                  if (e.target.value == "Indonesia") setCountry("Indonesia");
                  if (e.target.value == "Foreign") setCountry("Luar Negeri");
                }
              }}
              value={citizen}
              className={`${
                citizen ? "text-black" : "text-gray-400"
              }  p-2 border-b w-full focus:outline-none bg-white`}
            >
              <option hidden>Pilih Kewarganegaraan</option>
              <option className="text-black" value="Indonesia">
                Indonesia
              </option>
              <option className="text-black" value="Foreign">
                Non - Indonesia
              </option>
            </select>
            <div className="absolute bottom-2 right-1 bg-white">
              {/* <IconArrow /> */}
            </div>
          </div>
          <p className="px-3 font-medium text-xs py-1 text-gray-400">
            Harus Diisi
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold">
            {citizen !== "Foreign" ? "NIK" : "Paspor"}
          </p>
          <input
            type="text"
            placeholder={citizen == "Foreign" ? "Masukan Nomor Paspor" : "Masukan Nomor Induk Kependudukan"}
            className="py-2 border-b w-full focus:outline-none"
            value={idcard}
            onChange={(e) => {
              if (e.target.value.length <= 16) setIdcard(e.target.value);
            }}
          />
          <p className="font-medium text-xs py-1 text-gray-400">
            Harus Diisi {citizen == "Indonesia" && "16 Digit"}
          </p>
        </div>

        <div className="p-3">
          <p className="text-sm font-semibold">Tanggal Lahir</p>
          <DatePicker
            className="py-3 w-full focus:outline-none border-b"
            showYearDropdown
            dateFormatCalendar="MMMM"
            placeholderText={"Pilih Tanggal Lahir"}
            customInput={<DatepickerInput />}
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            onChange={(date) => handleDate(date)}
          />
          <p className="font-medium text-xs py-1 text-gray-400">
            Harus Diisi Sesuai {citizen !== "Foreign" ? "KTP" : "Paspor"}{" "}
          </p>
        </div>

        <div className="py-3">
          <p className="px-3 text-sm font-semibold">Jenis Kelamin</p>
          <div className="relative">
            <select
              onChange={(e) => {
                if (e.target.value == "Male" || e.target.value == "Female") {
                  setGender(e.target.value);
                  if (e.target.value == "Male") setTitle("Mr.");
                  if (e.target.value == "Female") setTitle("Mrs.");
                }
              }}
              value={gender}
              className={`${
                gender ? "text-black" : "text-gray-400"
              }  p-2 border-b w-full focus:outline-none bg-white`}
            >
              <option hidden>Pilih Jenis Kelamin</option>
              <option className="text-black" value="Male">
                Laki-Laki
              </option>
              <option className="text-black" value="Female">
                Perempuan
              </option>
            </select>
            <div className="absolute bottom-2 right-1 bg-white">
              {/* <IconArrow /> */}
            </div>
          </div>
          <p className="px-3 font-medium text-xs py-1 text-gray-400">
            Harus Diisi
          </p>
        </div>

        {/* <div className="w-full bg-[#EFF2F7] h-2"></div>

        <div className="p-3">
          <div className="font-semibold text-sm py-1">Kontak Pribadi</div>
          <div className="font-medium text-sm">
            Lengkapi data pribadi untuk keperluan pemesanan
          </div>
        </div> */}

        {/* <div className="p-3">
          <p className="text-sm font-semibold">Alamat Email</p>
          <input
            type="email"
            placeholder="Masukan alamat email"
            className="py-2 border-b w-full focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-medium text-xs py-1 text-gray-400">
            Pastikan alamat email benar untuk pengiriman tiket
          </p>
        </div> */}

        {/* <div className="p-3">
          <p className="text-sm font-semibold">No Telepon</p>
          <input
            type="number"
            placeholder="Masukan Nomor Telepon"
            className="py-2 border-b w-full focus:outline-none"
            value={phone}
            onChange={(e) => {
              if (e.target.value.length <= 14) setPhone(e.target.value);
            }}
          />
          <p className="font-medium text-xs py-1 text-gray-400">Harus Diisi</p>
        </div> */}
      </div>

      <div className="m-4">
        <button
          disabled={
            fullname.length < 1 ||
            (citizen == "Foreign" && idcard.length < 6) ||
            (citizen == "Indonesia" && idcard.length !== 16) ||
            !dob ||
            !gender ||
            !citizen
            // !email ||
            // phone.length < 6
          }
          onClick={handleSimpan}
          className="disabled:bg-[#EDF1F3] w-full bg-[#F15A23]  py-3 rounded-3xl text-white disabled:text-gray-400"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
