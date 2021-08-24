const defaultError = (args, requiredArgs, msg) => {
	args.length > 0
		? msg.reply(
			`La commande attendait ${requiredArgs.length} arguments mais n'en as reçu que ${args.length}.`,
		)
		: msg.reply(
			`La commande attendait ${requiredArgs.length} arguments mais n'en as pas reçu.`,
		);
};
export default defaultError;
