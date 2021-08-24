import commandParser from './utils/commandParser.js';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import axios from 'axios';
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
client.on('guildCreate', async (guild) => {
	if (
		!guild.channels.cache.find((channel) => channel.name === 'brunbot-commands')
	) {
		await guild.channels.create('BrunBot-commands');
	}
	if (
		!guild.channels.cache.find((channel) => channel.name === 'brunbot-feed')
	) {
		const channel = await guild.channels.create('BrunBot-feed');
		channel.permissionOverwrites.create(channel.guild.roles.everyone, {
			SEND_MESSAGES: false,
		});
		const welcome = await channel.send('Ici c\'est chez moi');
		const fetchGif = async () => {
			try {
				const response = await axios({
					method: 'get',
					url: `https://g.tenor.com/v1/search?key=${process.env.GIF_API}&q=you+should+shall+pass&limit=1`,
					json: true,
				});
				return response.data;
			}
			catch (err) {
				console.error(err);
			}
		};

		const gifsArr = await fetchGif();
		const gif = gifsArr.results[0].media[0].gif.url;
		// console.log(gif);
		welcome.reply(gif);
	}
});
client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return;
	!msg.content.startsWith(client.prefix)
		? msg.reply('Je ne suis pas une commande')
		: await commandParser(msg);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
