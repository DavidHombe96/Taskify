interface CustonError extends Error {
	statusCode?:number
}

function appErr({ message, statusCode }: { message: string; statusCode: number; }): CustonError {
	let error: CustonError = new Error(message);

	error.statusCode = statusCode ? statusCode : 500;
	error.stack = error.stack;

	return error;

}

export default appErr;