import { Col } from 'antd';
import Searcher from './components/Searcher';
import CharacterList from './components/CharacterList';
import logo from './statics/logo.png'
import './App.css';
import { useEffect, useState } from 'react';
import {getCharacter} from './api'

function App() {
  const [characters,setCharacters]=useState([])
  useEffect(()=>{
    const fetchCharacters = async() => {
      const charactersRes= await getCharacter()
      setCharacters(charactersRes)
    }
    fetchCharacters()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Col push={1}>
        <img height={50} src={logo} alt='Rick and Morty Browser'></img>
        </Col>
        <Col pull={1}>
          <Searcher>
          </Searcher>
        </Col>
      </header>
      <CharacterList characters={characters}/>
      <footer></footer>
    </div>
  );
}


export default App;
