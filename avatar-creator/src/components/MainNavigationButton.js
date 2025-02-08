import React, { useState } from 'react';
import SubNavigationButton from './SubNavigationButton';

function MainNavigationButton({ icon, name, subCategories, selectedCategory, setSelectedCategory }) {
    const isSelected = selectedCategory && (selectedCategory.name === name);
    function handleSelect() {
        setSelectedCategory(isSelected ? null : { name, subCategories })
    }
    return (
        <div>
            <button onClick={handleSelect}>
                {icon} {name}
            </button>
        </div>
    );
}

export default MainNavigationButton;
