import EditButton from "@/assets/editButton";
import IconInfo from "@/assets/infoIcon";

export default function EditTiket({
  title,
  date,
  ticketqty,
  price,
  className,
}) {
  return (
    <div className={`p-3 font-primary ${className} border-[#D0DDDE] flex justify-between`}>
      <div>
        <h2 className="font-semibold text-sm">{title}</h2>
        <p className="font-medium text-xs opacity-50">{ticketqty} Pax</p>
        <p className="font-medium text-xs opacity-50">{date}</p>
      </div>

      <div className="flex items-center">
        <p className="flex items-center justify-center font-semibold text-base text-[#F15A23]">
          {(price * ticketqty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
        </p>
      </div>
    </div>
  );
}
