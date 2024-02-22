import IconPlus from "@/assets/iconPlus";
import IconMinus from "@/assets/iconMinus";
import IconAllert from "@/assets/iconAllert";
import { useEffect } from "react";
import { useState } from "react";

export default function IncrementTiket({
  title,
  date,
  price,
  value,
  setValue,
  className,
  disabled,
  ticketList,
  setCountTiket,
  totalHarga,
  setTotalHarga,
  countTiket
}) {

  const [dataBaru, setDataBAru] = useState(value);
  const [decrease, setDecrease] = useState(0);
  const [increase, setIncrease] = useState(0);



  useEffect(() => {
    // console.log("decrese")
    // console.log(value)


  }, [decrease])
  useEffect(() => {
    // console.log("increase")
    // console.log(value)

  }, [increase])

  // useEffect(() => {
  //   console.log("decrese")
  //   console.log(value)
  //   let obj = value;
  //   if (obj[title] > 0) {
  //     obj[title] = obj[title] - 1
  //     setValue(obj);
  //   }
  // }, [decrease])
  // useEffect(() => {
  //   console.log("increase")
  //   console.log(value)
  //   let obj = value;
  //   obj[title] = obj[title] + 1
  //   setValue(obj)
  // }, [increase])


  return (
    <div className={`p-3 font-primary ${className} border-[#D0DDDE] `}>
      {disabled && (
        <div className="px-3 py-2 flex items-center bg-[#FAD1D1] rounded-3xl text-xs font-medium max-w-fit">
          <div>
            <IconAllert />
          </div>
          <div>Tiket Habis</div>
        </div>
      )}
      <div className="flex justify-between">
        <div>
          <h2 className={`font-semibold text-sm ${disabled && "opacity-50"}`}>{title}</h2>
          {/* <p className="font-medium text-xs opacity-50">{date}</p> */}
          <p className={`font-semibold text-base ${disabled ? "opacity-50" : "text-[#F15A23]"}`}>{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              let obj = value;
              setTotalHarga(totalHarga - price);
              if (obj[title] > 0) {
                obj[title] = obj[title] - 1
                setValue(obj);
                setCountTiket(countTiket - 1);
              }
              console.log(totalHarga)
              setDecrease(decrease + 1)
              // if (value > 0) setValue(value - 1);
            }}
            className="bg-[#F15A23] disabled:bg-[#EDF1F3] rounded-full w-8 h-8 flex items-center justify-center"
            disabled={value[title] === 0}
          >
            <IconMinus fill={value[title] > 0 ? "#FFFFFF" : "#141414"} />
          </button>
          <input
            type="text"
            className="focus:outline-none text-center w-12"
            value={value[title]}
            readOnly
          // onChange={(e) => setValue(e.target.value)}
          />
          <button
            disabled={disabled || value[title] == 4}

            onClick={() => {
              let obj = value;
              obj[title] = obj[title] + 1
              setValue(obj)
              setCountTiket(countTiket + 1);
              setTotalHarga(totalHarga + price);  
            }
            }
            className="bg-[#F15A23] disabled:bg-[#EDF1F3] rounded-full w-8 h-8 flex items-center justify-center"
          >
            <IconPlus fill={disabled || value[title] == 4 ? "#141414" : "#FFFFFF"} />
          </button>
        </div>
      </div>
    </div>
  );
}
