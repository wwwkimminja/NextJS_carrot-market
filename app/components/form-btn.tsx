"use client";
import React from "react";
import { useFormStatus } from "react-dom";
interface FormBtnProps {
  text: string;
}
export default function FormBtn({ text }: FormBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
