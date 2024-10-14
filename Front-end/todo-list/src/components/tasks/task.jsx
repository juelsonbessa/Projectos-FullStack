import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsTasks from "../details-task/details-task";
import { useEffect, useState } from "react";

function Task({ iconCheck, text, idTask, iconStar }) {
  const [selectId, setSelectId] = useState(null);

  const showDetails = (id) => {
    if(selectId === id){
      setSelectId(null)
    }else{
      setSelectId(id)
    }
  };
  return (
    <>
      <div className="flex items-center justify-between w-full bg-slate-900 p-2 py-3 rounded-md">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={iconCheck}
            className="text-gray-500 cursor-pointer"
          />
          <span
            className="text-white cursor-pointer"
            onClick={() => showDetails(idTask)}
          >
            {text}
          </span>
        </div>
        <FontAwesomeIcon
          icon={iconStar}
          className="text-gray-500 cursor-pointer"
        />

        {selectId !== null && (
          <DetailsTasks id={selectId} onClose={() => setSelectId(null)} />
        )}
      </div>
    </>
  );
}

export default Task;
