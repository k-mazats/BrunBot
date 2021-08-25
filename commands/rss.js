import rssListener from '../services/rss/rssListener.js';
import guildConfig from '../utils/guildConfig.js';
const rss = {
	requiredArgs: ['url'],
	run: async ([url], msg) => {
		const localConfig = await guildConfig.getConfig(msg.guild.id, 'rss');
		if (!localConfig[url]) {
			rssListener.initListener(url, msg.guild.id);
			msg.reply(`Subscribed to ${url}`);
		}
		else {
			msg.reply(`BrunBot is already subscribed to ${url}`);
		}
	},
	// return true si erreur gerée par la commande
	error: (args, msg) => {
		console.log(args, msg);
		return false;
	},
};
export default rss;
