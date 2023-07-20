import React, { useState } from 'react';
import HeroSelect from './components/HeroSelect';
import Categories from './components/Categories';

import './styles/App.css';
import './styles/General.css';

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
					<p>Good drafting is vital for team success, forming a strong composition that synergizes well together. DotAI allows you to effortlessly filter heroes based on your enemies' strengths and weaknesses by selecting from a list of various categories.</p>
				</div>
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
