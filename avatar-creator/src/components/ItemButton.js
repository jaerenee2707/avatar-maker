import React from 'react';

function ItemButton({ name, icon, onSelect }) {
    return (
        <div>
            <button onClick={() => onSelect(name)}>
                {icon}
            </button>
        </div>
    );
}

export default ItemButton;
