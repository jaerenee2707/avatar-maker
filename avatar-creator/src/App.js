import React, { useState } from 'react';
import './App.css';
import MainNavigationButton from './components/MainNavigationButton';
import SubNavigationButton from './components/SubNavigationButton';
import ItemButton from './components/ItemButton';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const categories = [{
        name: 'Face',
        icon: '👤',
        subCategories: [
            {
                name: 'Nose',
                choices: [{ name: 'Small', icon: '👃', onSelect: () => { } }, { name: 'Large', icon: '👃', onSelect: () => { } }],
            },
            {
                name: 'Eyes',
                choices: [{ name: 'Blue', icon: '👁', onSelect: () => { } }, { name: 'Brown', icon: '👁', onSelect: () => { } }],
            },
            {
                name: 'Mouth',
                choices: [{ name: 'Smile', icon: '👄', onSelect: () => { } }, { name: 'Frown', icon: '👄', onSelect: () => { } }],
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
            <div className="main-nav">
                {categories.map((category) => (
                    <MainNavigationButton
                        key={category.name}
                        {...category}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                ))}
            </div>
            <div className="middle-section">
                <div className="avatar-preview">
                    <div className="placeholder">Avatar Preview</div>
                </div>
                <input type="text" placeholder="Enter name" />

                <div className="action-buttons">
                    <button className="action-button">Restart</button>
                    <button className="action-button" id="download-button">Download</button>
                    <button className="action-button">Randomize</button>
                </div>
            </div>

            <div className="sub-nav">
                <div className="sub-nav-buttons">
                    {selectedCategory && selectedCategory.subCategories.map((sub) => (
                        <div className="sub-nav-button">
                        <SubNavigationButton
                            key={sub.name}
                            {...sub}
                            selectedSubCategory={selectedSubCategory}
                            setSelectedSubCategory={setSelectedSubCategory}
                        />
                    </div>
                ))}
                </div>
                <div className="item-display">
                    {selectedCategory && selectedSubCategory && selectedSubCategory.choices.map((choice) => (
                        <ItemButton key={choice.name} {...choice} />
                    ))}
                </div>

                <div className="color-selector">
                    <div className="placeholder">Color Selector</div>
                </div>
            </div>
        </div>
    );
}

export default App;
