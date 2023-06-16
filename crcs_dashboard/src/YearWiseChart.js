import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from './Navbar';
import BottomBar from './BottomBar';
import './Charts.css';

const YearHistogram = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Filter out undefined and empty dates, and extract years from the "RegistrationDate" key in the data object
    const years = data
      .filter(item => item.RegistrationDate && item.RegistrationDate.trim() !== '')
      .map(item => {
        const dateParts = item.RegistrationDate.split('/');
        return dateParts[2]; // Assuming the year is always at index 2
      });

    // Count the occurrences of each year
    const yearCounts = years.reduce((counts, year) => {
      counts[year] = (counts[year] || 0) + 1;
      return counts;
    }, {});

    // Sort the years in ascending order
    const sortedYears = Object.keys(yearCounts).sort();

    // Create the chart data
    const chartData = {
      labels: sortedYears,
      datasets: [
        {
          label: 'Occurrences',
          data: sortedYears.map(year => yearCounts[year]),
          backgroundColor: '#73C2FB',
          borderWidth: 1,
        },
      ],
    };

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the chart instance
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false, // Prevents the chart from maintaining its aspect ratio
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
            },
            ticks: {
              maxRotation: 0, // Rotate x-axis labels if needed
            },
          },
          y: {
            title: {
              display: true,
              text: 'Societies Registered',
            },
            ticks: {
              precision: 0, // Display whole numbers on the y-axis
            },
          },
        },
      },
    });
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="year-histogram-chart-container">
        <canvas ref={canvasRef}></canvas>
      </div>
      <BottomBar />
    </>
  );
};

export default YearHistogram;
