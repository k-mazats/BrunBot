import commandParser from './utils/commandParser.js';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	client.prefix = '🥐';
});

client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return;
	!msg.content.startsWith(client.prefix)
		? msg.reply('Je ne suis pas une commande')
		: await commandParser(msg);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
