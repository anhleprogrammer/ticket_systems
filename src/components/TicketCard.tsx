import Select from "./Select";
function TicketCard() {
  return (
    <div className="flex text-sm justify-between bg-white p-4 ">
      <div className="flex justify-between gap-4 text-sm items-center">
        <input type="checkbox" />
        <p className="border px-4 py-2 border-black rounded flex-grow-1">A</p>
        <div>
          <p>adf</p>
          <p className="hover:cursor-pointer">
            Payment failed <a>#2</a>
          </p>
          <div className="flex gap-2">
            <p className="hover:cursor-pointer">Anh Le</p>
            <p>|</p>
            <p>Created: 5 days ago</p>
          </div>
        </div>
      </div>
      <div className="mr-24">
        <div>
          <Select />
        </div>
        <div>
          <p>Escalation</p>
        </div>

        <div>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
