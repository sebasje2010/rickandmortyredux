import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import CharacterList from './components/CharacterList';
import {getCharacter} from './api'
import {setCharacters, setLoading} from './actions'
import logo from './static/logo.png'
import './App.css';

function App() {
  const characters=useSelector(state=>state.get('characters')).toJS()
  const loading=useSelector(state=>state.get('loading'))
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchCharacters = async() => {
      dispatch(setLoading(true))
      const charactersRes= await getCharacter()
      dispatch(setCharacters(charactersRes))
      dispatch(setLoading(false))
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
      <div className='App-body'>
        {loading?(<Spin spinning size='large'/>):(<CharacterList characters={characters}/>)}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
