"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { z } from "zod";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    if (!form.phone) return alert("Please enter your phone number");
    setLoading(true);

    // Simulate sending OTP
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
    }, 1000);
  };

  const handleSignUp = async (data: z.infer<typeof SignUpSchema>) => {
    // Simulate success
    console.log("Success!", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthForm
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{
              name: "",
              mail_id: "",
              mobile_number: "",
              password: "",
              confirmPassword: "",
              type_of_license: "organization",
              user_role: "admin",
              organization_code: "",
              organization: "",
              department: [],
              other_department: "",
            }}
            onSubmit={handleSignUp}
          />
          <p className="mt-6 text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
