import {
  faHome,
  faSearch,
  faStar,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TextMenu from "../menu/textMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-center md:justify-normal gap-0 md:gap-3">
        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="animate-pulse text-blue-500"/>
        </div>
        <div className="flex flex-col">
          <h6 className="text-sm font-medium hidden md:flex">Juelson Junior</h6>
          <span className="text-xs text-blue-200 hidden md:flex">
            juelsoncanbiote@gmail.com
          </span>
        </div>
      </div>

      <div className="border border-gray-700 p-2 text-sm rounded-md border-b-2 border-b-gray-500 focus:border-b-white justify-between items-center hidden md:flex">
        <input
          type="text"
          placeholder="Pesquisar Tarefa"
          className="w-full bg-transparent outline-none text-sm"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="hover:bg-gray-700 p-1 w-5 text-xs rounded-md duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <TextMenu
          icon={faStar}
          text={"Importante"}
          linkAba="/list-important"
          contTasks={50}
        />
        <TextMenu
          icon={faTasks}
          text={"Concluidas"}
          linkAba="/list-done"
          contTasks={5}
        />
        <TextMenu
          icon={faHome}
          text={"Tarefas"}
          linkAba="/"
          contTasks={20}
        />
      </div>
    </div>
  );
}

export default Sidebar;
