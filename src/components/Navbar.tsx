import { AiFillHome, AiOutlineFolderView } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-full text-2xl bg-cyan-800	w-16 [&>div]:text-gray-300 [&>div]:hover:cursor-pointer ">
      <div className=" w-full [&>div]:w-full [&>div]:mt-4">
        <div className="hover:text-gray-50 flex justify-center">
          <AiFillHome />
        </div>
        <div className="hover:text-gray-50 flex justify-center">
          <AiOutlineFolderView />
        </div>
        <div className="hover:text-gray-50 flex justify-center">
          <BsFillPeopleFill />
        </div>
        <div className="hover:text-gray-50 flex justify-center">
          <SiSimpleanalytics />
        </div>
      </div>
      <div className="mb-4 flex justify-center text-white text-4xl">
        <p>V</p>
      </div>
    </div>
  );
}

export default Navbar;
