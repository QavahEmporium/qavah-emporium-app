// app/profile/page.tsx

import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";
import { Avatar } from "@/components/profile/avatar";
import { LogoutButton } from "@/components/ui/buttons";
import { PageTransition } from "@/components/ui/page-transition";

export default async function ProfilePage() {
  const user = (await getSessionUser()) as IUser;

  const menuItems = [
    { label: "Personal Information", icon: User, href: "/profile/personal" },
    { label: "Order Management", icon: Package, href: "/profile/orders" },
    { label: "Wishlist / Saved Items", icon: Heart, href: "/profile/wishlist" },
    // { label: "Payment Methods", icon: CreditCard, href: "/profile/payment" },
    { label: "Addresses", icon: MapPin, href: "/profile/addresses" },
    { label: "Security & Settings", icon: Settings, href: "/profile/security" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-[64px] pb-[72px] flex flex-col items-center">
      <section className="w-full max-w-2xl md:bg-white md:rounded-xl md:shadow-md overflow-hidden">
        <PageTransition>
          {/* Header / Overview */}
          <Avatar user={user} />
          {/* Links List */}
          <nav className="divide-y divide-gray-200">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="w-full flex items-center justify-between px-6 py-4"
              >
                <div className="w-full flex items-center gap-3 text-left hover:bg-gray-50">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </Link>
            ))}

            {/* Logout */}
            <LogoutButton />
          </nav>
        </PageTransition>
      </section>
    </main>
  );
}
