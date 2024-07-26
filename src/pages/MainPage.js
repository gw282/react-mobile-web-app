import React from 'react';
import ItemList from '../components/ItemList';

// src/pages/MainPage.js

const MainPage = () => {
    // Example data for the item list
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return (
        <div>
            <h1>메인 페이지</h1>
            <ItemList items={items} />
        </div>
    );
};

export default MainPage;