import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const INITIAL_VALUES = {
  initialInvestment: 0,
  annualInvestment: 100,
  expectedReturn: 12,
  duration: 12,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);
  const isValidDuration = userInput.duration > 0;

  function inputChangeHandler(event, inputName) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputName]: +event.target.value,
    }));
  }

  return (
    <>
      <UserInput
        userInput={userInput}
        inputChangeHandler={inputChangeHandler}
      />
      {isValidDuration ? (
        <Results userInput={userInput} />
      ) : (
        <p>Please enter a duration that is greater than zero.</p>
      )}
    </>
  );
}

export default App;
