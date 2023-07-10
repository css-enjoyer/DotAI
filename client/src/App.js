import React, { useState } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';

function App() {
	const [showHeroes, setShowHeroes] = useState(true);
	const handleContinue = () => {
		setShowHeroes(prevShowHeroes => !prevShowHeroes);
	};

  	return (
    	<div className="App">
			<div id="side-bar">
				<h1 className="header title">DotAI: Dota Drafter</h1>
				<p>DotAI is a drafting tool for Dota 2 that assists you in selecting the optimal heroes for your team. It offers a variety of categories to choose from, allowing you to make informed decisions based on specific hero attributes and roles.</p>
				<ul id="nav">
					<li><button className="nav-button">Drafting</button></li>
					<li><button className="nav-button">Tutorial</button></li>
					<li><button className="nav-button">FAQ</button></li>
					<li><button className="nav-button">Contact</button></li>
				</ul>
			</div>
			<div id="main">
				<Categories handleContinue={handleContinue}/>
				{showHeroes && <HeroSelect />}
			</div>
    	</div>
  	);
}
export default App;
