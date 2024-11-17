import express from  "express"
import  {userRouter}  from "./routes/userRoutes"
import { taskRouter } from "./routes/taskRoutes"

const app =  express()

app.use(express.json())

const PORT = 50001

app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})