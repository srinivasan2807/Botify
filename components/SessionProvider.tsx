"use client";
import React from "react";
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
type Props = {
  children: React.ReactNode;
  session: Session | null;
};
function SessionProvider({ children, session }: Props) {
  return <Provider>{children}</Provider>;
}

export default SessionProvider;
