import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const signIn = () => {
  return (
    <div>
      <p>sign in</p>
      <p>
        Don't have an account?{" "}
        <Link href={ROUTES.SIGN_UP} className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default signIn;
