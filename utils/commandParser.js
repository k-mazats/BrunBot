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
		commands[commandName].error() ||
			defaultError(commandArgs, commands[commandName].requiredArgs, msg);
	}
	else {
		commands[commandName].run(commandArgs, msg);
	}
};

export default commandParser;
