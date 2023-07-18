import React, { useState } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';

function App() {
	const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
			setSelectedCategories([...selectedCategories, category]);
        }
		console.log(selectedCategories);
    };
	  
  	return (
    	<div className="App">
			<div id="side-bar">
				<div>
					<h1 className="header title">DotAI: Dota Drafter</h1>
					<p>Good drafting is vital for team success, forming a strong composition that synergizes well together. DotAI is an intuitive tool that effortlessly filter heroes based on your enemies' strengths and weaknesses.</p>
				</div>
				{/* <ul id="nav">
					<li><button className="nav-button">Drafting</button></li>
					<li><button className="nav-button">Tutorial</button></li>
					<li><button className="nav-button">FAQ</button></li>
					<li><button className="nav-button">Contact</button></li>
				</ul> */}
			</div>
			<div id="main">
				<HeroSelect selectedCategories={selectedCategories}/>
			</div>
			<div id="category-bar">
				<Categories selectedCategories={selectedCategories} onCategoryClick={handleCategoryClick}/>
			</div>
    	</div>
  	);
}
export default App;
