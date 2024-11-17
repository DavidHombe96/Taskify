import { Request, Response } from "express"

export const registerUserController = (req: Request, res: Response) => {
	const { lastname, firstname, email, password } = req.body

	try {

		res.status(201).json({
			lastname, firstname, email, password
		})

	} catch (error) {
		console.log("Error: ", error)
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



