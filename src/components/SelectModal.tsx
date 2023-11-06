type ModalProps = {
  options: string[];
  setSelect: (value: string) => void;
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
function SelectModal({ options, setSelect }: ModalProps) {
  return (
    <div
      className="flex flex-col w-32 overflow-hidden bg-white right-8.5 top-5 absolute z-10 rounded-md shadow 
    px-2"
    >
      {options &&
        options.map((option: string) => (
          <div className="flex items-center hover:bg-gray-200 rounded my-1 p-1">
            <a
              className={`${getOptionColor(
                option
              )} px-1 py-1 text-[0.2rem] rounded mr-2`}
            ></a>
            <a
              onClick={() => setSelect(option)}
              className="rounded-sm hover:cursor-pointer w-full"
            >
              {option}
            </a>{" "}
          </div>
        ))}
    </div>
  );
}

export default SelectModal;
