type ModalProps = {
  options: string[];
};
function Modal({ options }: ModalProps) {
  return (
    <div className="bg-white right-8.5 top-5 absolute z-10 rounded-sm shadow">
      {options &&
        options.map((option) => (
          <p className="my-2 mx-2 px-2 rounded-sm hover:cursor-pointer hover:bg-gray-200">
            {option}
          </p>
        ))}
    </div>
  );
}

export default Modal;
