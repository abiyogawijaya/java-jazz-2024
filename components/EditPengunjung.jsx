export default function EditPengunjung({ name, idcard, country, className }) {
  return (
    <div className={`p-3 font-primary ${className} border-[#D0DDDE] flex justify-between`}>
      <div>
        <h2 className="font-semibold text-sm">{name}</h2>
        <p className="font-medium text-xs opacity-50">{idcard}</p>
        <p className="font-medium text-xs opacity-50">{country}</p>
      </div>
    </div>
  );
}
