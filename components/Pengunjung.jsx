import IconPengunjung from "@/assets/iconPengunjung";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import globalStore from "@/store";
import IconPencil from "@/assets/iconPencil";

export default function Pengunjung({ title, date, qty, ticketid }) {
  const router = useRouter();
  const listPengunjung = globalStore((state) => state.listPengunjung);

  let data = new Array(qty).fill("");
  let array = data;
  for (let i = 0; i < listPengunjung.length; i++) {
    if (listPengunjung[i].ticketid == ticketid)
      array[listPengunjung[i].pengunjung_ke - 1] = listPengunjung[i];
  }
  data = array;


  return (
    <div className="p-3 font-primary">
      <div className="py-3 border-b border-[#D0DDDE]">
        <h2 className="font-semibold text-sm">{title}</h2>
        <p className="font-medium text-xs opacity-50">{date}</p>
      </div>

      {data.map((e, i) => (
        <div key={i}>
          {e == "" ? (
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center">
                <IconPengunjung />
                <span className="px-4 opacity-50 text-sm font-medium">
                  Pengunjung {i + 1}
                </span>
              </div>
              <button
                onClick={() =>
                  router.push(`/form-pengunjung/${ticketid}/${i + 1}`)
                }
                className="border border-[#F15A23] rounded-3xl text-[#F15A23] py-2 px-4 text-xs font-semibold"
              >
                Tambah +
              </button>
            </div>
          ) : (
            <div
              key={i}
              className="p-3 flex justify-between items-center border rounded-xl my-2"
            >
              <div className="flex items-center">
                <IconPengunjung />
                <span className="px-4 text-sm font-medium">{e.fullname}</span>
              </div>
              <button
                onClick={() =>
                  router.push(`/form-pengunjung/${ticketid}/${i + 1}`)
                }
                className=" py-2 px-4 text-xs font-semibold"
              >
                <IconPencil />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
