import { Request, Response } from "express"



export const createTaskController = (req: Request, res: Response) => {
	const {  } = req.body
	try {

		res.status(201).json({
			message: "Create task"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível criar a tarefa"
    });
	}
}

export const getTasksController = (req: Request, res: Response) => {
	try {

		res.status(200).json({
			message: "All tasks"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível listar todas as tarefas"
    });
	}
}

export const getTaskController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "List a task"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível listar aesta tarefa"
    });
	}
	}



export const updateTaskController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "Task update"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível atualizar a tarefa"
    });
	}
	}



export const changeTaskStatus = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "Status updated"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível atualizar o estado da tarefa"
    });
	}
	}




export const deleteTaskController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "task deleted"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível apagar a tarefa"
    });
	}
}