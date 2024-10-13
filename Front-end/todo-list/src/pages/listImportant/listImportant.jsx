import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAba from "../../components/info-aba/textAba";
import Task from "../../components/tasks/task";
import {
  faStar,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar";

function ListImportant() {
  return (
    <div className="flex">
      <div className="bg-slate-900 py-8 h-lvh p-2 text-white w-12 md:w-96">
        <Sidebar />
      </div>

      <div className="bg-importantImg w-lvw h-lvh p-7 flex flex-col justify-between gap-5">
        <div className="flex items-center justify-start">
          <TextAba icon={faStar} text={"Tarefas"} />
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

export default ListImportant;
