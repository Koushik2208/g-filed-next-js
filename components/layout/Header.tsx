import React from "react";
import { ModeToggle } from "../ModeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        G-Field
      </h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
