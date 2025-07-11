import * as z from "zod"

export const signUpSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: "Email is required" })
            .email({ message: "Please Enter a valid email" }),
        password: z
            .string()
            .min(1, { message: "password is required" })
            .email({ message: "Password should be a minumum of 8 characters" }),
        passwordConfirmation: z
            .string()
            .min(1, { message: "Please confirm your password" })
    })
    .refine((data) => {
        data.password === data.
            passwordConfirmation, {
        message: "Password do not match",
        path: ["password confrimation"]
    }
    },
        {})