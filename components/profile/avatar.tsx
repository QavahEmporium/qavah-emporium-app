"use client";
import { IUser } from "@/definitions/user";
import { User } from "lucide-react";
import Link from "next/link";

export const Avatar = ({ user }: { user: IUser }) => {
  return (
    <div className="p-6 flex flex-col items-center border-b">
      <div className="relative w-30 h-30 rounded-full bg-gray-200 flex items-center justify-center mb-4">
        <User className="w-20 h-15 text-gray-500" />
        <button className="absolute bottom-0 right-0 bg-pink-500 text-white text-xs px-2 py-1 rounded-md shadow hover:bg-pink-800">
          Change
        </button>
      </div>
      <h1 className="mt-4 text-xl font-semibold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      <Link
        href="/profile/edit"
        className="mt-3 text-sm text-pink-600 hover:underline"
      >
        Edit Profile
      </Link>
    </div>
  );
};
