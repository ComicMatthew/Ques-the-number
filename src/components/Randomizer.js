import "./Randomizer.css";

function Randomizer(props) {
  return (
    <div className="Randomizer">
      The random number is: {props.matches ? props.randomNumber : "Unknown"}
    </div>
  );
}

export default Randomizer;
