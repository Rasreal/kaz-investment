/* eslint-disable react/react-in-jsx-scope */
import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvest =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <th>Жыл / Year</th>
        <th>Инвестиция құны / Investment value</th>
        <th>Пайыздық мөлшерлеме (жылдық) / Interest</th>
        <th>Жалпы пайыздық табыс / Total Interest</th>
        <th>Инвестицияланған капитал / Invested capital</th>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvest;
          const totalAmountInvest = yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
               <yd>{yearData.year}</yd>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
