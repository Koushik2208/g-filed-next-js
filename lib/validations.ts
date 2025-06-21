import { z } from "zod";

// export const SignUpSchema = z.object({
//   username: z
//     .string()
//     .min(3, { message: "Username must be at least 3 characters long." })
//     .max(30, { message: "Username cannot exceed 30 characters." })
//     .regex(/^[a-zA-Z0-9_]+$/, {
//       message: "Username can only contain letters, numbers, and underscores.",
//     }),

//   name: z
//     .string()
//     .min(1, { message: "Name is required." })
//     .max(50, { message: "Name cannot exceed 50 characters." })
//     .regex(/^[a-zA-Z\s]+$/, {
//       message: "Name can only contain letters and spaces.",
//     }),

//   email: z
//     .string()
//     .min(1, { message: "Email is required." })
//     .email({ message: "Please provide a valid email address." }),

//   password: z
//     .string()
//     .min(6, { message: "Password must be at least 6 characters long." })
//     .max(100, { message: "Password cannot exceed 100 characters." })
//     .regex(/[A-Z]/, {
//       message: "Password must contain at least one uppercase letter.",
//     })
//     .regex(/[a-z]/, {
//       message: "Password must contain at least one lowercase letter.",
//     })
//     .regex(/[0-9]/, { message: "Password must contain at least one number." })
//     .regex(/[^a-zA-Z0-9]/, {
//       message: "Password must contain at least one special character.",
//     }),
// });

export const SignUpSchema = z
  .object({
    name: z.string().min(1, "Username is required"),

    mail_id: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),

    otp: z.string().length(6, "OTP must be 6 digits").optional(), // display logic handled in form

    mobile_number: z
      .string()
      .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Password must contain a lowercase letter")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/\d/, "Password must contain a number")
      .regex(/[^A-Za-z0-9]/, "Password must contain a special character"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    type_of_license: z.enum(["individual", "organization"], {
      errorMap: () => ({ message: "Select a license type" }),
    }),

    user_role: z.enum(["admin", "supervisor", "field_crew"], {
      errorMap: () => ({ message: "Select a user role" }),
    }),

    organization_code: z.string().optional(), // Conditional required logic can be added below
    organization: z.string().optional(),

    department: z.array(z.string()).optional(),

    other_department: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => !(data.user_role === "admin" && !data.organization_code?.trim()),
    {
      message: "Organization code is required for Admins",
      path: ["organization_code"],
    }
  )
  .refine(
    (data) =>
      !(data.type_of_license === "organization" && !data.organization?.trim()),
    {
      message: "Company name is required for Organization license",
      path: ["organization"],
    }
  );
