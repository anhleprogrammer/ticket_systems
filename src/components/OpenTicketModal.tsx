import ReactDOM from "react-dom";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import ChatResponse from "./ChatResponse";

type OpenTicketModalProps = {
  setClose: any;
  messages: any;
  name: string;
};
function OpenTicketModal({ setClose, messages, name }: OpenTicketModalProps) {
  const handleClose = (e: any) => {
    if (e.target.className.includes("overlay")) setClose(false);
  };

  return ReactDOM.createPortal(
    <div
      className="overlay h-screen fixed w-full flex items-center justify-end bg-slate-800 bg-opacity-50 z-20"
      onClick={handleClose}
    >
      <div className="w-1/2 h-full bg-slate-100 p-4 overflow-hidden">
        <div className="flex gap-2 mb-8">
          <QuickreplyIcon />
          <p>Quick response</p>
        </div>
        {messages.map((m: any) => (
          <ChatResponse
            name={name}
            message={m.message}
            timestamp={m.timestamp}
            reply={m.reply}
          />
        ))}
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default OpenTicketModal;
