"use client";

import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import SocialLogin from "../components/social-login-btn";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hello!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          type="text"
          name="username"
          placeholder="Username"
          required={true}
          errors={[]}
          minLength={3}
          maxLength={10}
        />
        <Input type="email" name="email" placeholder="email address" required={true} errors={[]} />
        <Input type="password" name="password" placeholder="password" required={true} errors={[]} />
        <Input type="password" name="confirm_password" placeholder="confirm password" required={true} errors={[]} />
        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
