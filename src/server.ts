import express from "express"
import { dbConnect } from "./database"
import { userRouter } from "./routes/userRoutes"
import { taskRouter } from "./routes/taskRoutes"

const startServer = () => {
	const app = express()
	const PORT = 50001

	app.use(express.json())

	// Routas
	app.use("/api/v1/users", userRouter)
	app.use("/api/v1/tasks", taskRouter)

	app.listen(PORT, () => {
		console.log(`🚀 Servidor a rodar no endereço:http://localhost:${PORT}`)
	})
}

// Database
dbConnect().then(startServer)
	.catch(() => process.exit(1))
