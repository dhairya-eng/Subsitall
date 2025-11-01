import axios from "axios";
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.subsync.app",
  withCredentials: true,
});

export const getSubscriptions = async () => (await API.get("/subscriptions")).data;
export const getInsights = async () => (await API.get("/insights")).data;
export const getAnalytics = async () => (await API.get("/analytics")).data;
