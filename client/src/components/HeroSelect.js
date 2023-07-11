import React, { useEffect, useState } from 'react';
import Hero from './Hero';

function HeroSelect() {
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		fetch('https://api.opendota.com/api/heroStats')
			.then(response => response.json())
			.then(data => { 
				setHeroes(data);
		})
		.catch(error => {
		  	console.error(error);
		});
	}, []);
	const getHeroImageURL = (icon) => {
		const baseURL = 'https://api.opendota.com';
		return `${baseURL}${icon}`;
	};

  	return (
    	<div className="HeroSelect">
			<h2 className="header">Heroes</h2>
            <div id="hero-list">

				{heroes.map(hero => (
				<Hero image={getHeroImageURL(hero.img)} name={hero.localized_name} key={hero.id}/>
				))}

            </div>
    	</div>
  	);
}
export default HeroSelect;
