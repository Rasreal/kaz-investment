import { useState } from "react";

export default function UserInput() {
  const [userInput, setInput] = useState({
     initialInvestment: 12000,
     annualInvestment: 1200,
     expectedReturn: 6,
     duration: 10
  });

  function handleInputChange(inputID, newInput){
     setInput(prevInputs => {
          return {
               ...prevInputs,
               [inputID] : newInput
          }
     })
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Бастапқы Инвестиция</label>
          <input type="number" required 
          value={userInput.initialInvestment}
          onChange={(event) => handleInputChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label>Жылдық инвестиция</label>
          <input type="number" required 
          value={userInput.annualInvestment}
          onChange={(event) => handleInputChange('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Болжауды кіріс</label>
          <input type="number" required 
          value={userInput.expectedReturn}
          onChange={(event) => handleInputChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
          <label>Ұзақтық</label>
          <input type="number" required 
          value={userInput.duration}
          onChange={(event) => handleInputChange('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
