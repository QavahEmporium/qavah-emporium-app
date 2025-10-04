"use client";

import { loginUser } from "@/actions/auth";
import { SubmitButton } from "@/components/ui/buttons";
import InputValidated from "@/components/ui/input-validated";
import { PageTransition } from "@/components/ui/page-transition";
import { loginFormData } from "@/constants/auth";
import { LoginUserForm, loginUserFormSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const initialState = {
    message: "",
    errors: {},
  };

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const loginUserWithPathname = loginUser.bind(null, redirectPath);

  const [state, formAction, isPending] = useActionState(
    loginUserWithPathname,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>({
    resolver: zodResolver(loginUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <PageTransition>
      <main className="flex items-center justify-center min-h-screen bg-gray-50 px-2 md:px-4">
        <div className="w-full max-w-md md:bg-white md:shadow-lg md:rounded-2xl p-4 md:p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form
            ref={formRef}
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit(() => {
                const formData = new FormData(formRef.current!);
                startTransition(() => {
                  formAction(formData);
                });
              })(evt);
            }}
            className="flex flex-col items-center"
          >
            <div className="w-full mb-4">
              {loginFormData.map((data) => (
                <InputValidated
                  key={data.name}
                  {...data}
                  register={register}
                  errors={errors}
                  isPending={isPending}
                  stateError={
                    state?.errors
                      ? Object.fromEntries(
                          Object.entries(state.errors).map(([key, value]) => [
                            key,
                            Array.isArray(value) ? value[0] : value,
                          ])
                        )
                      : undefined
                  }
                />
              ))}
            </div>

            <SubmitButton name="Sign In" isPending={isPending} />

            <p className="mt-5 text-sm text-turquoise-900">
              Don&apos;t have an account yet?{" "}
              <Link
                className="text-pink-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href={`/register?redirect=${redirectPath}`}
              >
                Sign Up here
              </Link>
            </p>
          </form>
        </div>
      </main>
    </PageTransition>
  );
};

export default LoginForm;
