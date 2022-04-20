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
  maintainAspectRatio: true,
  //   NOTE really important to make height and width props work properly
  //   responsive: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },

  elements: {
    line: {
      tension: 0.5,
      radius: 6, // disables bezier curves
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "My Balance",
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#b57295",
      backgroundColor: "#db86b2",
      CanvasLineCap: "butt",
      CanvasLineJoin: "miter",
      borderDashOffset: 0.0,
      CanvasJoinStyle: "#b57295",
      pointBorderColor: "#b57295",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 4,
      pointBorderRadius: 5,
      pointHoverBackgroundColor: "#b57295",
      pointHoverBorderColor: "#b57295",
      pointHoverBorderRadius: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
};

const MyChart = () => {
  return <Line options={options} data={data} />;
};

export default MyChart;
