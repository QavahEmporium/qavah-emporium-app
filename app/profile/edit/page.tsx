// app/profile/edit/page.tsx
import { getSessionUser } from "@/data/user";
import { redirect } from "next/navigation";
import { IUser } from "@/definitions/user";
import EditProfileForm from "@/components/profile/edit/edit-profile-form";
import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default async function EditProfilePage() {
  const user = (await getSessionUser()) as IUser | null;

  if (!user) {
    redirect("/login?redirect=/profile/edit");
  }

  return (
    <main className="min-h-screen bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-4 md:p-6">
        <PageTransition>
          <BackButton url="/profile" />
          <h1 className="text-2xl font-bold mb-4 text-center text-lunar-green-800">
            Edit Profile
          </h1>
          {/* ✅ Pass user to client form */}
          <EditProfileForm user={user} />
        </PageTransition>
      </section>
    </main>
  );
}
