"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ja-JP"), "Wrong phone format");
const tokenSchema = z.coerce
  .number()
  .min(100000, "must be a six-digit number")
  .max(999999, "must be a six-digit number.");

interface ActionState {
  token: boolean;
}

export const smsVerification = async (prevState: ActionState, formData: FormData) => {
  const phone = formData.get("phone");
  const token = formData.get("token");
  console.log("phone", phone, "token", token);

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);

    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);

    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
};
