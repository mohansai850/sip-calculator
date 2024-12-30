import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  // console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>SIP Amount</th>
          <th>Expected Return</th>
          <th>Total Value</th>
          {/* <th>Expected Returns for the Term</th>
          <th>Expected Total Returns</th>
          <th>Invested Capital</th> */}
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearResult) => {
          const totalInterest =
            yearResult.valueEndOfYear -
            yearResult.annualInvestment * yearResult.year -
            userInput.initialInvestment;

          const totalCapital = yearResult.valueEndOfYear - totalInterest;
          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.sipAmount)}</td>
              <td>{formatter.format(yearResult.interestEarnedInYear)}</td>
              <td>{formatter.format(yearResult.totalValue)}</td>
              {/* <td>{formatter.format(yearResult.totalCapitalInvested)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalCapital)}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
