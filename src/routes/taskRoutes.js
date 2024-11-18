import {  Router } from 'express'
import { changeTaskStatus, createTaskController, deleteTaskController, getTaskController, getTasksController, updateTaskController } from '../controllers/taskController'


export const taskRouter = Router()

// api/v1/tasks
taskRouter.get("/", getTasksController)

// api/v1/tasks
taskRouter.post("/", createTaskController)

// api/v1/tasks/:id
taskRouter.get("/:id", getTaskController)

// api/v1/tasks/:id
taskRouter.put("/:id", updateTaskController)

// api/v1/tasks/changeStatus/:id
taskRouter.patch("/changeStatus/:id", changeTaskStatus)

// api/v1/tasks/:id
taskRouter.delete("/:id", deleteTaskController)