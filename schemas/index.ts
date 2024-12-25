import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const addProductSchema = z.object({
  title: z.string().min(1, "title is required"),
  price: z.number().min(0, "price is required"),
  unit: z.string().min(1, "unit is required"),
  image: z.string(),
});
