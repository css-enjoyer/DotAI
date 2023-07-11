import React, { useState } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';

function App() {

  	return (
    	<div className="App">
			<div id="side-bar">
				<div>
					<h1 className="header title">DotAI: Dota Drafter</h1>
					<p>Good drafting is vital for team success, forming a strong composition that synergizes well together. DotAI is an intuitive tool that effortlessly filter heroes based on your enemies' strengths and weaknesses.</p>
				</div>
				<ul id="nav">
					<li><button className="nav-button">Drafting</button></li>
					<li><button className="nav-button">Tutorial</button></li>
					<li><button className="nav-button">FAQ</button></li>
					<li><button className="nav-button">Contact</button></li>
				</ul>
			</div>
			<div id="main">
				<HeroSelect/>
			</div>
			<div id="category-bar">
				<Categories/>
			</div>
    	</div>
  	);
}
export default App;
