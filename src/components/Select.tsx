import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/Io";
function Select() {
  const opts = ["Low", "Medium", "High"];
  const [state, setState] = useState(opts);
  return (
    <div className="flex items-center gap-4 hover:cursor-default">
      Select
      <IoIosArrowDown />
      <IoIosArrowUp />
    </div>
  );
}

export default Select;
