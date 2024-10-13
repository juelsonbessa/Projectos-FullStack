import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsTasks from "../details-task/details-task";
import { useState } from "react";

function Task({ iconCheck, text, iconStar }) {
  const [detailTask, setDetailTask] = useState(false)

  const showDetails = () => {
    setDetailTask(!detailTask)
  }
  return (
    <>
      <div className="flex items-center justify-between w-full bg-slate-900 p-2 py-3 rounded-md">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={iconCheck}
            className="text-gray-500 cursor-pointer"
          />
          <span className="text-white cursor-pointer" onClick={showDetails}>{text}</span>
        </div>
        <FontAwesomeIcon
          icon={iconStar}
          className="text-gray-500 cursor-pointer"
        />
      </div>

      {detailTask && <DetailsTasks />}
    </>
  );
}

export default Task;
