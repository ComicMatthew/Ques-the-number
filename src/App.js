import "./App.css";
import Form from "./components/Form.js";
import Randomizer from "./components/Randomizer.js";
import ListElement from "./components/ListElement.js";
import { useState, useEffect } from "react";

function App() {
  const [matches, setMatches] = useState(false);
  const [tries, setTries] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    // Check if there is a random number stored in localStorage
    const storedRandomNumber = localStorage.getItem("randomNumber");

    if (storedRandomNumber) {
      // If a random number is found, use it
      setRandomNumber(storedRandomNumber);
    } else {
      // If no random number is found, generate a new one and store it
      const newRandomNumber = Math.floor(Math.random() * 10) + 1;
      setRandomNumber(newRandomNumber);
      localStorage.setItem("randomNumber", newRandomNumber.toString());
    }
  }, [randomNumber]);

  const addNumberHandler = (value) => {
    console.log(value);

    if (value === randomNumber) {
      alert(
        `It was successfull. You managed it! Number of tries: ${
          tries.length + 1
        }`
      );
      const record =
        "THis is the right number. The number is: " + value + "!!!!";
      setTries([record, ...tries]);
      setMatches(true);
    } else if (value > randomNumber) {
      const record =
        "The Number: " + value + " is higher then the secret number";
      setTries([record, ...tries]);
      setMatches(false);
    } else {
      const record =
        "The Number: " + value + " is lower then the secret number";
      setTries([record, ...tries]);
      setMatches(false);
    }
  };

  const newGame = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
    localStorage.setItem("randomNumber", newRandomNumber.toString());
    setTries([]);
    setMatches(false);
  };

  return (
    <div className="App">
      <Form addNumberHandler={addNumberHandler} newGame={newGame} />
      <Randomizer randomNumber={randomNumber} matches={matches} />
      <ol>
        {tries.map((element) => (
          <ListElement element={element} />
        ))}
      </ol>
    </div>
  );
}

export default App;
