import ReactDOM from "react-dom";
import Form from "./Form";
function CreateTicketModal({ setClose }: any) {
  const handleClose = (e: any) => {
    if (e.target.className.baseVal !== undefined) {
      if (e.target.className.baseVal.includes("overlay")) setClose(false);
    } else if (e.target.className.includes("overlay")) setClose(false);
  };
  return ReactDOM.createPortal(
    <div
      className="overlay h-screen fixed w-full flex items-center justify-center bg-slate-800 bg-opacity-50 z-20"
      onClick={handleClose}
    >
      <div className="content w-1/2 h-5/6 bg-white ">
        <Form />
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default CreateTicketModal;
