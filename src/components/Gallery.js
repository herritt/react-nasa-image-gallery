import React, { useState } from "react";
import { searchImages } from "../utils/NASASService";
import "./Gallery.css";

const Gallery = () => {
	const [query, setQuery] = useState("");
	const [images, setImages] = useState([]);

	const handleSearch = async () => {
		if (!query) return;
		const results = await searchImages(query);
		setImages(results);
	};

	return (
		<div className="wrapper">
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search NASA's images..."
			/>
			<button onClick={handleSearch}>Search</button>
			<div className="image-grid">
				{images.map((item) => (
					<img
						key={item.data[0].nasa_id}
						src={item.links[0].href}
						alt={item.data[0].title}
						style={{ width: "100%", padding: "10px" }}
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
