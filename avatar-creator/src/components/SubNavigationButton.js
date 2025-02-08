import React from 'react';
import ItemButton from './ItemButton';

function SubNavigationButton({ name, choices, selectedSubCategory, setSelectedSubCategory }) {
    const isSelected = selectedSubCategory && (selectedSubCategory.name === name);
    function handleSelect() {
        setSelectedSubCategory(isSelected ? null : { name, choices })
    }

    return (
        <div className="sub-navigation">
            <h4 onClick={handleSelect} >
                {name}
            </h4>
        </div>
    );
}

export default SubNavigationButton;
