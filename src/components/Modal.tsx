import ReactDOM from "react-dom";
import Form from "./Form";
function Modal({ setClose }: any) {
  const handleClose = (e: any) => {
    if (e.target.className.includes("content")) return "";
    setClose(false);
  };
  return ReactDOM.createPortal(
    <div
      className="h-screen fixed w-full flex items-center justify-center bg-slate-300 bg-opacity-50 z-20"
      onClick={handleClose}
    >
      <div className="content w-1/2 h-2/3 bg-white ">
        <Form />
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default Modal;
