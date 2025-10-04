// app/profile/edit/edit-profile-form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitButton } from "@/components/ui/buttons";
import { IUser } from "@/definitions/user";
import { User } from "lucide-react";
import InputValidated from "@/components/ui/input-validated";
import { editProfileFormData } from "@/constants/auth";
import { updateProfile } from "@/actions/auth";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email(),
  contactNumber: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function EditProfileForm({ user }: { user: IUser }) {
  const router = useRouter();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      contactNumber: user?.contactNumber || "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // 🔹 integrate with backend API later
      console.log("Submitting:", { ...data, avatar: avatarPreview });
      await updateProfile(data);
      router.push("/profile");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
      // Optionally upload to backend here
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Avatar Upload */}
      <div className="flex flex-col items-center">
        <div className="relative w-30 h-30 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <User className="w-20 h-15 text-gray-500" />
        </div>{" "}
      </div>

      {editProfileFormData.map((data) => (
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
        <SubmitButton
          name={isSubmitting ? "Saving..." : "Save Changes"}
          isPending={isSubmitting}
        />
      </div>
    </form>
  );
}
