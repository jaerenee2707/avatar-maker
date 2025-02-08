import React from 'react';

function ItemButton({ name, icon, onSelect }) {
    function handleSelect() {
        console.log("Choose: ", name);
    }
    return (
        <div>
            <button onClick={handleSelect}>
                {icon}
            </button>
        </div>
    );
}

export default ItemButton;
