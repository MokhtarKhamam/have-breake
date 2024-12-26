"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

interface AuthButtonProps {
  className?: React.ComponentProps<"div">["className"];
}

const AuthButton = ({ className, ...props }: AuthButtonProps) => {
  // const session =  auth();

  // console.log("session", session);

  {
    /* <form
        action={async () => {
          // "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form> */
  }

  const session = useSession();


  if (session?.data?.user) {
    return (
      <Button
        size="sm"
        className={cn(className)}
        {...props}
        onClick={async () => {
          // "use server";
          await signOut();
        }}
      >
        {/* <Link href="/auth/login"> */}
        Sign Out
        {/* <span className="sr-only">Sign In</span> */}
        {/* </Link> */}
      </Button>
    );
  }
  return (
    <Button size="sm" className={cn(className)} {...props} asChild>
      <Link href="/auth/login">
        Sign In
        {/* <span className="sr-only">Sign In</span> */}
      </Link>
    </Button>
  );
};

export default AuthButton;
