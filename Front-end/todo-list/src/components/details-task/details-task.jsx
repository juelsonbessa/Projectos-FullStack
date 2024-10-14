import {
  faCheckCircle,
  faStar,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import api from "../../service/api";

function DetailsTasks({ id, onClose }) {
  const [detailsTasks, setDetailsTasks] = useState([]);

  const formatData = (dataString) => {
    const convertData = new Date(dataString);
    const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const diaDaSemana = diasDaSemana[convertData.getUTCDay()];
    const dia = convertData.getUTCDate();
    const mes = meses[convertData.getUTCMonth()];

    const dataFormated = `Criado na ${diaDaSemana}, ${dia} de ${mes}`;

    return dataFormated;
  };

  const taskDetails = async () => {
    try {
      const dataTask = await api.get(`/details-task/${id}`);

      setDetailsTasks([dataTask.data]);
    } catch (error) {
      console.log(`Erro na listagem dos detalhes: ${error}`);
    }
  };

  useEffect(() => {
    taskDetails();
  }, [id]);

  if (!detailsTasks) {
    return <div>Carregando...</div>;
  }

  const modalContent = (
    <div className="bg-slate-900 py-8 h-lvh p-2 text-white fixed right-0 top-0">
      {detailsTasks.map((detail) => (
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
      ))}
    </div>
  );
  return ReactDOM.createPortal(modalContent, document.body);
}

export default DetailsTasks;
