"use client";

import { useState } from "react";

export default function SidebarNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage(""); // Clear previous errors on new attempt

    try {
      const response = await fetch("/api/v1/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus("error");
        
        // Laravel Validation Errors
        if (errorData.errors) {
            const firstError = Object.values(errorData.errors)[0];
            setMessage(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
            setMessage(errorData.message || "Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Connection failed. Please check your internet.");
    }
  };

  return (
    <div className="bg-primary p-6 text-white shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
        <span className="material-symbols-outlined text-2xl">mail</span>
      </div>
      <h3 className="mb-2 text-xl">Join the Community</h3>
      <p className="mb-4 text-sm text-blue-100">
        Get the latest updates on our programs and tech stories delivered to your inbox.
      </p>
      <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
        <input
          aria-label="Email address"
          className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-blue-200 focus:bg-white/20 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50"
          placeholder="Your email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
        />
        <button
          className="w-full rounded-lg bg-secondary py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
       {message && (
        <p className={`mt-3 text-xs font-semibold ${status === 'error' ? 'text-red-200' : 'text-green-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
