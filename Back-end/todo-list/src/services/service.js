import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Listando todas as tarefas
export const listTaskBD = async () => {
  try {
    const taskBD = await prisma.tasks.findMany();

    return taskBD;
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro: Não existe nenhuma tarefa cadastrada na BD",
        error,
      });
  }
};

//Inserindo tarefas
export const insertTaskBD = async (taskInfo) => {
  try {
    const insertBD = await prisma.tasks.create({
      data: {
        task: taskInfo,
        complete: false,
      },
    });

    return insertBD;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro: Tarefa não foi inserida na BD", error });
  }
};

//Deletando tarefa
export const delTaskBD = async (taskID) => {
  try {
    const delBD = await prisma.tasks.delete({
      where: { id: taskID },
    });

    return delBD;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro: Tarefa não foi deletada na BD", error });
  }
};

//Editar tarefa
export const editTaskBD = async (taskId, taskInfo, taskComplete) => {
  try {
    const updateBD = await prisma.tasks.update({
      where: { id: taskId },
      data: {
        task: taskInfo,
        complete: taskComplete,
      },
    });

    return updateBD;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro: edição da tarefa não foi salva na BD", error });
  }
};

//Detalhes tarefa
export const detailsTaskBD = async (taskID) => {
  const detailsBD = await prisma.tasks.findUnique({
    where: { id: taskID },
  });

  return detailsBD;
};
