type ButtonProps = {
  name: string;
  setState?: any;
};
function Button({ name, setState }: ButtonProps) {
  return (
    <button
      className="p-1 rounded bg-cyan-800 text-white px-4 hover:bg-cyan-700 "
      onClick={() => setState()}
    >
      {name}{" "}
    </button>
  );
}

export default Button;
