import React from 'react';
import '../scss/Home/HomeThreeColumns.scss'


const HomeThreeColumns = () => (
    <div className="columns_section-second" title="section2" id="section2">
        <div className="columns_first-column">
            <h1>10</h1>
            <h2>Oddanych worków</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni omnis perferendis provident repellat rerum soluta.</p>
        </div>
        <div className="columns_second-column">
            <h1>5</h1>
            <h2>Wspartych akcji</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni omnis perferendis provident repellat rerum soluta.</p>
        </div>
        <div className="columns_third-column">
            <h1>7</h1>
            <h2>Zorganizowanych zbiórek </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni omnis perferendis provident repellat rerum soluta.</p>
        </div>
    </div>
);
export {HomeThreeColumns}