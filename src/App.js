import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector,useDispatch, shallowEqual } from 'react-redux';
import {Searcher} from './components/Searcher';
import CharacterList from './components/CharacterList';
import logo from './static/logo.png'
import './App.css';
import { fetchCharacters } from './slices/dataSlice';

function App() {
  const characters=useSelector((state)=>state.data.charactersFiltered,shallowEqual)
  const loading=useSelector((state)=>state.ui.loading)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchCharacters())
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
