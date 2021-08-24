const guildCreate = (client) => {
	client.on('guildCreate', async (guild) => {
		if (
			!guild.channels.cache.find(
				(channel) => channel.name === 'brunbot',
			)
		) {
			const category = await guild.channels.create('brunbot', {
				type: 'GUILD_CATEGORY',
			});
			if (
				!guild.channels.cache.find(
					(channel) => channel.name === 'brunbot-commands',
				)
			) {
				const commandChannel = await guild.channels.create('BrunBot-commands');
				commandChannel.setParent(category.id);
			}
			if (
				!guild.channels.cache.find((channel) => channel.name === 'brunbot-feed')
			) {
				const feedChannel = await guild.channels.create('BrunBot-feed');
				feedChannel.permissionOverwrites.create(feedChannel.guild.roles.everyone, {
					SEND_MESSAGES: false,
				});
				feedChannel.setParent(category.id);
				const welcome = await feedChannel.send('Ici c\'est chez moi');
				welcome.channel.send(
					'https://media.tenor.com/images/b94b0b5e3a389e59bd35f52a0aa11081/tenor.gif',
				);
			}
		}

	});
};
export default guildCreate;
