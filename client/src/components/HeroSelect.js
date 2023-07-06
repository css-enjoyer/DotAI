import React, { useEffect, useState } from 'react';
import Hero from './Hero';

function HeroSelect({onBgClick, onHeroSelect}) {
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		fetch('https://api.opendota.com/api/heroStats')
			.then(response => response.json())
			.then(data => { 
				setHeroes(data);
				// console.log(data); 
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
    	<div className="HeroSelect" onClick={onBgClick}>
			<h2 className="header">Select a Hero</h2>
            <div id="hero-list">

				{heroes.map(hero => (
				<Hero image={getHeroImageURL(hero.img)} name={hero.localized_name} key={hero.id} onSelect={onHeroSelect}/>
				))}

            </div>
    	</div>
  	);
}
export default HeroSelect;
