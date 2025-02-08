import React from 'react';

function ItemButton({ name, icon, handleChoiceSelect, subCategoryName, selectedChoices }) {
    const isSelected = selectedChoices[subCategoryName] === name;
    function handleSelect() {
        console.log("Choose: ", name);
        handleChoiceSelect(subCategoryName, name);
    }
    return (
        <div>
            <button onClick={handleSelect} style={{ backgroundColor: isSelected ? 'lightblue' : 'white' }}>
                {icon}{name}
            </button>
        </div>
    );
}

export default ItemButton;
