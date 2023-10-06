/* Chart configuration options */
export const chartConfiguration = {
  type: "line",
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Ratings Distribution'
      },
      legend: {
        display: false
      }
    },
    responsive: true,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'Number of Ratings'
        }
      }
    }
  }
};

/* Defines the colours for the line chart lines and background fill */
export const colors = {
  purple: {
    default: 'rgba(149, 76, 233, 1)',
    half: 'rgba(149, 76, 233, 0.5)',
    quarter: 'rgba(149, 76, 233, 0.25)',
    zero: 'rgba(149, 76, 233, 0)'
  },
  indigo: {
    default: 'rgba(80, 102, 120, 1)',
    quarter: 'rgba(80, 102, 120, 0.25)'
  }
};

/* Labels for chart's x-axis */
export const labels = ['1', '2', '3', '4', '5'];