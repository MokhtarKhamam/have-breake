import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import CartSheet from "./CartSheet";
import AuthButton from "./AuthButton";

const NavigationLink = () => {
  return (
    <>
      <nav className="border border-b">
        <div className="container flex justify-between items-center">
        <div>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Logo />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"
                  >
                    Clothing
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"
                  >
                    Shoes
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"
                  >
                    Accessories
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
        <div className="relative w-fit flex justify-center items-center gap-5">
          <Input
            type="text"
            placeholder="Search products..."
            className="xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          />
          <MagnifyingGlassIcon
            className="size-4 xl:mr-2 absolute top-3 right-2"
            aria-hidden="true"
          />
          <CartSheet />
          <AuthButton />
        </div>

        {/* <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavigationLink;
