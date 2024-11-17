import { Schema, model } from "mongoose"

export const Task = model("Task", new Schema({
	name: {
		type: String,
		required: [true, "Name is required"]

	},
	description: {
		type: String,
		required: [true, "Description is required"]

	},
	status: {
		type: Boolean,
		default: false

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