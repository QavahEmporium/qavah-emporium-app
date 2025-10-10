"use client";

import { logoutSessionUser } from "@/actions/auth";
import { button } from "framer-motion/client";
import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  isPending?: boolean;
}

export function SubmitButton({ name, isPending, ...props }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isPending}
      {...props}
      className={`w-full bg-gull-gray-500 text-white py-2 font-semibold hover:bg-gull-gray-600 transition disabled:opacity-50`}
    >
      {isPending ? "Processing..." : name}
    </button>
  );
}

export function LogoutButton() {
  return (
    <button
      onClick={async () => await logoutSessionUser()}
      className="w-full flex items-center gap-3 px-6 py-4 text-left text-red-600 hover:bg-red-50"
    >
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  );
}
export function BackButton({ url }: { url?: string }) {
  const router = useRouter();
  return (
    <>
      {url ? (
        <Link href={url}>
          <ArrowLeft />
        </Link>
      ) : (
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
      )}
    </>
  );
}
