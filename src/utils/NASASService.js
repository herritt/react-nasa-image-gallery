import axios from "axios";

const BASE_URL = "https://images-api.nasa.gov";

export const searchImages = async (query) => {
	try {
		const response = await axios.get(`${BASE_URL}/search`, {
			params: {
				q: query,
				media_type: "image",
			},
		});
		return response.data.collection.items;
	} catch (error) {
		console.error("Error fetching from NASA's API");
		return [];
	}
};
