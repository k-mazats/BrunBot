import commands from '../commands/index.js';
import defaultError from './defaultError.js';
const commandParser = async (msg) => {
	const fullCommand = { ...msg }.content.replace('🥐 ', '').split(' ');
	const commandName = fullCommand[0].toLowerCase();
	const commandArgs = [...fullCommand];
	commandArgs.shift();
	if (!commands[commandName]) {
		msg.reply('Commande inconnue');
	}
	else if (commandArgs.length < commands[commandName].requiredArgs.length) {
		commands[commandName].error() || defaultError(commandArgs, commands[commandName].requiredArgs, msg);
	}

	// const validReply = await msg.reply('Je suis une commande');
	// const fullCommandReply = await validReply.reply(fullCommand.toString());
	// const commandNameReply = await fullCommandReply.reply(
	// 	`La commande est "${commandName}"`
	// );
	// await commandNameReply.reply(`les arguments sont "${commandArgs}"`);
};

export default commandParser;
