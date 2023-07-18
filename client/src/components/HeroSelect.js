import React, { useEffect, useState } from 'react';
import Hero from './Hero';

function HeroSelect() {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/heroes') // Update the URL to point to your backend endpoint
			.then(response => response.json())
			.then(data => { 
				setHeroes(data);
				console.log("Heroes sucessfully retrieved from database");
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	const getHeroImageURL = (image) => {
		const baseURL = 'https://api.opendota.com';
		return `${baseURL}${image}`;
	};

	return (
		<div className="HeroSelect">
			<div id="hero-list">
				{heroes.map(hero => (
					<Hero name={hero.name} image={getHeroImageURL(hero.img)} key={hero._id} />
				))}
			</div>
		</div>
	);
}
export default HeroSelect;

