import allServices from "../services/service.js";

const listTaskFront = async (req, res) => {
  try {
    const tasks = await allServices.listTaskBD();
    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefas", error });
  }
};

const insertTaskFront = async (req, res) => {
  try {
    const dateTask = req.body

    const insert = await allServices.insertTaskBD(dateTask.task)
    res.status(200).json(insert)

  } catch (error) {
    res.status(500).json({ message: "Erro ao inserir tarefas", error });
  }
}

const delTaskFront = async (req, res) => {
  try {
    const taskID = req.params.id.replace(":", "")
    const del = await allServices.delTaskBD(taskID)
    res.status(200).json(del)

  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa", error });
  }
}

const editTaskFront = async (req, res) => {
  try {
    const taskInfo = req.body

    const update = await allServices.editTaskBD(taskInfo.id, taskInfo.task, taskInfo.complete)
    res.status(200).json(update)
  } catch (error) {
    res.status(500).json({ message: "Erro ao editar tarefa", error });
  }
}
export default { listTaskFront, insertTaskFront, delTaskFront, editTaskFront};
