import React from 'react';
import './ShowSelectedPlayerData.css'

const ShowSelectedPlayerData = (props) => {
    const {name, salary, img} = props.showPlayerData
    return (
        <div className="selectPlayer">
            <div className="selectedPlayerImg">
                <img src={img} alt=""/>
            </div>
            <div>
                <strong>{name}</strong>
                <p> Salary : ${salary}</p>
            </div>
        </div>
    );
};

export default ShowSelectedPlayerData;