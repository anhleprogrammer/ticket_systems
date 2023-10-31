import { useState } from "react";
type ModalProps = {
  options: string[];
};

function getOptionColor(option) {
  switch (option) {
    case "Low":
      return "bg-green-500";
    case "Medium":
      return "bg-yellow-500";
    case "High":
      return "bg-red-500";
    default:
      return "";
  }
}
function Modal({ options }: ModalProps) {
  const [select, setSelect] = useState();
  return (
    <div
      className="flex flex-col w-32 overflow-hidden bg-white right-8.5 top-5 absolute z-10 rounded-md shadow 
    px-2"
    >
      {options &&
        options.map((option) => (
          <div className="flex items-center hover:bg-gray-200 rounded my-1 p-1">
            <a
              className={`${getOptionColor(
                option
              )} px-1 py-1 text-[0.2rem] rounded mr-2`}
            ></a>
            <a className="rounded-sm hover:cursor-pointer w-full">{option}</a>{" "}
          </div>
        ))}
    </div>
  );
}

export default Modal;
