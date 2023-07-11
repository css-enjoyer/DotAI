import React, { useState } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';

function App() {
	const [showHeroes, setShowHeroes] = useState(false);
	const handleContinue = () => {
		setShowHeroes(prevShowHeroes => !prevShowHeroes);
	};

  	return (
    	<div className="App">
			<div id="side-bar">
				<div>
					<h1 className="header title">DotAI: Dota Drafter</h1>
					<p>Good drafting is vital for team success, forming a strong composition that synergizes well together. DotAI enhances your drafting process by offering an intuitive tool to effortlessly filter heroes based on your enemies' strengths and weaknesses.</p>
				</div>
				<ul id="nav">
					<li><button className="nav-button">Drafting</button></li>
					<li><button className="nav-button">Tutorial</button></li>
					<li><button className="nav-button">FAQ</button></li>
					<li><button className="nav-button">Contact</button></li>
				</ul>
			</div>
			<div id="main">
				<Categories handleContinue={handleContinue}/>
				{showHeroes && <HeroSelect handleContinue={handleContinue}/>}
			</div>
    	</div>
  	);
}
export default App;
