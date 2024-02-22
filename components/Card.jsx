import React from "react";

export default function Card({ children, className }) {
    return (
        <div className={`font-primary block bg-white rounded-lg border-[#D0DDDE] border ${className}`}>
            {children}
        </div>
    );
}
