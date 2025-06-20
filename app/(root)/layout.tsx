import Header from "@/components/layout/Header";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = true;
  if (!isLoggedIn) redirect("/sign-in");
  return (
    <div>
      <Header />
      <main className="mt-16 max-w-7xl mx-auto container">{children}</main>
    </div>
  );
};

export default layout;
