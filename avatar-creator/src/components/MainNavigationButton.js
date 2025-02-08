import React, { useState } from 'react';
import SubNavigationButton from './SubNavigationButton';

function MainNavigationButton({ icon, name, subCategories, selectedSubCategory, setSelectedSubCategory }) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>
                {icon} {name}
            </button>
            {isVisible && (
                <div className="sub-category-list">
                    {subCategories.map((sub) => (
                        <SubNavigationButton
                            key={sub.name}
                            {...sub}
                            selectedSubCategory={selectedSubCategory}
                            setSelectedSubCategory={setSelectedSubCategory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MainNavigationButton;
