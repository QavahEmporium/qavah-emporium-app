// app/profile/security/page.tsx
import { getSessionUser } from "@/data/user";
import SecurityClient from "@/components/profile/security/security";
import { IUser } from "@/definitions/user";
import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default async function SecurityPage() {
  const user = (await getSessionUser()) as IUser;

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
        <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-4 md:p-6">
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/profile" />
            <h1 className="text-2xl text-lunar-green-800 font-bold">
              Security & Settings
            </h1>
          </div>
          <SecurityClient user={user} />
        </section>
      </main>
    </PageTransition>
  );
}
