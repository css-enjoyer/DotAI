import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import { motion, AnimatePresence } from "framer-motion"

function HeroSelect({ selectedCategories }) {
	
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://dotai.onrender.com/heroes')
		.then(response => response.json())
		.then(data => { 
			setHeroes(data);
			setIsLoading(false);
			console.log("Heroes successfully retrieved from the database");
		})
		.catch(error => {
			setIsLoading(false);
			console.error(error);
		});
	}, []);
	const getHeroImageURL = (image) => {
		// const baseURL = 'https://api.opendota.com';
		const baseURL = 'https://cdn.cloudflare.steamstatic.com/'; // api changed base url
		return `${baseURL}${image}`;
	};

	let filteredHeroes = heroes;
	if (selectedCategories.length > 0) {
		filteredHeroes = heroes.filter(hero => {
			return selectedCategories.every(category => hero.categories.includes(category));
		});
	} 

	return (
		<div id="hero-list">
			{isLoading ? (
				// Loading screen
				<div className="loading-screen">
					<h1>Loading...</h1>
					<div class="lds-facebook"><div></div><div></div><div></div></div>
				</div>
			) : (
				// HeroSelect content
				<AnimatePresence>
				{filteredHeroes.map(hero => (
					<motion.div className="hero-wrapper"
						initial={{ opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						key={hero._id}>
						<Hero name={hero.name} image={getHeroImageURL(hero.img)} />
					</motion.div>
				))}
				</AnimatePresence>
			)}
		</div>
	  );
	  
}

export default HeroSelect;
