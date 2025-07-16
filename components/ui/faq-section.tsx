"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is DeleMate?",
    answer:
      "DeleMate is a peer-to-peer delivery app that connects individuals who need to send parcels with travelers who have spare capacity on their trips. It offers a seamless, affordable, and efficient way to send and receive packages.",
  },
  {
    question: "How does DeleMate work?",
    answer:
      "Senders post their delivery requests with parcel details and destination. Travelers browse and accept requests that match their routes. Payments are handled securely through the app, and both parties can track the parcel in real-time. Upon delivery, users can rate each other.",
  },
  {
    question: "How much money can I earn as a traveler?",
    answer:
      "The earning potential varies depending on the size, distance, and urgency of the parcels you deliver. DeleMate allows travelers to monetize their existing trips, turning empty space into extra income. You can earn a significant amount by taking on multiple deliveries.",
  },
  {
    question: "Is DeleMate safe and secure?",
    answer:
      "Yes, safety and security are top priorities. DeleMate includes features like KYC verification for all users, secure in-app payment processing, and a robust rating system to build trust within the community. Live tracking also provides peace of mind.",
  },
  {
    question: "What types of items can I send with DeleMate?",
    answer:
      "DeleMate is designed to be flexible and can accommodate various items, from small documents to larger packages. However, there are restrictions on prohibited items (e.g., illegal goods, hazardous materials). Please refer to our terms of service for a complete list.",
  },
  {
    question: "How does DeleMate compare to traditional courier services?",
    answer:
      "DeleMate offers several advantages over traditional couriers, including significantly lower costs, faster delivery times due to real-time matching with travelers, greater flexibility in parcel size and delivery times, and direct communication between sender and traveler.",
  },
  {
    question: "How do I get started with DeleMate?",
    answer:
      "Simply download the DeleMate app from the Google Play Store or Apple App Store. Sign up, complete your profile, and you can start posting delivery requests as a sender or browsing available requests as a traveler.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10 sm:mb-14">
        Frequently Asked <span className="text-[#133bb7]">Questions</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-200 last:border-b-0"
          >
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 hover:text-[#133bb7] transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#133bb7]" : ""
                }`}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100 py-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
