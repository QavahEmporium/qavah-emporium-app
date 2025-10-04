// app/profile/personal/page.tsx

import { BackButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";
import Link from "next/link";

export default async function PersonalInfoPage() {
  const user = (await getSessionUser()) as IUser;

  return (
    <main className="min-h-screen bg-gray-50 md:pt-[64px] md:pb-[72px] flex justify-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md p-4 md:p-6">
        <PageTransition>
          <div className="flex flex-row gap-3 items-center mb-8">
            <BackButton url="/profile" />
            <h1 className="text-2xl font-bold text-lunar-green-800">
              Personal Information
            </h1>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-lunar-green-600">Full Name</label>
              <p className="text-lg font-medium  text-lunar-green-900">
                {user.name}
              </p>
            </div>
            <div>
              <label className="text-sm  text-lunar-green-600">Email</label>
              <p className="text-lg font-medium  text-lunar-green-900">
                {user.email}
              </p>
            </div>
            <div>
              <label className="text-sm  text-lunar-green-600">Phone</label>
              <p className="text-lg font-medium  text-lunar-green-900">
                {user.contactNumber || "Not provided"}
              </p>
            </div>
          </div>
          <Link
            href="/profile/edit"
            className="mt-6 block w-full bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-700 transition text-center font-medium"
          >
            Edit Profile
          </Link>{" "}
        </PageTransition>
      </section>
    </main>
  );
}
