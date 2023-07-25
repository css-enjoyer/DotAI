import React, { useState, useEffect } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';
import './styles/General.css';

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
	  
  	return (
    	<div className="App">
			<div id="side-bar">
				<h1>DotAI <span>Dota Drafter</span></h1>
				<ul>
					<li><button>About</button></li>
					<li><button>Contact</button></li>
				</ul>
			</div>
			<div id="main">
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
