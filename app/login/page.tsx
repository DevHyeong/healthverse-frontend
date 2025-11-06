"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push(`http://localhost:8080/oauth2/authorize/kakao`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 sm:px-6">
      <div className="w-full max-w-sm space-y-6 rounded-lg border bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-primary">
            HealthVerse Thailand
          </h1>
          <p className="text-sm text-muted-foreground">
            Choose your login method
          </p>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md
                     bg-[url('/login/kakao_login.png')] bg-contain bg-no-repeat bg-center
                     h-[45px]
                     hover:opacity-90
                     focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}