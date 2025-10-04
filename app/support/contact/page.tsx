"use client";
import { useState } from "react";
import { BackButton, SubmitButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default function ContactSupportPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Support request submitted: " + message);
    setMessage("");
  };

  return (
    <main className="min-h-screen md:bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-6">
        <PageTransition>
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/support" />
            <h1 className="text-2xl font-bold text-lunar-green-900">Contact Support</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full border rounded-lg px-3 py-2 resize-none"
                rows={6}
                required
              />
            </div>
            <SubmitButton name="Send Message" />
          </form>
        </PageTransition>
      </section>
    </main>
  );
}
