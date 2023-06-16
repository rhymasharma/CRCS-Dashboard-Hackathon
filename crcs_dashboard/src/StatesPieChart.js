import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from './Navbar';
import BottomBar from './BottomBar';
import './Charts.css';

const StatesPieChart = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Extract all unique states from the "State" key in the data object
    const states = [...new Set(data.map(item => item.State))].filter(state => state !== '');

    // Count the occurrences of each state
    const stateCounts = states.map(state => {
      const count = data.reduce((sum, item) => (item.State === state ? sum + 1 : sum), 0);
      return {
        state: state,
        count: count,
      };
    });

    // Calculate the total count of all states
    const totalCount = stateCounts.reduce((sum, item) => sum + item.count, 0);

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Generate random colors for each state
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const colors = stateCounts.map(() => getRandomColor());

    // Create the chart instance
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: states,
        datasets: [
          {
            data: stateCounts.map(item => item.count),
            backgroundColor: colors,
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, [data]);

  return (
    <>
      <Navbar />
      <canvas className="states-piechart-container" ref={canvasRef}></canvas>
      <BottomBar />
    </>
  );
};

export default StatesPieChart;
