import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from './Navbar';
import BottomBar from './BottomBar';
import './Charts.css';

const SectorsPieChart = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Extract all unique sectors from the "Sector" key in the data object
    const sectors = [...new Set(data.map(item => item.Sector))].filter(sector => sector !== '');

    // Count the occurrences of each sector
    const sectorCounts = sectors.map(sector => {
      const count = data.reduce((sum, item) => (item.Sector === sector ? sum + 1 : sum), 0);
      return {
        sector: sector,
        count: count,
      };
    });

    // Calculate the total count of all sectors
    const totalCount = sectorCounts.reduce((sum, item) => sum + item.count, 0);

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Generate random colors for each sector
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const colors = sectorCounts.map(() => getRandomColor());

    // Create the chart instance
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: sectors,
        datasets: [
          {
            data: sectorCounts.map(item => item.count),
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
      <canvas className="sectors-piechart-container" ref={canvasRef}></canvas>
      <BottomBar />
    </>
  );
};

export default SectorsPieChart;
