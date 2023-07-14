"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/botifylogo.png"
        alt={"Botify-logo"}
        width={300}
        height={300}
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use Botify
      </button>
    </div>
  );
}

export default Login;
