"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitButton } from "@/components/ui/buttons";
import { IUser } from "@/definitions/user";
import InputValidated from "@/components/ui/input-validated";
import { passwordResetFormData } from "@/constants/auth";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Enter your current password"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function SecurityClient({ user }: { user: IUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  const onSubmit = async (data: PasswordFormData) => {
    try {
      console.log("Update password with:", data);
      // await updatePassword(user.id, data);
      reset();
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Change Password */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-lunar-green-700">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {passwordResetFormData.map((data) => (
            <InputValidated
              key={data.name}
              {...data}
              register={register}
              errors={errors}
              isRequired
              isPending={isSubmitting}
            />
          ))}

          <div className="mt-4">
            <SubmitButton name="Update Password" isPending={isSubmitting} />
          </div>
        </form>
      </section>

      {/* Two-Factor Authentication */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Two-Factor Authentication
        </h2>
        <p className="text-gray-600 text-sm mb-3">
          Add an extra layer of security to your account.
        </p>
        <button
          onClick={() => setTwoFAEnabled(!twoFAEnabled)}
          className={`px-4 py-2 rounded-lg text-white transition ${
            twoFAEnabled
              ? "bg-pink-600 hover:bg-pink-500"
              : "bg-lunar-green-600 hover:bg-lunar-green-500"
          }`}
        >
          {twoFAEnabled ? "Disable 2FA" : "Enable 2FA"}
        </button>
      </section>

      {/* Account Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked className="h-5 w-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
