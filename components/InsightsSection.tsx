export default function InsightsSection({ data }: { data: string }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">AI Insights</h2>
      <p className="text-gray-600 dark:text-gray-300">
        {data || "No insights yet."}
      </p>
    </section>
  );
}
