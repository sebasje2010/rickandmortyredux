import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import CharacterList from './components/CharacterList';
import {getCharacter} from './api'
import {setCharacters as setCharactersActions} from './actions'
import logo from './statics/logo.png'
import './App.css';

function App({characters,setCharacters}) {
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

const mapStateToProps=(state)=>({
  characters:state.characters
})

const mapDispatchToProps=(dispatch)=>({
  setCharacters: (value)=>dispatch(setCharactersActions(value))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
