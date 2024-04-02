
import './App.css';
import arrayPhrases from './utils/phrases.json';
import getRandom from './services/getRandom';
import { useState } from 'react';
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase';


const arrayImages = [1, 2, 3, 4];

function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases));

  const image = getRandom(arrayImages);

  const objStyles = {
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`,
  }

  return (
<div className="App" style={objStyles}>
  <h1 className='app__title'>Galletas de la fortuna</h1>
  <ButtonPhrase
    setPhrases={setPhrase}/>
    <ShowPhrase
    phrase={phrase}/>
</div>
  )
}

export default App;
