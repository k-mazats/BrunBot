import fs from 'fs';
import Keyv from 'keyv';
import { KeyvFile } from 'keyv-file';
import defaultConfig from '../configs/default.js';

const guildConfig = {
	initConfig: async (guildId) => {
		if (!fs.existsSync(`./configs/${guildId}.json`)) {
			const config = new Keyv({
				store: new KeyvFile({
					filename: `./configs/${guildId}.json`,
					writeDelay: 100,
					encode: JSON.stringify,
					decode: JSON.parse,
				}),
			});
			config.set('config', defaultConfig);
		}
	},
	editConfig: async (guildId, service, option, value) => {
		const config = new Keyv({
			store: new KeyvFile({
				filename: `./configs/${guildId}.json`,
				writeDelay: 100,
				encode: JSON.stringify,
				decode: JSON.parse,
			}),
		});
		const localConfig = await config.get('config');
		const newConfig = { ...localConfig };
		if (!localConfig[service]) {
			newConfig[service] = {};
			config.set('config', newConfig);
		}

		newConfig[service][option] = value;
		config.set('config', newConfig);
	},
	getConfig: async (guildId, service) => {
		const config = new Keyv({
			store: new KeyvFile({
				filename: `./configs/${guildId}.json`,
				writeDelay: 100,
				encode: JSON.stringify,
				decode: JSON.parse,
			}),
		});
		const localConfig = await config.get('config');
		return localConfig[service];
	},
};

export default guildConfig;
