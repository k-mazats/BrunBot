const test = {
	requiredArgs: ['arg1', 'arg2'],
	run: (arg1, arg2) => {
		return [arg1, arg2];
	},
	// return true si erreur gerée par la commande
	error: (args, msg) => {
		return false;
	},
};
export default test;
