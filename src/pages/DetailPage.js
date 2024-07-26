// src/pages/DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
const DetailPage = () => {
const { id } = useParams();
return (
    <div>
        <h1>세부 페이지</h1>
        <p>항목 {id}의 세부 정보</p>
    </div>
);
};
export default DetailPage;