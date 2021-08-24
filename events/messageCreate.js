import commandParser from '../utils/commandParser.js';
const messageCreate = (client) => {
	client.on('messageCreate', async (msg) => {
		if (msg.author.bot || !msg.content.startsWith(client.prefix) || msg.channel.name !== 'brunbot-commands') return;
		await commandParser(msg);
	});
};
export default messageCreate;
