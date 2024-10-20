import api from "../service/api";

export const formatData = (dataString) => {
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

export const getAllTasks = async (url, stateData, stateLoading) => {
  stateLoading(true);
  try {
    const dataTask = await api.get(`/${url}/`);

    stateData(dataTask.data);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  } finally {
    stateLoading(false);
  }
};

export const getDetailsTask = async (url, stateData, id, stateLoading) => {
  stateLoading(true);
  try {
    const dataTask = await api.get(`/${url}/${id}`);

    stateData([dataTask.data]);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  } finally {
    stateLoading(false);
  }
};

export const insertTask = async (url, taskInfo, stateLoading) => {
  stateLoading(true);
  try {
    const insertTask = await api.post(`/${url}/`, {
      task: taskInfo,
    });

    //console.log(insertTask);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }finally{
    stateLoading(false);
  }
};
