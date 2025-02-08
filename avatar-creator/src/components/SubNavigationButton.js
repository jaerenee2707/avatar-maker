import React from 'react';
import ItemButton from './ItemButton';

function SubNavigationButton({ name, choices, selectedSubCategory, setSelectedSubCategory }) {
    const isSelected = (selectedSubCategory === name);
    function handleSelect() {
        setSelectedSubCategory(isSelected ? null : name)
    }

    return (
        <div className="sub-navigation">
            <h4 onClick={handleSelect} >{name}</h4>
            {isSelected && (
                <div className="choices-list">
                    {choices.map((choice) => (
                        <ItemButton key={choice.name} {...choice} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SubNavigationButton;
