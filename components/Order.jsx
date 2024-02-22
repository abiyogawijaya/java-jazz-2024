

export default function Order({
  orderID,
  className,
}) {
  return (

    
    <div className={`p-3 font-primary ${className} border-[#D0DDDE] flex justify-between `}>
        <div>
        
          <p className="font-semibold text-base opacity-50">{orderID}</p>
       
          
        </div>

       
      </div>
  );
}
