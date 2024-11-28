import { Router } from "express"
import { deleteUserController, getUserController, getUsersController, loginUserController, perfilUserController, registerUserController, updateUserController } from "../controllers/userController.js";
import { isLogin } from "../middleware/isLogin.js";
export const userRouter = Router()

// api/v1/users/register
userRouter.post("/register", registerUserController)

// api/v1/users/login
userRouter.post("/login", loginUserController)

// api/v1/users/
userRouter.get("/", getUsersController)

// api/v1/users/:id
userRouter.get("/:id", getUserController)

userRouter.get("/perfil/:id", isLogin,  perfilUserController)

// api/v1/users/:id
userRouter.put("/:id", updateUserController)

// api/v1/users/:id
userRouter.delete("/:id", deleteUserController)
