import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAba from "../../componets/info-aba/textAba";
import Task from "../../componets/tasks/task";
import {
  faHome,
  faStar,
  faEllipsisH,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../componets/sidebar/sidebar";

function ListTask() {
  return (
    <div className="flex">
      <div className="bg-slate-900 py-8 h-lvh p-2 text-white w-96">
        <Sidebar />
      </div>

      <div className="bg-homeImg w-lvw h-lvh p-7 flex flex-col justify-between gap-5">
        <div className="flex items-center justify-between">
          <TextAba icon={faHome} text={"Tarefas"} />

          <div>
            <FontAwesomeIcon
              icon={faEllipsisH}
              className="text-xl text-white hover:bg-gray-700 rounded-md p-1 w-5 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full h-full overflow-y-scroll no-scrollbar scroll-smooth flex flex-col gap-1">
          <Task
            iconCheck={faCheckCircle}
            text={"Aprender React JS"}
            iconStar={faStar}
          />
        </div>

        <div className="flex items-center gap-3 bg-slate-900 rounded-md p-1 hover:bg-slate-800 duration-300 ease-in-out">
          <FontAwesomeIcon icon={faPlus} className="text-white" />
          <input
            type="text"
            placeholder="Adicionar tarefa"
            className="bg-transparent w-full h-full py-3 placeholder-white text-white outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default ListTask;
