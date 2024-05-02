
import { ModeToggler } from './ModeToggler';

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavbarSection() {
  return (
    <Navbar fluid rounded className="bg-green-400 dark:bg-slate-200">
      <NavbarBrand href="https://flowbite-react.com">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NextJS Template
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <ModeToggler />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

