import { useState } from "react";
import Modal from "./Modal";
type ModalProps = {
  options: string[];
  value: String;
};
function getOptionColor(option: string) {
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
function Select({ options, value }: ModalProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="relative flex items-center gap-4 hover:cursor-default justify-between mb-2"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <a
          className={`${getOptionColor(
            value
          )} px-1 py-1 text-[0.2rem] rounded mr-2`}
        ></a>
        <a>{value}</a>
      </div>

      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
          fill="#0F0F0F"
        />
      </svg>
      {open && <Modal options={options} />}
    </div>
  );
}

export default Select;
