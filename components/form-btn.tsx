"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="h-12 rounded-3xl font-bold disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed bg-neutral-100"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
