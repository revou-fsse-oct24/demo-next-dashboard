import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
    title: {
      display: true,
      text: "Monthly Sales",
      color: "rgba(255, 255, 255, 0.8)",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [65000, 59000, 80000, 81000, 56000, 55000, 70000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Orders",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function SalesChart() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <Line options={options} data={data} />
    </div>
  );
}
