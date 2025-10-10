"use client";
import { motion } from "framer-motion";
import { RatingStars } from "@/components/ui/rating-stars";

export function ReviewsSection({ reviews }: { reviews: any[] }) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold mb-6 text-lunar-green-800 font-tenor-sans">
        Customer Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-gray-300 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-lunar-green-800 font-raleway">
                {review.name}
              </span>
              <RatingStars rating={review.rating} />
            </div>
            <p className="text-lunar-green-600 text-sm leading-relaxed font-raleway">
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
