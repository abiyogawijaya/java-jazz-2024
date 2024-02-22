import React from "react";

function Modal({ children, shown, close, transparent }) {
    const nodeRef = React.useRef(null);
    return shown ? (
        <>
            <div
                className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1000] bg-black bg-opacity-50 font-primary'
                onClick={close}>
                <div
                    className='p-4  flex flex-col items-center rounded-2xl w-full bg-transparent'
                    onClick={(e) => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>
                    {children}
                </div>
            </div>
        </>
    ) : null;
}

export default Modal;
