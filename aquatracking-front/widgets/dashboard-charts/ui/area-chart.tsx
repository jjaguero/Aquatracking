"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  datasets: [
    {
      label: "Consumo de agua (L)",
      data: [120, 190, 170, 220, 210, 180, 200],
      fill: true,
      backgroundColor: "rgba(0,148,232,0.15)",
      borderColor: "#0094e8",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true, ticks: { color: "#003e6b" } },
    x: { ticks: { color: "#003e6b" } },
  },
};

export function AreaChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consumo semanal de agua</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
