import React, { useEffect, useState } from 'react';

function Hero({image, name, onSelect}) {
    const [selected, setSelected] = useState(false);
    const handleHeroSelect = () => {
        setSelected(prevSelected => !prevSelected);
        onSelect(name, !selected);
        // console.log(name + " was selected!");
    }

  	return (
    	<div className="Hero" onClick={handleHeroSelect}>
            <img src={image} alt={name} id="hero-img"></img>
            <p>{name}</p>
    	</div>
  	);
}
export default Hero;
