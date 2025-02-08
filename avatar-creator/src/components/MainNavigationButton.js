import React from 'react';

function MainNavigationButton({ icon, name, subCategories, selectedCategory, setSelectedCategory, setSelectedSubCategory }) {
    const isSelected = selectedCategory && (selectedCategory.name === name);

    function handleSelect() {
        const newCategory = (isSelected ? null : { name, subCategories }); //if already selected, deselect
        setSelectedCategory(newCategory);
        
        if (newCategory) {
            const firstSubCategory = newCategory.subCategories[0];
            setSelectedSubCategory(firstSubCategory);
        } else {
            setSelectedSubCategory(null);
        }
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
