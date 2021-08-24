import ready from './ready.js';
import guildCreate from './guildCreate.js';
import messageCreate from './messageCreate.js';
const events = [ready, guildCreate, messageCreate];

export default events;
