import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
type SelectProps = {
  options: string[];
  value: string;
};
function getOptionColor(option: string) {
  switch (option) {
    case "Low":
      return (
        <a className="bg-green-500 px-1 py-1 text-[0.2rem] rounded mr-2"></a>
      );
    case "Medium":
      return (
        <a className="bg-yellow-500 px-1 py-1 text-[0.2rem] rounded mr-2"></a>
      );

    case "High":
      return (
        <a className="bg-red-500 px-1 py-1 text-[0.2rem] rounded mr-2"></a>
      );

    default:
      return <img src="status.svg" className="w-2.5 mr-1.5" />;
  }
}
function Select({ options, value }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(value);
  const selectRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectRef.current &&
        !(selectRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex items-center gap-4 hover:cursor-default justify-between mb-2"
      onClick={handleClick}
      ref={selectRef}
    >
      <div className="flex items-center">
        {getOptionColor(select)}
        <a>{select}</a>
      </div>
      <img src="arrow_down.svg" className="w-4" />
      {open && <Modal options={options} setSelect={setSelect} />}
    </div>
  );
}

export default Select;
