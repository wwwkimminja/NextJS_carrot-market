import React, { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}
export default function Input({ errors = [], name, ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 
        focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, i) => (
        <span key={i} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
