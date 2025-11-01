"use client";
import { loginWithGoogle } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Login to SubSync</h2>
      <button
        onClick={loginWithGoogle}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Continue with Google
      </button>
    </main>
  );
}
