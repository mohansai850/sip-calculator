export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];

  let totalValue = initialInvestment;

  // for (let i = 0; i < duration; i++) {
  //   const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //   investmentValue += interestEarnedInYear + annualInvestment;
  //   annualData.push({
  //     year: i + 1, // year identifier
  //     interest: interestEarnedInYear, // the amount of interest earned in this year
  //     valueEndOfYear: investmentValue, // investment value at end of year
  //     annualInvestment: annualInvestment, // investment added in this year
  //   });
  // }

  for (let i = 1; i <= duration; i++) {
    const interestEarnedInYear =
      (totalValue + annualInvestment) * (expectedReturn / 100);

    totalValue = totalValue + interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i,
      sipAmount: annualInvestment,
      interestEarnedInYear, // the amount of interest earned in this year
      totalValue,
      // totalCapitalInvested: (i + 1) * annualInvestment,
      // valueEndOfYear: investmentValue, // investment value at end of year
      // annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
