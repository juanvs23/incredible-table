"use client";
import { CustomFlowbiteTheme, DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Navbar
      fluid
      className="bg-secondary-200 dark:bg-secondary-600 border-none shadow-md"
    >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={32}
          height={32}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Table content
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <DarkThemeToggle />
    </Navbar>
  );
}
