"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function AnalyticsSection({ data }: any) {
  if (!data) return null;
  const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444"];

  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Analytics</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((_: any, i: number) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}
