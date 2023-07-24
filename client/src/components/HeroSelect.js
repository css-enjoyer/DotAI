import React, { useEffect, useState } from 'react';
import Hero from './Hero';

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
		<div className="HeroSelect">
			<div id="hero-list">
				{filteredHeroes.map(hero => (
					<Hero name={hero.name} image={getHeroImageURL(hero.img)} key={hero._id}/>
				))}
			</div>
		</div>
	);
}

export default HeroSelect;
