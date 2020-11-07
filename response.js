class Response {
	constructor(message) {
		this.message = message;
	}

	print() {
		console.log(this.message);
	}
}

module.exports.Response = Response;