import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import CharacterList from './components/CharacterList';
import {getCharacter} from './api'
import {setCharacters} from './actions'
import logo from './statics/logo.png'
import './App.css';

function App() {

  const characters=useSelector(state=>state.characters)
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchCharacters = async() => {
      const charactersRes= await getCharacter()
      dispatch(setCharacters(charactersRes))
    }
    fetchCharacters()
  })
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
