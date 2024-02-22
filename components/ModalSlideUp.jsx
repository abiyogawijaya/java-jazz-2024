import IconCross from "@/assets/iconCross";
import React, { useState, useRef, useEffect, Children } from "react";

const ModalSliedeUp = ({ openModal, isOpen, isSlide, closeModal, children, title }) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [isSlide, setIsSlide] = useState(false);

    const modalRef = useRef();
    let startY = 0;

    useEffect(() => {
        const handleTouchStart = (event) => {
            startY = event.touches[0].clientY;
        };

        const handleTouchMove = (event) => {
            const currentY = event.touches[0].clientY;
            const deltaY = currentY - startY;

            if (deltaY > 150) {
                closeModal();
            }
        };

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, [closeModal]);

    return (
        <div className='font-primary z-[1000]'>
            {isOpen && (
                <div
                    ref={modalRef}
                    onClick={closeModal}
                    className={`fixed inset-0 flex items-end justify-center z-[1000] bg-black   transition duration-100 ${
                        isSlide ? `bg-opacity-[0.35]` : `bg-opacity-0 pointer-events-none`
                    }`}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`bg-white rounded-t-xl  w-full shadow-t   ${
                            isSlide ? "animate-slide-up shadow-top" : "animate-slide-down"
                        } bottom-0`}>
                        {" "}
                        <div className='flex justify-between items-center  px-6 py-4 w-full'>
                            <h1 className='font-semibold'>{title}</h1>
                            {/* <IconCross /> */}{" "}
                            <div className='items-center' onClick={closeModal}>
                                <IconCross />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalSliedeUp;
