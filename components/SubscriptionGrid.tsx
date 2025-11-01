"use client";
import { motion } from "framer-motion";

export default function SubscriptionGrid({ subs }: any) {
  return (
    <section>
      <div className="flex justify-between mb-4 text-gray-100">
        <h2 className="text-xl font-semibold">Your Subscriptions</h2>
        <button className="text-sm text-emerald-300 hover:text-emerald-200">+ Add</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subs.map((s: any) => (
          <motion.div
            key={s.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-white">{s.merchant}</h3>
              <span
                className={`text-xs ${
                  s.status === "active" ? "text-emerald-300" : "text-gray-400"
                }`}
              >
                {s.status}
              </span>
            </div>
            <p className="text-lg font-semibold mt-2 text-gray-100">
              ${s.price}/mo
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Renews {new Date(s.next_renewal_date).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
