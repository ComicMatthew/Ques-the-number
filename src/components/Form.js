import "./Input.css";
import { useState } from "react";

function Input(props) {
  const [selectedValue, setData] = useState();

  function inputHandler(event) {
    setData(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    props.addNumberHandler(selectedValue);
    setData("");
  }

  function newGame() {
    props.newGame();
  }

  return (
    <div>
      <button onClick={newGame}>New Game</button>
      <form onSubmit={formSubmitHandler} className="Input">
        <label>What Number it is?</label>
        <input onChange={inputHandler} value={selectedValue} />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default Input;
