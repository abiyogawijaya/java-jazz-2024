import IconModal from "@/assets/iconModal";

export default function ModalAddSession({ shown, close, children }) {
  return shown ? (
    <div
      className="font-primary h-screen fixed z-[1000] w-full inset-0 flex items-center justify-center bg-black bg-opacity-30 "
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
            Maaf, sesi anda habis
          </div>
          <div className=" text-base text-center">
            Silahkan menunggu <b>5 menit</b> untuk dapat memesan kembali di menu 'Event'
          </div>

          <button onClick={close} className="w-full bg-[#F15A23] rounded-2xl text-white py-2">
            Oke
          </button>
        </div>
      </div>
    </div>
  ) : null;
}