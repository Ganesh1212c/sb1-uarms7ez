import React, { useState, useEffect } from 'react';
import Button from './Button';

interface LoanCalculatorProps {
  className?: string;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ className = '' }) => {
  const [amount, setAmount] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [duration, setDuration] = useState<number>(12);
  const [interestType, setInterestType] = useState<'simple' | 'compound'>('simple');
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value) || 1000, 1000), 500000);
    setAmount(value);
  };

  useEffect(() => {
    calculateLoan();
  }, [amount, interestRate, duration, interestType]);

  const calculateLoan = () => {
    const principal = amount;
    const ratePerYear = interestRate / 100;
    const timeInYears = duration / 12;

    if (interestType === 'simple') {
      // Simple Interest: A = P(1 + rt), where A is final amount, P is principal, r is interest rate, t is time in years
      const totalAmount = principal * (1 + ratePerYear * timeInYears);
      const interest = totalAmount - principal;
      setTotalPayment(totalAmount);
      setMonthlyPayment((principal + interest) / duration);
    } else {
      // Compound Interest (monthly): PMT = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
      // where PMT is monthly payment, P is principal, r is monthly rate, n is total number of months
      const monthlyRate = ratePerYear / 12;
      const monthlyPaymentAmount = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, duration)) / 
        (Math.pow(1 + monthlyRate, duration) - 1);
      
      setMonthlyPayment(monthlyPaymentAmount);
      setTotalPayment(monthlyPaymentAmount * duration);
    }
  };

  return (
    <div className={`bg-secondary p-8 rounded-xl ${className}`}>
      <h3 className="text-2xl font-semibold mb-6 text-white">Loan Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Interest Type</label>
          <select
            value={interestType}
            onChange={(e) => setInterestType(e.target.value as 'simple' | 'compound')}
            className="w-full bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="simple">Simple Interest</option>
            <option value="compound">Compound Interest</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Loan Amount
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1000"
              max="500000"
              value={amount}
              onChange={handleAmountChange}
              className="w-1/3 bg-secondary-dark text-white px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-2/3 h-2 bg-secondary-dark rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-secondary-dark rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Duration: {duration} months
          </label>
          <input
            type="range"
            min="1"
            max="60"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2 bg-secondary-dark rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="mt-8 p-6 bg-secondary-dark rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Monthly Payment</p>
              <p className="text-2xl font-semibold text-primary">
                ₹{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Total Payment</p>
              <p className="text-2xl font-semibold text-primary">
                ₹{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default LoanCalculator;