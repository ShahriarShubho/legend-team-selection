import React from 'react';

const SelectedClub = (props) => {
    const players = props.playerInfo
    const totalSalary = players.reduce((sum, player) => sum + player.salary, 0);
    let selectedPlayerName = [];
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
         selectedPlayerName.push(player.name,"-$",player.salary, ", ")
    }

    return (
        <div>
            <h1>Selected Team</h1>
            <h3>Player Selected : {players.length}</h3>
            <strong>Total Budge : ${totalSalary}</strong>
            <p>Selected Player : {selectedPlayerName}</p>
        </div>
    );
};

export default SelectedClub;