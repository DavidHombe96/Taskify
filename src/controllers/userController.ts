import { Request, Response } from "express"
import { User } from "../models/User"

export const registerUserController = async (req: Request, res: Response) => {
	const { lastname, firstname, email, password } = req.body

	try {
		const newUser = await User.create({
			lastname,
			firstname,
			email,
			password
		})
		res.status(201).json({
			message: "success",
			user: newUser
		})

	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Não foi possível criar a conta."
		});
	}
}

export const loginUserController = (req: Request, res: Response) => {
	const { email, password } = req.body

	try {

		res.status(200).json({
			email, password
		})

	} catch (error) {
		console.log("Error: ", error)
	}
}


export const getUsersController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "All users"
		})

	} catch (error) {
		console.log("Error: ", error)
	}
}

export const getUserController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "List a user"
		})

	} catch (error) {
		console.log("Error: ", error)
	}
}


export const updateUserController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "User updated"
		})

	} catch (error) {
		console.log("Error: ", error)
	}
}



export const deleteUserController = (req: Request, res: Response) => {

	try {

		res.status(200).json({
			message: "User deleted"
		})

	} catch (error) {
		console.log("Error: ", error)
	}
}



