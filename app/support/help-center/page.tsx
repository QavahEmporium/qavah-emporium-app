"use client";

import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";
import { motion } from "framer-motion";

export default function HelpCenterPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "You can browse products, add them to your cart, and proceed to checkout.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you can track your order in the 'Orders' section of your profile.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, PayPal, and other online payments.",
    },
  ];

  return (
    <main className="min-h-screen md:bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <PageTransition>
        <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-6">
          {/* Header */}
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/support" />
            <h1 className="text-2xl font-bold text-lunar-green-900">Help Center / FAQs</h1>
          </div>

          {/* FAQs with staggered animation */}
          <motion.ul
            className="space-y-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15, // delay between FAQ items
                },
              },
            }}
          >
            {faqs.map((faq, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="border-b pb-2"
              >
                <p className="font-medium">{faq.question}</p>
                <p className="text-gray-700 mt-1">{faq.answer}</p>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </PageTransition>
    </main>
  );
}
