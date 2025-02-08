import React, { useState } from 'react';
import './App.css';
import MainNavigationButton from './components/MainNavigationButton';

function App() {

    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const categories = [{
        name: 'Face',
        icon: '👤',
        subCategories: [
            {
                name: 'Nose',
                choices: [{ name: 'Small', icon: '👃', onSelect: () => { } }, { name: 'Large', icon: '🐽', onSelect: () => { } }],
            },
            {
                name: 'Eyes',
                choices: [{ name: 'Blue', icon: '👁', onSelect: () => { } }, { name: 'Brown', icon: '👀', onSelect: () => { } }],
            },
            {
                name: 'Mouth',
                choices: [{ name: 'Smile', icon: '👄', onSelect: () => { } }, { name: 'Frown', icon: '🫦', onSelect: () => { } }],
            },
            {
                name: 'Skin Color',
                choices: [
                    { name: 'Light', icon: '🤍', onSelect: () => { } },
                    { name: 'Dark', icon: '🖤', onSelect: () => { } },
                ],
            },
        ],
    }];

    return (
        <div className="App">
            <div className="sidebar">
                {categories.map((category) => (
                    <MainNavigationButton
                        key={category.name}
                        {...category}
                        selectedSubCategory={selectedSubCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                    />
                ))}
            </div>
            <div className="avatar-preview">
                preview
            </div>
        </div>
    );
}

export default App;
