import Link from "next/link";
import React from "react";
import FormInput from "../components/form-input";
import FormBtn from "../components/form-btn";
import SocialLogin from "../components/social-login-btn";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hello!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="Username" required={true} errors={[]} />
        <FormInput type="email" placeholder="email address" required={true} errors={[]} />
        <FormInput type="password" placeholder="password" required={true} errors={[]} />
        <FormInput type="password" placeholder="confirm password" required={true} errors={[]} />
        <FormBtn loading={false} text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}