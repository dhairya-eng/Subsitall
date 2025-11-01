"use client";
import { motion } from "framer-motion";

export default function KPISection({ subs }: any) {
  const total = subs.reduce((a: number, s: any) => a + (s.price || 0), 0);
  const active = subs.filter((s: any) => s.status === "active").length;
  const inactive = subs.length - active;
  const potentialSavings = inactive * 8;

  const cards = [
    { title: "Monthly Spend", value: `$${total.toFixed(2)}`, color: "emerald" },
    { title: "Active Subs", value: active, color: "blue" },
    { title: "Inactive Subs", value: inactive, color: "amber" },
    { title: "Potential Savings", value: `$${potentialSavings}`, color: "rose" },
  ];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.04, y: -2 }}
          className={`relative bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-40" />
          <h3 className="text-sm text-gray-200">{c.title}</h3>
          <p className={`text-2xl font-bold mt-2 text-${c.color}-300`}>
            {c.value}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
