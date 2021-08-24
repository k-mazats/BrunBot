import axios from 'axios';
const fetchGif = async () => {
	try {
		const response = await axios({
			method: 'get',
			url: `https://g.tenor.com/v1/search?key=${process.env.GIF_API}&q=you+should+shall+pass&limit=1`,
			json: true,
		});
		return response.data;
	}
	catch (err) {
		console.error(err);
	}
};
export default fetchGif;