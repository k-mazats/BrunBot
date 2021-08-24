import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';

import events from './events/index.js';

dotenv.config();

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

events.forEach((event) => {
	event(client);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
