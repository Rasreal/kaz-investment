/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export default function UserInput({ onChangeFunc, userInput, errors }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Бастапқы Инвестиция</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeFunc("initialInvestment", event.target.value)
            }
          />
          {errors.initialInvestment && (
            <span className="error">{errors.initialInvestment}</span>
          )}
        </p>
        <p>
          <label>Жылдық инвестиция</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeFunc("annualInvestment", event.target.value)
            }
          />
          {errors.annualInvestment && (
            <span className="error">{errors.annualInvestment}</span>
          )}
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Болжауды кіріс</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeFunc("expectedReturn", event.target.value)
            }
          />
          {errors.expectedReturn && (
            <span className="error">{errors.expectedReturn}</span>
          )}
        </p>
        <p>
          <label>Ұзақтық</label>
          <input
            type="number"
            required
            min="1"
            value={userInput.duration}
            onChange={(event) => onChangeFunc("duration", event.target.value)}
          />
          {errors.duration && (
            <span className="error">{errors.duration}</span>
          )}
        </p>
      </div>
    </section>
  );
}
