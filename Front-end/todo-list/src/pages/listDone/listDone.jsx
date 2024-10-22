import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAba from "../../components/info-aba/textAba";
import Task from "../../components/tasks/task";
import {
  faStar,
  faTasks,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar";
import { getAllTasks } from "../../utils/functions";

function ListDone() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterTaskDone = tasks.filter((task) => task.isDone == true)

  useEffect(() => {
    getAllTasks("list-tasks", setTasks, setIsLoading);
  }, []);

  return (
    <div className="flex">
      <div className="bg-slate-900 py-8 h-lvh p-2 text-white w-12 md:w-96">
        <Sidebar />
      </div>

      <div className="bg-doneImg w-lvw h-lvh p-7 flex flex-col justify-between gap-5">
        <div className="flex items-center justify-start">
          <TextAba icon={faTasks} text={"Tarefas"} />
        </div>

        <div className="w-full h-full overflow-y-scroll no-scrollbar scroll-smooth flex flex-col gap-1 items-center">
          {isLoading ? (
            <div className="w-9 h-9 border-t-4 border-blue-200 rounded-full animate-spin"></div>
          ) : (
            filterTaskDone.map((task, index) => (
              <Task
                key={index}
                isDone={task.isDone}
                text={task.task}
                idTask={task.id}
              />
            ))
          )}
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

export default ListDone;
