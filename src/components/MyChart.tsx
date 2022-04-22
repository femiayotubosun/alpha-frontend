import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // maintainAspectRatio: true,
  //   NOTE really important to make height and width props work properly
  responsive: true,
  scales: {
    x: {
      step: 200,
      ticks: {
        color: "#8F92A1",
        font: {
          size: 8,
          family: "Gilda Display, serif",
        },
      },
      grid: {
        color: "rgba(143, 146, 161, 0.1)",
      },
    },
    y: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#8F92A1",
        font: {
          size: 8,
          family: "Gilda Display, serif",
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#F3F6F8",
      bodyColor: "#171717",
      bodyAlign: "center",
      titleColor: "#8F92A1",
      titleAlign: "center",
    },
  },

  elements: {
    line: {
      tension: 0.8,
      radius: 6, // disables bezier curves
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Order",
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#51459E",
      backgroundColor: "#51459E",
      CanvasLineCap: "butt",
      CanvasLineJoin: "miter",
      borderDashOffset: 0.0,
      CanvasJoinStyle: "#51459E",
      pointBorderColor: "#51459E",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 4,
      pointBorderRadius: 5,
      pointHoverBackgroundColor: "#51459E",
      pointHoverRadius: 6,
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 1,
      pointHitRadius: 20,
    },
    {
      label: "Demand",
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#84E8F4",
      backgroundColor: "#84E8F4",
      CanvasLineCap: "butt",
      CanvasLineJoin: "miter",
      borderDashOffset: 0.0,
      CanvasJoinStyle: "#84E8F4",
      pointBorderColor: "#84E8F4",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 4,
      pointBorderRadius: 5,
      pointHoverBackgroundColor: "#84E8F4",
      pointHoverRadius: 6,
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 1,
      pointHitRadius: 20,
    },
  ],
};

const MyChart = () => {
  return <Line options={options} width="full" height="full" data={data} />;
};

export default MyChart;
