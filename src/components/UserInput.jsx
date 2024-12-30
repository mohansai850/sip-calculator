export default function UserInput({ userInput, inputChangeHandler }) {
  return (
    <div className="input-group">
      <p id="user-input">
        <label>Initial Investment Amount($)</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) => inputChangeHandler(event, "initialInvestment")}
        />
      </p>
      <p id="user-input">
        <label>Annual Investment Amount($)</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) => inputChangeHandler(event, "annualInvestment")}
        />
      </p>
      <p id="user-input">
        <label>Expected Return(%)</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) => inputChangeHandler(event, "expectedReturn")}
        />
      </p>
      <p id="user-input">
        <label>SIP Duration(months)</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => inputChangeHandler(event, "duration")}
        />
      </p>
    </div>
  );
}
