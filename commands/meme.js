module.exports = {
	name: "meme",
	async execute(message, args) {
		const fetch = require("isomorphic-unfetch")
		const data = await (await fetch("https://reddit.com/r/memes/new.json?limit=100")).json()
		const url = data.data.children[Math.floor(Math.random() * 100)].data.url;
		message.channel.send(url)
	}
}