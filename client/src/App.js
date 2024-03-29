import React, { useState, useEffect } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';
import './styles/General.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

	useEffect(() => {
		document.title = 'DotAI';
	  }, []);

	const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
			setSelectedCategories([...selectedCategories, category]);
        }
		console.log(selectedCategories);
    };

	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const handleAboutClick = () => {
		setIsAboutOpen(!isAboutOpen);
		setIsContactOpen(false); // Close Contact
	};

	const [isContactOpen, setIsContactOpen] = useState(false);
	const handleContactClick = () => {
		setIsContactOpen(!isContactOpen);
		setIsAboutOpen(false); // Close About
	};

  	return (
    	<div className="App">
			<div id="side-bar">
				<h1>DotAI <span>Dota Drafter</span></h1>
				<ul>
					<li><button onClick={handleAboutClick}>About</button></li>
					<li><button onClick={handleContactClick}>Contact</button></li>
				</ul>
			</div>
			<div id="main">
			<AnimatePresence>
				{isAboutOpen && (
					<motion.div
						initial={{ opacity: 0, zIndex: 99 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key="about">
						<About />
					</motion.div> )}
				{isContactOpen && (
					<motion.div
						initial={{ opacity: 0, zIndex: 999 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key="contact">
						<Contact />
					</motion.div>)}
				</AnimatePresence>
				<HeroSelect selectedCategories={selectedCategories}/>
				<div className="foot-note">
					<p className="disclaimer">This site is not affiliated with Valve Corporation</p>
					<p className="copyright">© 2023 DotAI</p>
				</div>
			</div>
			<div id="category-bar">
				<Categories selectedCategories={selectedCategories} onCategoryClick={handleCategoryClick}/>
			</div>
			<div id="category-display">
				<h5>Selected Categories:</h5>
				<ul>
					{selectedCategories.map((category) => (
						<li key={category}>{category}</li>
					))}
				</ul>
			</div>
    	</div>
  	);
}
export default App;
