import React from 'react';
import ShowSelectedPlayerData from '../ShowSelectedPlayerData/ShowSelectedPlayerData';
import './SelectedClub.css'
const SelectedClub = (props) => {
    const players = props.playerInfo
    const totalSalary = players.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div className="selected-player-div">
            <h1>Selected Team</h1>
            <h3>Player Selected : {players.length}</h3>
            <h5>Total Budge : ${totalSalary}</h5> <br/>
            <h4>Selected Player List :</h4>
            {players.map(showPlayer =><ShowSelectedPlayerData showPlayerData={showPlayer} key={showPlayer.id}></ShowSelectedPlayerData> )}
            
        </div>
    );
};

export default SelectedClub;