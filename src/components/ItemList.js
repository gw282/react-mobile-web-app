import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// src/components/ItemList.js

const items = [
    { id: 1, name: '항목 1' },
    { id: 2, name: '항목 2' },
    { id: 3, name: '항목 3' },
];

const ItemList = () => {
    return (
        <List>
            {items.map(item => (
                <Item key={item.id}>
                    <Link to={`/detail/${item.id}`}>{item.name}</Link>
                </Item>
            ))}
        </List>
    );
};

export default ItemList;

const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Item = styled.li`
    padding: 10px;
    background: #f0f0f0;
    border-radius: 5px;
`;