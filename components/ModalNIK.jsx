import IconModal from "@/assets/iconModal";

export default function ModalNIK({ shown, close }) {
  return shown ? (
    <div
      className="h-screen fixed z-[1000] w-full inset-0 flex items-center justify-center bg-black bg-opacity-30 font-primary "
      onClick={close}
    >
      <div
        className="p-4"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="p-4 flex flex-col items-center bg-white rounded-2xl">
          <div className="p-2">
            <IconModal />
          </div>
          <div className="font-semibold text-base text-center">
            Nama atau NIK sudah terdaftar
          </div>
          <div className="font-medium text-sm py-4 text-center">
            1 (satu) nama atau NIK hanya berlaku untuk 1 (satu) jenis tiket
          </div>

          <button onClick={close} className="w-full bg-[#F15A23] rounded-2xl text-white py-2">
            Oke
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
