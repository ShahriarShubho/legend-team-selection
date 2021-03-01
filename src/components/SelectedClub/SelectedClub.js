import React from 'react';
import ShowSelectedPlayerData from '../ShowSelectedPlayerData/ShowSelectedPlayerData';
import './SelectedClub.css'
const SelectedClub = (props) => {
    const players = props.playerInfo

    //This code for remove duplicate player for team
        let uniquePlayers = [];
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            const index = uniquePlayers.indexOf(player);
            if(index ===-1){
                uniquePlayers.push(player)
            }         
        }

    const totalSalary = uniquePlayers.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div className="selected-player-div">
            <h1>Selected Team</h1>
            <h3>Player Selected : {uniquePlayers.length}</h3>
            <h5>Total Budge : ${totalSalary}</h5> <br/>
            <h4>Selected Player List :</h4>
            {uniquePlayers.map(showPlayer =><ShowSelectedPlayerData showPlayerData={showPlayer} key={showPlayer.id}></ShowSelectedPlayerData> )}           
        </div>
    );
};

export default SelectedClub;