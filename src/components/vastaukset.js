import React, { useState } from 'react';
import '../styles/vastaukset.css'
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckAnswer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-answers');
      const answers = response.data.map(answer => answer.toLowerCase());

      if (answers.includes(userInput.toLowerCase())) {
        setMessage('Oikein! Hyvää Joulua!');
      } else {
        setMessage('Väärin. Yritä uudelleen tai lisää omasi!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAnswer = async () => {
    try {
      await axios.post('http://localhost:3000/add-answer', { vastaus: userInput });
      setMessage('Vastaus lisätty!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <h1>Mikä kuuluu Jouluun?</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      /><br/>
      <button onClick={handleCheckAnswer}>Tarkista vastaus</button><br/>
      <button onClick={handleAddAnswer}>Lisää vastaus</button>
      <p>{message}</p>
    </div>
  );
}

export default App;