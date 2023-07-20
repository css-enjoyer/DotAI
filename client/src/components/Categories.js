import React, { useState } from 'react';

function Categories({ onCategoryClick, selectedCategories }) {
    const categoryList = [
        { title: 'LANE', categories: ['Safelane', 'Midlane', 'Offlane', 'Soft Support', 'Hard Support', 'Roamer', 'Baby Sitter', 'Lane Sustainer', 'Lane Dominator', 'Early Jungler','Solo Offlaner'] },
        { title: 'TEAMFIGHTS', categories: ['Initiator', 'Nuker', 'Disabler', 'Escape', 'Debuff', 'BKB Disabler', 'Anti Escape', 'Instant Lockdown', 'Saver', 'Burn Damage', 'Crowd Control', 'Highground Defense', 'Highground Offense', 'Support Killer', 'Tank Killer'] },
        { title: 'ATTRIBUTES', categories: ['Intelligence', 'Strength', 'Agility', 'Universal', 'Anti Intelligence', 'Anti Strength', 'Anti Agility', 'Anti Melee', 'Anti Ranged', 'Anti Physical', 'Anti Magic', 'Ranged', 'Melee'] },
        { title: 'GENERAL', categories: ['Split Push', 'Wave Clear', 'Mobile', 'Sustain', 'Anti Mana', 'Anti Push', 'Anti Heal', 'Roshan', 'Global Presence', 'Wisdom Steal', 'Anti Invi', 'Anti Burst', 'Anti Evasion', 'Anti Summons', 'Anti Illusion', 'Area Vision', 'Area Control'] },
    ];

    const [openItems, setOpenItems] = useState([]);
    const toggleDropdown = (title) => {
        setOpenItems((prevOpenItems) => {
            if (prevOpenItems.includes(title)) {
                return prevOpenItems.filter((item) => item !== title);
            } else {
                return [...prevOpenItems, title];
            }
        });
    };

    return (
        <ul className="categories">
            {categoryList.map((section) => (
                <React.Fragment key={section.title}>
                <div>
                    <p onClick={() => toggleDropdown(section.title)}>
                        {section.title}
                    </p>
                    {openItems.includes(section.title) && (
                        section.categories.map((category) => (
                            <li
                            key={category}
                            className={selectedCategories.includes(category) ? 'selected' : ''}
                            onClick={() => onCategoryClick(category)}>
                            {category}
                            </li>
                        ))
                    )}
                </div>
                </React.Fragment>
            ))}
        </ul>
    );
}

export default Categories;
