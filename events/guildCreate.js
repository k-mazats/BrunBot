import guildConfig from '../utils/guildConfig.js';

const guildCreate = (client) => {
	client.on('guildCreate', async (guild) => {
		guildConfig.initConfig(guild.id);
		// guildConfig.editConfig(guild.id, 'test-write', 'option', 'value');
		// guildConfig.getConfig(guild.id, 'test-write');
		if (!guild.channels.cache.find((channel) => channel.name === 'brunbot')) {
			const category = await guild.channels.create('brunbot', {
				type: 'GUILD_CATEGORY',
			});
			if (
				!guild.channels.cache.find(
					(channel) => channel.name === 'brunbot-commands',
				)
			) {
				const commandChannel = await guild.channels.create('brunbot-commands');
				commandChannel.setParent(category.id);
			}
			if (
				!guild.channels.cache.find((channel) => channel.name === 'brunbot-feed')
			) {
				const feedChannel = await guild.channels.create('brunbot-feed', {
					parent: category.id,
				});
				feedChannel.permissionOverwrites.create(
					feedChannel.guild.roles.everyone,
					{
						SEND_MESSAGES: false,
					},
				);
				const welcome = await feedChannel.send('Ici c\'est chez moi');
				welcome.channel.send(
					'https://media.tenor.com/images/b94b0b5e3a389e59bd35f52a0aa11081/tenor.gif',
				);
			}
		}
	});
};
export default guildCreate;
