/* eslint-disable react/react-in-jsx-scope */
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

import Results from "./components/Results";

function App() {
  const [userInput, setInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(inputID, newInput) {
    const numericValue = +newInput;

    if (numericValue <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [inputID]: "The value cannot be zero or negative.",
      }));
      return; // Prevents invalid state update
    }

    // Clear the error for the valid input
    setErrors((prevErrors) => ({
      ...prevErrors,
      [inputID]: null,
    }));

    setInput((prevInputs) => ({
      ...prevInputs,
      [inputID]: numericValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        onChangeFunc={handleInputChange}
        userInput={userInput}
        errors={errors}
      />
      <Results input={userInput} />
    </>
  );
}

export default App;
