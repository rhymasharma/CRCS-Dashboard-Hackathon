import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Navbar from './Navbar';
import './Charts.css';

const StackedBarChart = ({ data }) => {
  // Create an array of unique sectors excluding empty strings
  const sectors = [...new Set(data.map(item => item.Sector))].filter(sector => sector !== '');

  // Create an object to store the sector counts for each state
  const stateData = {};

  // Initialize the stateData object with empty counts for each sector
  data.forEach(item => {
    if (!stateData[item.State]) {
      stateData[item.State] = { name: item.State };
      sectors.forEach(sector => {
        stateData[item.State][sector] = 0;
      });
    }
  });

  // Count the sectors for each state excluding empty strings
  data.forEach(item => {
    if (item.Sector !== '') {
      stateData[item.State][item.Sector]++;
    }
  });

  // Convert the stateData object into an array of objects
  const chartData = Object.values(stateData);

  // Define an array of colors for each stack
  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7f50',
    '#00bcd4',
    '#ffbb28',
    '#0088FE',
    '#00C49F',
    '#FF8042',
    '#FF7373',
    '#BDB76B',
    '#B39EB5',
    '#FFD700'
  ];

  return (
    <>
      <Navbar />
      <div className="stacked-barchart-container">
        <div className="stacked-barchart-wrapper">
            <BarChart width={800} height={500} data={chartData} stackOffset="sign">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} height={80} style={{ margin: '50px', fontSize: '70%'}} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={100}/>
                {sectors.map((sector, index) => (
                <Bar key={sector} dataKey={sector} stackId="a" fill={colors[index % colors.length]} />
                ))}
            </BarChart>
        </div>
       </div>
    </>
  );
};

export default StackedBarChart;
