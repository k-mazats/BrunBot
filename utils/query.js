import axios from 'axios';

const query = {
	get: async (url, headers = undefined) => {
		try {
			const response = await axios({
				method: 'get',
				url: url,
				json: true,
				headers,
			});
			return response;
		}
		catch (err) {
			console.error(err);
		}
	},
	post: async (url, data, headers = undefined) => {
		try {
			const response = await axios({
				method: 'post',
				url: url,
				json: true,
				data,
				headers,
			});
			return response;
		}
		catch (err) {
			console.error(err);
		}
	},
};

export default query;
