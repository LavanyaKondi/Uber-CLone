import React, { useState } from 'react';
import './FinancialReport.css';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const FinancialReport = () => {
  // Initial state for financial data
  const [financials, setFinancials] = useState([
    // Month 1
    { id: 1, type: 'income', description: 'Ride income', amount: 5500, date: '2024-07-01' },
    { id: 2, type: 'expense', description: 'Fuel cost', amount: 1000, date: '2024-07-02' },
    { id: 3, type: 'payment', description: 'Driver payment', amount: 2000, date: '2024-07-03' },
    { id: 4, type: 'income', description: 'Ride income', amount: 6000, date: '2024-07-15' },
    { id: 5, type: 'expense', description: 'Fuel cost', amount: 1200, date: '2024-07-16' },
    { id: 6, type: 'payment', description: 'Driver payment', amount: 2100, date: '2024-07-17' },
    // Month 2
    { id: 7, type: 'income', description: 'Ride income', amount: 5000, date: '2024-08-01' },
    { id: 8, type: 'expense', description: 'Fuel cost', amount: 900, date: '2024-08-02' },
    { id: 9, type: 'payment', description: 'Driver payment', amount: 2200, date: '2024-08-03' },
    { id: 10, type: 'income', description: 'Ride income', amount: 6500, date: '2024-08-15' },
    { id: 11, type: 'expense', description: 'Fuel cost', amount: 1100, date: '2024-08-16' },
    { id: 12, type: 'payment', description: 'Driver payment', amount: 2300, date: '2024-08-17' },
    // Month 3
    { id: 13, type: 'income', description: 'Ride income', amount: 5800, date: '2024-09-01' },
    { id: 14, type: 'expense', description: 'Fuel cost', amount: 950, date: '2024-09-02' },
    { id: 15, type: 'payment', description: 'Driver payment', amount: 2250, date: '2024-09-03' },
    { id: 16, type: 'income', description: 'Ride income', amount: 6200, date: '2024-09-15' },
    { id: 17, type: 'expense', description: 'Fuel cost', amount: 1150, date: '2024-09-16' },
    { id: 18, type: 'payment', description: 'Driver payment', amount: 2350, date: '2024-09-17' },
  ]);

  // Function to calculate totals for each month
  const calculateMonthlyTotals = (month) => {
    let totalIncome = 0;
    let totalExpense = 0;
    let totalPayment = 0;

    financials.forEach((item) => {
      const itemMonth = new Date(item.date).getMonth() + 1;
      if (itemMonth === month) {
        if (item.type === 'income') {
          totalIncome += item.amount;
        } else if (item.type === 'expense') {
          totalExpense += item.amount;
        } else if (item.type === 'payment') {
          totalPayment += item.amount;
        }
      }
    });

    return { totalIncome, totalExpense, totalPayment, profit: totalIncome - (totalExpense + totalPayment) };
  };

  const month1Totals = calculateMonthlyTotals(7); // July
  const month2Totals = calculateMonthlyTotals(8); // August
  const month3Totals = calculateMonthlyTotals(9); // September

  // Prepare data for charts
  const chartData = [
    { name: 'Income', month1: month1Totals.totalIncome, month2: month2Totals.totalIncome, month3: month3Totals.totalIncome },
    { name: 'Expense', month1: month1Totals.totalExpense, month2: month2Totals.totalExpense, month3: month3Totals.totalExpense },
    { name: 'Payment', month1: month1Totals.totalPayment, month2: month2Totals.totalPayment, month3: month3Totals.totalPayment },
    { name: 'Profit', month1: month1Totals.profit, month2: month2Totals.profit, month3: month3Totals.profit },
  ];

  return (
    <>
      <div className="financial-report">
        <h1>Financial Report</h1>

        <section>
          <h2>Overview</h2>
          <div className="totals">
            <div className="cube">
              <h3>July</h3>
              <p><strong>Income:</strong> ${month1Totals.totalIncome}</p>
              <p><strong>Expenses:</strong> ${month1Totals.totalExpense}</p>
              <p><strong>Salaries:</strong> ${month1Totals.totalPayment}</p>
              <p><strong>Profit:</strong> ${month1Totals.profit}</p>
            </div>
            <div className="cube">
              <h3>August</h3>
              <p><strong>Income:</strong> ${month2Totals.totalIncome}</p>
              <p><strong>Expenses:</strong> ${month2Totals.totalExpense}</p>
              <p><strong>Salaries:</strong> ${month2Totals.totalPayment}</p>
              <p><strong>Profit:</strong> ${month2Totals.profit}</p>
            </div>
            <div className="cube">
              <h3>September</h3>
              <p><strong>Income:</strong> ${month3Totals.totalIncome}</p>
              <p><strong>Expenses:</strong> ${month3Totals.totalExpense}</p>
              <p><strong>Salaries:</strong> ${month3Totals.totalPayment}</p>
              <p><strong>Profit:</strong> ${month3Totals.profit}</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Details</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Expenses Report</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {financials.map((item) => (
                <tr key={item.id} className={item.type}>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>${item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Total Report</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Month Start</th>
                <th>Month End</th>
                <th>Fuel </th>
                <th>Driver Salaries</th>
                <th>Total Profit</th>
                <th>Total Expenses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>July</td>
                <td>$0</td>
                <td>${month1Totals.totalIncome}</td>
                <td>${month1Totals.totalExpense}</td>
                <td>${month1Totals.totalPayment}</td>
                <td>${month1Totals.profit}</td>
                <td>${month1Totals.totalExpense + month1Totals.totalPayment}</td>
              </tr>
              <tr>
                <td>August</td>
                <td>${month1Totals.totalIncome}</td>
                <td>${month2Totals.totalIncome}</td>
                <td>${month2Totals.totalExpense}</td>
                <td>${month2Totals.totalPayment}</td>
                <td>${month2Totals.profit}</td>
                <td>${month2Totals.totalExpense + month2Totals.totalPayment}</td>
              </tr>
              <tr>
                <td>September</td>
                <td>${month2Totals.totalIncome}</td>
                <td>${month3Totals.totalIncome}</td>
                <td>${month3Totals.totalExpense}</td>
                <td>${month3Totals.totalPayment}</td>
                <td>${month3Totals.profit}</td>
                <td>${month3Totals.totalExpense + month3Totals.totalPayment}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="charts-container">
          <div className="chart-box">
            <h3>Pie Chart</h3>
            <PieChart width={450} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={[
                  { name: 'Income', value: month1Totals.totalIncome + month2Totals.totalIncome + month3Totals.totalIncome },
                  { name: 'Expense', value: month1Totals.totalExpense + month2Totals.totalExpense + month3Totals.totalExpense },
                  { name: 'Payment', value: month1Totals.totalPayment + month2Totals.totalPayment + month3Totals.totalPayment },
                  { name: 'Profit', value: month1Totals.profit + month2Totals.profit + month3Totals.profit },
                ]}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              >
                <Cell key="Income" fill="#82ca9d" />
                <Cell key="Expense" fill="#ffcccb" />
                <Cell key="Payment" fill="#87ceeb" />
                <Cell key="Profit" fill="#ffd700" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="chart-box">
            <h3>Bar Chart</h3>
            <BarChart
              width={465}
              height={300}
              data={chartData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="month1" fill="#8884d8" />
              <Bar dataKey="month2" fill="#82ca9d" />
              <Bar dataKey="month3" fill="#ffc658" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialReport;
