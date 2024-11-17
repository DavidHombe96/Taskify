import { Schema, model } from "mongoose"

export const Task = model("Task", new Schema({
	name: {
		type: String,
		required: [true, "Preencha o campo nome"]

	},
	description: {
		type: String,
		required: [true, "Preencha o campo descrição"]

	},
	priority: {
    type:String,
    required: true,
    enum: ['Necessária','Importante','Urgente'],
    default:'Necessária',
  },
	status: {
    type:String,
    required: true,
    enum: ['Pendente','Concluída'],
    default:'Pendente',
  },
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
	}

}))