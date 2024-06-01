"use client";
import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import SocialLogin from "../components/social-login-btn";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Login() {
  const [state, action] = useFormState(handleForm, {
    potato: 1,
  } as any);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hello!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="email address" required={true} errors={state.errors} />
        <Input name="password" type="password" placeholder="password" required={true} errors={state.errors} />
        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
