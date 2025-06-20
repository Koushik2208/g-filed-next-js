"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import ROUTES from "@/constants/routes";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add real sign-up API integration here
    console.log("Submitting form with data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="no-ring"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="no-ring"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                className="no-ring"
                required
              />
            </div>

            {!otpSent ? (
              <Button
                type="button"
                onClick={handleSendOtp}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            ) : (
              <div>
                <label htmlFor="otp" className="form-label">
                  Enter OTP
                </label>
                <InputOTP
                  maxLength={4}
                  value={form.otp}
                  onChange={(value) => setForm({ ...form, otp: value })}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>

                <Button type="submit" className="w-full mt-4">
                  Complete Sign Up
                </Button>
              </div>
            )}
          </form>

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
