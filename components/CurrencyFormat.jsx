export const CurrencyFormat = ({ number, className }) => {
    const formattedNum = number
        ? number.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
        : "-";
    // const IdrNum = number ? formattedNum.replace(",00", "") : null;

    return <>{formattedNum}</>;
};
