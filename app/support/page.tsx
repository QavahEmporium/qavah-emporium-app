import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/ui/page-transition";

export default function SupportPage() {
  const supportLinks = [
    { title: "Help Center / FAQs", href: "/support/help-center" },
    { title: "Contact Support", href: "/support/contact" },
    { title: "Return Policy", href: "/support/return-policy" },
    { title: "Privacy Policy / Terms", href: "/support/privacy-terms" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-6">
        <PageTransition>
          <h1 className="text-2xl font-bold mb-4 text-lunar-green-900">Support</h1>

          <ul className="divide-y divide-gray-200">
            {supportLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="flex justify-between items-center py-4 hover:bg-gray-50 transition px-2 rounded-md"
                >
                  <span className="text-gray-800 font-medium">
                    {link.title}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </PageTransition>
      </section>
    </main>
  );
}
