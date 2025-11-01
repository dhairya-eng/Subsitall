"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import KPISection from "@/components/KPISection";
import SubscriptionGrid from "@/components/SubscriptionGrid";
import InsightsSection from "@/components/InsightsSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import { getSubscriptions, getInsights, getAnalytics } from "@/lib/api";

export default function DashboardPage() {
  const [subs, setSubs] = useState<any[]>([]);
  const [insights, setInsights] = useState<string>("");
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getSubscriptions(), getInsights(), getAnalytics()])
      .then(([s, i, a]) => {
        setSubs(s);
        setInsights(i);
        setAnalytics(a);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );

  return (
    <div className="min-h-screen relative overflow-hidden font-inter text-gray-900 dark:text-gray-50">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-indigo-700 to-gray-900 opacity-90" />
      {/* subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_60%)]" />

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Greeting */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-3xl font-semibold mb-2">
            Welcome back to <span className="text-emerald-300">SubSync</span>
          </h1>
          <p className="text-gray-200">
            Your digital life at a glance — clean, smart, and in control.
          </p>
        </motion.div>

        {/* KPI Section with glow */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-6 h-32 bg-emerald-400/20 blur-3xl rounded-full" />
          <KPISection subs={subs} />
        </div>

        {/* Subscription Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SubscriptionGrid subs={subs} />
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InsightsSection data={insights} />
        </motion.div>

        {/* Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnalyticsSection data={analytics} />
        </motion.div>
      </main>
    </div>
  );
}
