import { Col } from 'antd';
import Searcher from './components/Searcher';
import CharacterList from './components/CharacterList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Col>
          <Searcher>
          </Searcher>
        </Col>
      </header>
      <CharacterList/>
    </div>
  );
}

export default App;
