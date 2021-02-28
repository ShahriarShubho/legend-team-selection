import './App.css';
import Navigation from './components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import playersData from './components/fakeData/fakeData.json'
import Player from './components/Player/Player';
import SelectedClub from './components/SelectedClub/SelectedClub';

function App() {
  const [players, setPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(playersData)
  },[]);

  const [playerInfo, setPlayerInfo] = useState([]);
  const handleSelectedClub = (player) =>{
    const newPlayerInfo = [...playerInfo, player];
    setPlayerInfo(newPlayerInfo)
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="player-information">
      <h1>Choose a team from the following players</h1>
      {players.map(player =><Player players={player} key={player.id} handleSelectedClub={handleSelectedClub}></Player>)} 
      </div>
      <SelectedClub playerInfo={playerInfo}></SelectedClub>
    </div>
  );
}

export default App;
