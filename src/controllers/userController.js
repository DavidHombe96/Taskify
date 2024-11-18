import bcrypt from "bcryptjs";
import { appErr } from "../utils/appErr";

export const registerUserController = async (req, res) => {
	const { lastname, firstname, email, password } = req.body;

	try {
		const userFound = await User.findOne({ email });
		if (userFound) {
			return next(
				appErr(
					"Este email já se encontra registado, procura fazer o login",
					500
				)
			);
		}

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		const user = await User.create({
			firstname,
			lastname,
			email,
			password: hashedPassword,
		});

		res.json({
			status: "Sucesso",
			data: user,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const loginUserController = async (req, res) => {
	const { email, password } = req.body;

	try {
		const userFound = await User.findOne({ email });

		if (!userFound) {
			return res.json({
				message: "Este email não se encontra registado",
			});
		}

		const isPasswordMatched = bcrypt.compareSync(password, userFound.password);

		if (!isPasswordMatched) {
			return res.json({
				message: "Senha incorreta",
			});
		}
		res.status(200).json({
			status: "Sucesso",
			firstname: userFound.email,
			lastname: userFound.email,
			email: userFound.email,
			tasks: userFound.tasks,
		});
	} catch (error) {
		next(appErr(error.message));
	}
};

export const getUsersController = async (req, res) => {
	try {
		res.status(200).json({
			message: "All users",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Não foi possível obter todos os usuários",
		});
	}
};

export const getUserController = async (req, res) => {
	try {
		res.status(200).json({
			message: "List a user",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Não foi possível obter o usuário",
		});
	}
};

export const updateUserController = async (req, res) => {
	try {
		res.status(200).json({
			message: "User updated",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Não foi possível atualizar o usuário",
		});
	}
};

export const deleteUserController = async (req, res) => {
	try {
		res.status(200).json({
			message: "User deleted",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Não foi possível apagar o usuário",
		});
	}
};
