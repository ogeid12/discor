const Discord = require('discord.js');
const fs = require("fs")

const dotenv = require("dotenv")

dotenv.config()

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {
	const prefix = "?"

	if(message.author.tag === "forse#6198")
	{
		message.reply("ma chi ti caga")
	}
	else if(message.author.tag === "yuio06#9359")
	{
		if(Math.random() < 0.3)
		{
			message.channel.send("no scusa yuio non ti arrabiare")
		}
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	message.react("790528989709467648")
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	



	if (!client.commands.has(command)) return;
	client.commands.get(command).execute(message, args);
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN)
// client.login("Nzg4Nzc3NzA3MDQzNDIyMjM5.X9ocfA.RJHrDCTkdz1clwnpJCZ9droSP60")