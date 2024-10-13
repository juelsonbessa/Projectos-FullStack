import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import api from "../../service/api";

function DetailsTasks({id}) {
  const [detailsTasks, setDetailsTasks] = useState()

  const taskDetails = async() => {
    try {
      const dataTask = await api.get(`/details-task/${id}`)

      setDetailsTasks(dataTask.data)
    } catch (error) {
      console.log(`Erro na listagem dos detalhes: ${error}`);
    }
  }

  useEffect(() => {
    taskDetails()
    console.log(detailsTasks)
  }, [])
  
  return (
    <div className="bg-slate-900 py-8 h-lvh p-2 text-white absolute right-0 top-0">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex justify-center">
            <h4 className="text-center">Detalhes da tarefa</h4>
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
                defaultValue={detailsTasks.task}
              ></textarea>

              <FontAwesomeIcon
                icon={faStar}
                className="text-gray-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="">Criando em dom, 14 de abr</span>
        </div>
      </div>
    </div>
  );
}

export default DetailsTasks;
