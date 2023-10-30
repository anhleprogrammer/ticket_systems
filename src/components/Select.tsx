import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/Io";
function Select({ options }) {
  const opts = ["Low", "Medium", "High"];
  return (
    <div className="flex items-center gap-4 hover:cursor-default">
      Select
      <IoIosArrowDown />
      {/* <IoIosArrowUp /> */}
    </div>
  );
}

export default Select;
