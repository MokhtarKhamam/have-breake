"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "@/data/user";
export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Credentials from login action no validate fields",
    };
  }

  //   return { success: "Confirmation email Sent!" };

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    const user = await getUserByEmail(email);

    const jwtToken = jwt.sign({ id: user?.id }, "shhhhh");

    return { success: "Logged in successfully!", token: jwtToken };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentilas! from login CredentialsSignin" };
        default:
          return { error: "Something went wrong! from server action" };
      }
    }

    throw Error;
  }
};
