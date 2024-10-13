import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAba from "../../components/info-aba/textAba";
import Task from "../../components/tasks/task";
import {
  faHome,
  faStar,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar";
import api from "../../service/api.js";

function ListTask() {
  const [tasks, setTasks] = useState([]);

  const listTasks = async () => {
    try {
      const dataTaks = await api.get("/list-tasks");

      setTasks(dataTaks.data);
    } catch (error) {
      console.log(`Erro na listagem: ${error}`);
    }
  };

  useEffect(() => {
    listTasks();
  }, []);

  return (
    <div className="flex">
      <div className="bg-slate-900 py-8 h-lvh p-2 text-white w-11 md:w-96">
        <Sidebar />
      </div>

      <div className="bg-homeImg w-lvw h-lvh p-7 flex flex-col justify-between gap-5">
        <div className="flex items-center justify-start">
          <TextAba icon={faHome} text={"Tarefas"} />
        </div>

        <div className="w-full h-full overflow-y-scroll no-scrollbar scroll-smooth flex flex-col gap-1">
          {tasks.map((task) => (
            <Task
              key={task.id}
              iconCheck={faCheckCircle}
              text={task.task}
              iconStar={faStar}
            />
          ))}
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
