"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-primary dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <span className="text-lg font-medium text-neutral-dark dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "material-symbols-outlined text-primary transition-transform duration-300",
                      isOpen ? "rotate-180" : ""
                    )}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "px-6 pb-6 text-gray-600 dark:text-gray-300 transition-all duration-300",
                    isOpen ? "block" : "hidden"
                  )}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
