import React, { useState } from 'react';

function Categories({onCategoryClick, selectedCategories}) {

    const categoryList = [
        { title: 'Lanes', categories: ['Lane Sustainer', 'Lane Dominator', 'Solo Laners'] },
        { title: 'Fights', categories: ['Initiator', 'Burst', 'Escape', 'Disabler', 'Anti Mana', 'Sustainer/Healer', 'Anti Heal', 'Saver/Void', 'Highground Defense', 'Highground Offense', 'Burn Damage', 'Crowd control', 'Anti Intelligence', 'Anti Strength', 'Anti Agility', 'Anti Melee', 'Anti Ranged', 'Anti Physical', 'Anti Magic', 'Map Vision', 'BKB Disables', 'Chasedown', 'Instant Lockdown'] },
        { title: 'General', categories: ['Physical Damage', 'Magic Damage', 'Anti Push', 'Wave Clear', 'Roshan', 'Global Presence', 'Melee', 'Ranged', 'Anti Invisible', 'Anti Burst', 'Anti Evasion', 'Anti Summons', 'Anti Illusions', 'Debuffs'] }
    ];

  return (
    <ul className="categories">
        {categoryList.map((section) => (
            <React.Fragment key={section.title}>
            <div>
                <p>{section.title}</p>
                {section.categories.map((category) => (
                <li key={category} className={selectedCategories.includes(category) ? 'selected' : ''}
                onClick={() => onCategoryClick(category)}>
                    {category}
                </li>
                ))}
            </div>
            </React.Fragment>
        ))}
    </ul>
  );
}

export default Categories;
