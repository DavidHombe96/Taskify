import mongoose from 'mongoose';
import 'dotenv/config'

export const dbConnect = async ()=> {
	try {
		const URI = process.env.MONGODB_CLOUD_LOCAL

		if(!URI) {
				throw new Error("Variável não definida no ambiente")
		}
		await mongoose.connect(URI)
		console.log('🎲 Banco de dados connectado com sucesso!')
	} catch (error) {
		if (error instanceof Error) {
			console.error('Erro ao se conectar ao banco de dados:',  error.message);
		} else {
			console.error('Erro desconhecido:', error);
		}
	}
}