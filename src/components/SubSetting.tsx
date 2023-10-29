import { TbFilterCog } from "react-icons/Tb";
function SubSetting() {
  return (
    <div
      className="bg-gray-50 py-4 px-7 flex justify-between
     items-center text-sm [&>div]:flex [&>div]:gap-4 [&>div]:items-center "
    >
      <div className="left">
        {" "}
        <input type="checkbox" />
        <p>Sort by:</p>
        <select
          className="bg-gray-50 hover:cursor-pointer"
          name="sort"
          id="sort"
        >
          <option value="date">Date created</option>
          <option value="resolve">Resolved time</option>

          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="right">
        <p>Layout: </p>
        <select
          className="bg-gray-50 hover:cursor-pointer "
          name="layout"
          id="layout"
        >
          <option value="table">Table view</option>
          <option value="card">Card view</option>
        </select>
        <p>1 - 3 of 3</p>
        <div className="flex">
          <button className="border px-2 hover:cursor-pointer">&lt;</button>
          <button className="border px-2 hover:cursor-pointer">&gt;</button>
        </div>
        <button className="border px-2 text-xl   hover:cursor-pointer">
          <TbFilterCog />
        </button>
      </div>
    </div>
  );
}

export default SubSetting;