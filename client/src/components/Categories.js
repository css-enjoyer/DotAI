import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineDown } from "react-icons/ai";


function Categories({ onCategoryClick, selectedCategories }) {
    const categoryList = [
        { title: 'LANING', categories: ['Safelane', 'Midlane', 'Offlane', 'Soft Support', 'Hard Support', 'Roamer', 'Baby Sitter', 'Lane Sustainer', 'Lane Dominator', 'Early Jungler','Solo Offlaner'] },
        { title: 'TEAMFIGHT', categories: ['Initiator', 'Nuker', 'Disabler', 'Escape', 'Dispel', 'BKB Disabler', 'Anti Escape', 'Instant Lockdown', 'Saver', 'Burn Damage', 'Crowd Control', 'Highground Defense', 'Highground Offense', 'Support Killer', 'Tank Killer'] },
        { title: 'ATTRIBUTES', categories: ['Intelligence', 'Strength', 'Agility', 'Universal', 'Melee', 'Ranged', 'Anti Melee', 'Anti Ranged', 'Anti Physical', 'Anti Magic', 'Anti Intelligence', 'Anti Strength', 'Anti Agility'] },
        { title: 'GENERAL', categories: ['Mobile', 'Wave Clear', 'Split Push', 'Sustain', 'Roshan', 'Global Presence', 'Wisdom Steal', 'Area Vision', 'Area Control', 'Anti Mana', 'Anti Push', 'Anti Heal', 'Anti Burst', 'Anti Illusion'] },
    ];

    const [openItems, setOpenItems] = useState([]);
    const [selectedCounts, setSelectedCounts] = useState({});

    const toggleDropdown = (title) => {
        setOpenItems((prevOpenItems) => {
            if (prevOpenItems.includes(title)) {
                return prevOpenItems.filter((item) => item !== title);
            } else {
                return [...prevOpenItems, title];
            }
        });
    };

    const handleCategoryClick = (category, title) => {
        onCategoryClick(category);
        setSelectedCounts((prevSelectedCounts) => {
            const count = prevSelectedCounts[title] || 0;
            return { ...prevSelectedCounts, [title]: selectedCategories.includes(category) ? count - 1 : count + 1 };
        });
    };

    return (
        <ul className="categories">
            {categoryList.map((section) => (
                <React.Fragment key={section.title}>
                    <div>
                        <p className={selectedCounts[section.title] > 0 ? 'active' : ''}
                        onClick={() => toggleDropdown(section.title)}>
                            <AiOutlineDown className="icon"></AiOutlineDown>
                            {section.title} 
                            <span>
                                ({selectedCounts[section.title] || 0}/{section.categories.length})
                            </span>    
                        </p>
                        <AnimatePresence>
                            {openItems.includes(section.title) && (
                                section.categories.map((category) => (
                                    <motion.li key={category}
                                        className={selectedCategories.includes(category) ? 'selected' : ''}
                                        onClick={() => handleCategoryClick(category, section.title)}
                                        initial={{ y: "-100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}>
                                        {category}
                                    </motion.li>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </React.Fragment>
            ))}
        </ul>
    );
}

export default Categories;
