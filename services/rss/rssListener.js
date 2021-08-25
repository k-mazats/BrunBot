// import ListenerModule from 'ListenerRSS';
// const ListenerRss = ListenerModule.ListenerRss;

import guildConfig from '../../utils/guildConfig.js';

const rssListener = {
	initListener: async (url, guildId) => {
		// const listener = new ListenerRss({
		// 	address: 'fake.rss.service',
		// });
		await guildConfig.editConfig(guildId, 'rss', url, url);
		// return listener;
	},
};

export default rssListener;
