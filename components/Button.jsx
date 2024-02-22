import React from "react";

export default function Button({ children, className, ...props }) {
    return (
        <button {...props} type={props} className={`${className ? className : "btn-primary"} btn font-primary`}>
            {children}
        </button>
    );
}
