"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { FireIcon } from "@heroicons/react/24/solid";
import { FormStateProps, handleForm } from "./action";
import { useFormState } from "react-dom";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [state, action] = useFormState<FormStateProps, FormData>(handleForm, {
    errors: [],
    message: "",
  });
  return (
    <div className="flex items-center justify-center w-full h-full flex-col min-h-screen gap-16  max-w-screen-sm m-auto">
      <span>
        <FireIcon className="size-20 text-red-400" />
      </span>
      <form action={action} className="flex flex-col gap-4 w-full">
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          errors={[]}
          required
        />
        <FormInput
          type="text"
          name="username"
          placeholder="Username"
          errors={[]}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          errors={state?.errors ?? []}
          required
        />
        <FormButton text="로그인" />
        {state?.message && (
          <div className="flex items-center gap-3 p-6 rounded-3xl bg-green-400 *:font-bold">
            <CheckBadgeIcon className="size-7" />
            <span>{state.message}</span>
          </div>
        )}
      </form>
    </div>
  );
}
