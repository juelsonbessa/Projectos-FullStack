import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({iconCheck, text, iconStar }) {
  return (
    <>
      <div className="flex items-center justify-between w-full bg-slate-900 p-2 py-3 rounded-md">
        
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={iconCheck} className="text-gray-500 cursor-pointer" />
          <span className="text-white">{text}</span>
        </div>
        <FontAwesomeIcon icon={iconStar} className="text-gray-500 cursor-pointer"/>
      </div>
    </>
  );
}

export default Task;
