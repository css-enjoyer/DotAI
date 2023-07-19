import React, { useState } from 'react';

function Categories({onCategoryClick, selectedCategories}) {

    const categoryList = [
        { title: 'Lane', categories: ['Safelane','Midlane','Offlane','Soft Support','Hard Support','Roamer','Baby Sitter','Lane Sustainer', 'Lane Dominator', 'Solo Laner'] },
        { title: 'Teamfights', categories: ['Initiator', 'Nuker', 'Disabler', 'Escape', 'Debuff', 'BKB Disabler', 'Anti Escape', 'Instant Lockdown', 'Saver', 'Burn Damage', 'Crowd Control', 'Highground Defense', 'Highground Offense', 'Support Killer'] },
        { title: 'Attributes', categories: ['Intelligence', 'Strength', 'Agility', 'Anti Intelligence', 'Anti Strength', 'Anti Agility', 'Anti Melee', 'Anti Ranged', 'Anti Physical', 'Anti Magic', 'Ranged', 'Melee'] },
        { title: 'General', categories: ['Split Push', 'Wave Clear', 'Mobile', 'Sustain', 'Anti Mana', 'Anti Push', 'Anti Heal', 'Roshan', 'Global Presence', 'Anti Invi', 'Anti Burst', 'Anti Evasion', 'Anti Summons', 'Anti Illusion', 'Area Vision', 'Area Control'] },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ul className="categories">
            {categoryList.map((section) => (
                <React.Fragment key={section.title}>
                <div>
                    <p onClick={toggleDropdown}>{section.title}</p>
                    {isOpen && (    
                        section.categories.map((category) => (
                            <li key={category} className={selectedCategories.includes(category) ? 'selected' : ''}
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
