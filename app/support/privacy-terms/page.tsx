import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default function PrivacyTermsPage() {
  return (
    <main className="min-h-screen md:bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-6">
        <PageTransition>
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/support" />
            <h1 className="text-2xl font-bold text-lunar-green-900">Privacy Policy & Terms</h1>
          </div>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. We collect only the information
            necessary to provide and improve our services.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Terms of Service</h2>
          <p className="text-gray-700 mb-2">
            By using our platform, you agree to comply with our terms, including
            acceptable use and payment obligations.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Privacy Policy</h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties except
            as required by law or to fulfill your requests.
          </p>
        </PageTransition>
      </section>
    </main>
  );
}
