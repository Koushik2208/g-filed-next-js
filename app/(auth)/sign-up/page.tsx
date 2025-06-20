import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const signUp = () => {
  return (
    <div>
      <p>sign up</p>
      <p>
        Already have an account?{" "}
        <Link href={ROUTES.SIGN_IN} className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default signUp;
