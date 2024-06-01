"use client";
import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import SocialLogin from "../components/social-login-btn";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "../lib/constants";

export default function Login() {
  const [state, action] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hello!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="email address" required errors={state?.fieldErrors.email} />
        <Input
          name="password"
          type="password"
          placeholder="password"
          required
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <Button text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
}
