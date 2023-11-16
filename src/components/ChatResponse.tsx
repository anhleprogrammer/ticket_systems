// import ChatTextArea from "./ChatTextArea";
import MyEditor from "./MyEditor";
type CharResponseProps = {
  message: string;
  timestamp: string;
  name: string;
  reply: string;
};
function ChatResponse({ message, timestamp, name, reply }: CharResponseProps) {
  console.log(name);
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col justify-around gap-8">
        <div className="bg-white p-4 rounded">
          <div>
            {" "}
            <p className="font-bold">{name}</p>
            <p className="font-extralight">{timestamp}</p>
          </div>
          <p>{message}</p>
        </div>{" "}
        <div className="bg-white p-4 rounded flex flex-col items-end">
          <div>
            <p className="font-bold">Anh</p>
            <p className="font-extralight">{timestamp}</p>
          </div>
          <p>{reply}</p>
        </div>
        {/* <ChatTextArea /> */}
        <MyEditor />
      </div>
    </div>
  );
}

export default ChatResponse;
