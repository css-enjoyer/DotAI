import { motion, AnimatePresence } from "framer-motion"

function Hero({image, name, className}) {
	const openHeroPage = () => {
		// Encode the hero name for the URL
		const encodedName = encodeURIComponent(name);
		// Generate the URL with the hero name
		const url = `https://www.dota2.com/hero/${encodedName}`;
		// Open the URL in a new tab
		window.open(url, '_blank');
	}

  	return (
		<div className={`Hero ${className}`} onClick={openHeroPage}>
			<img src={image} alt={name} id="hero-img"></img>
			<p>{name}</p>
		</div>
  	);
}
export default Hero;
