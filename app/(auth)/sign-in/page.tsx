"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="no-ring"
              />
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="no-ring"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-sm text-center text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
