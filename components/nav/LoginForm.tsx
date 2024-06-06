"use client";

import React from "react";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { usePathname } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginForm() {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const handleLogin = () => {
    // For signingin with OAuth we use supabase.auth.signInWithOAuth({it takes provider and options})
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });
  };
  return (
    <Button
      variant="outline"
      className="flex item-center gap-2"
      onClick={handleLogin}
    >
      <SiGithub />
      Login
    </Button>
  );
}
