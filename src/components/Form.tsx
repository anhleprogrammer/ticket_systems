import Button from "./Button";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Form() {
  return (
    <div className="text-sm flex flex-col p-4 gap-4 [&>input]:border [&>input]:p-2 [&>select]:border [&>select]:p-2">
      <div className="flex justify-between items-center text-xl">
        <p className="text-center w-full">Create ticket</p>
        <AiOutlineCloseCircle className="overlay cursor-pointer closeCircle" />
      </div>

      <label htmlFor="contact">Contact</label>
      <input type="text" id="contact" />

      <label htmlFor="subject">Subject</label>
      <input type="text " id="subject" />

      <label htmlFor="status">Status:</label>

      <select name="status" id="status">
        <option value="open">Open</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
      </select>
      <label htmlFor="priority">Priority:</label>

      <select name="priority" id="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea className="border p-2 h-44" id="description " />
      <div className="flex gap-4 justify-end m-4">
        <Button name="Submit" />
        <Button name="Cancel" />
      </div>
    </div>
  );
}

export default Form;
