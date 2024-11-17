import express from  "express"
import  {userRouter}  from "./routes/userRoutes"

const app =  express()

app.use(express.json())

const PORT = 50001

app.use("/api/v1/users", userRouter)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})