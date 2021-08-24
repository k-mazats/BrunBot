const ready = (client) => {
	client.once('ready', () => {
		console.log('Ready!');
		client.prefix = '🥐';
	});
};

export default ready;
