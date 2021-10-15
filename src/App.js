import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import GiphyDisplay from './Components/GiphyDisplay.js';
import Button from './Components/Button';
import Title from './Components/Title';

function App() {

  const apiKey = 'LNTfX56AACsSU9nlp45ZBQRSZHkNqCx7'

  const [giphy, setGiphy] = useState(null);

  const getGiphy = async (random) => {
    const response = await fetch (
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const data = await response.json();

    setGiphy(data);
  }


  return (
    <div className="App">
      <Title />
      <Button Giphy={getGiphy}/>
      <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
