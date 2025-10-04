import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen md:bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-6">
        <PageTransition>
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/support" />
            <h1 className="text-2xl font-bold text-lunar-green-900">
              Return Policy
            </h1>
          </div>

          <p className="text-gray-700 mb-4">
            We accept returns within 30 days of purchase. Products must be in
            their original packaging and condition.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Initiate a return request from your Orders page.</li>
            <li>Provide a valid reason for the return.</li>
            <li>Refunds will be processed within 5-7 business days.</li>
          </ul>
        </PageTransition>
      </section>
    </main>
  );
}
