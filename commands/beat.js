const { Message } = require("discord.js");

module.exports = {
	name: "beat",
	execute(message, args) {
		const chars = ["k", "c", "a", "v", "p"]
		let beat = "";
		for(let i = 0; i < 100; i++)
		{
			beat += chars[Math.floor(Math.random() * chars.length)]
		}
		message.channel.send(beat, {"tts": true})
	}
}
