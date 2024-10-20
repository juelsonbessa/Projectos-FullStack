import {
  faCheckCircle,
  faStar,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { formatData, getDetailsTask } from "../../utils/functions";

function DetailsTasks({ id, onClose }) {
  const [detailsTasks, setDetailsTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDetailsTask("details-task", setDetailsTasks, id, setIsLoading);
  }, [id]);

  const modalContent = (
    <div className="bg-slate-900 py-8 h-lvh p-2 text-white fixed right-0 top-0">
      {isLoading ? (
        <div className="w-9 h-9 border-t-4 border-blue-200 rounded-full animate-spin flex items-center justify-center"></div>
      ) : (
        detailsTasks.map((detail) => (
          <div className="flex flex-col justify-between h-full" key={detail.id}>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-between w-full">
                <h4 className="text-center">Detalhes da tarefa</h4>

                <FontAwesomeIcon
                  icon={faWindowClose}
                  className="cursor-pointer"
                  onClick={onClose}
                />
              </div>

              <div className="flex items-center justify-between w-full bg-slate-800 p-3 rounded-md">
                <div className="flex items-center justify-center gap-6 w-full">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-gray-500 cursor-pointer"
                  />
                  <textarea
                    className="bg-transparent w-full outline-none resize-none overflow-y-scroll no-scrollbar"
                    cols="30"
                    defaultValue={detail.task}
                  ></textarea>

                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="">{formatData(detail.createAt)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
  return ReactDOM.createPortal(modalContent, document.body);
}

export default DetailsTasks;
