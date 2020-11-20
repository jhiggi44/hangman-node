class Message {
	constructor(message) {
		this.message = message;
	}

	print() {
		console.log(this.message);
	}
}

module.exports.Message = Message;