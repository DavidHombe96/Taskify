
export const registerUserController = (req, res) => {
	const { lastname, firstname, email, password } = req.body

	try {

		res.status(201).json({
			lastname, firstname, email, password
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível criar registar o usuário"
    });
	}
}

export const loginUserController = (req, res) => {
	const { email, password } = req.body

	try {

		res.status(200).json({
			email, password
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível fazer o login"
    });
	}
}


export const getUsersController = (req, res) => {

	try {

		res.status(200).json({
			message: "All users"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível obter todos os usuários"
    });
	}
}

export const getUserController = (req, res) => {

	try {

		res.status(200).json({
			message: "List a user"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível obter o usuário"
    });
	}
}


export const updateUserController = (req, res) => {

	try {

		res.status(200).json({
			message: "User updated"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível atualizar o usuário"
    });
	}
}



export const deleteUserController = (req, res) => {

	try {

		res.status(200).json({
			message: "User deleted"
		})

	} catch (error) {
		res.status(500).json({
      error: error,
      message: "Não foi possível apagar o usuário"
    });
	}
}



