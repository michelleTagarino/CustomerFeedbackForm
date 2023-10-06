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
        },
        suggestedMin: 0
      }
    }
  }
};

/* Defines the colours for the line chart lines and background fill */
export const colors = {
  blue: {
    default: 'rgba(12, 16, 66, 1)',
    half: 'rgba(12, 16, 66, 0.5)',
    quarter: 'rgba(12, 16, 66, 0.25)',
    zero: 'rgba(12, 16, 66, 0)'
  }
};

/* Labels for chart's x-axis */
export const labels = ['1', '2', '3', '4', '5'];