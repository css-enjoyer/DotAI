import React, { useEffect, useState } from 'react';
import Hero from './Hero';

function HeroSelect({ selectedCategories }) {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/heroes')
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

	// let filteredHeroes = heroes;
	// if (selectedCategories.length > 0) {
	// 	filteredHeroes = heroes.filter(hero => {
	// 		return selectedCategories.some(category => hero.categories.includes(category));
	// 	});
	// } 

	return (
		<div className="HeroSelect">
			<div id="hero-list">
				{heroes.map(hero => (
					<Hero name={hero.name} image={getHeroImageURL(hero.img)} key={hero._id}
					className={!selectedCategories.length || hero.categories.some(category => selectedCategories.includes(category)) ? '' : 'invisible'}/>
				))}
			</div>
		</div>
	);
}

export default HeroSelect;
