//import logo from './logo.svg';
import './App.css';
import Questao01X from './components/Questao01';
import PokemonFrontBack from './components/Questao02';
import Populacao from './components/Questao03';

function App() {
  return (
    <div className="App">
      <Questao01X />
      <hr />
      <PokemonFrontBack />
      <hr />
      <Populacao />
    </div>
  );
}

export default App;
