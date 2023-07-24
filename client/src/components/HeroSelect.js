import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import { motion, AnimatePresence } from "framer-motion"

function HeroSelect({ selectedCategories }) {
	
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		fetch('https://dotai.onrender.com/heroes')
		.then(response => response.json())
		.then(data => { 
			setHeroes(data);
			console.log("Heroes successfully retrieved from the database");
		})
		.catch(error => {
			console.error(error);
		});
	}, []);
	const getHeroImageURL = (image) => {
		const baseURL = 'https://api.opendota.com';
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
			<AnimatePresence>
				{filteredHeroes.map(hero => (
					<motion.div className="hero-wrapper"
					initial={{ opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					key={hero._id}>
						<Hero name={hero.name} image={getHeroImageURL(hero.img)}/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default HeroSelect;
