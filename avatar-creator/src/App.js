import React, { useState } from 'react';
import './App.css';
import MainNavigationButton from './components/MainNavigationButton';
import SubNavigationButton from './components/SubNavigationButton';
import ItemButton from './components/ItemButton';
import { categories } from './categories'

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const getLocalStore = localStorage.getItem('choices');
    const parsedLocalStore = getLocalStore ? JSON.parse(getLocalStore) : {};
    const intialChoices = categories.reduce((accumulator, category) => {
        category.subCategories.forEach(subCategory => {
            const valueRetrieved = parsedLocalStore[subCategory.name] || "None";
            accumulator[subCategory.name] = valueRetrieved;
        });
        return accumulator;
    }, {});

    const [selectedChoices, setSelectedChoices] = useState(intialChoices);


    function handleChoiceSelect(subCategoryName, choiceName) {
        setSelectedChoices({ ...selectedChoices, [subCategoryName]: choiceName });
    }

    function handleDownload() {
        console.log(selectedChoices);
        localStorage.setItem('choices', JSON.stringify(selectedChoices));
    }

    return (
        <div className="App">

            <div className="main-nav">
                {categories.map((category) => (
                    <MainNavigationButton
                        key={category.name}
                        {...category}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
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
                    <button className="action-button" id="download-button" onClick={handleDownload}>
                        Download
                    </button>
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
                    {selectedSubCategory && selectedSubCategory.choices.map((choice) => (
                        <ItemButton
                            key={choice.name}
                            {...choice}
                            subCategoryName={selectedSubCategory.name}
                            handleChoiceSelect={handleChoiceSelect}
                            selectedChoices={selectedChoices}
                        />
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
