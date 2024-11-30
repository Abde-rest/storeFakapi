"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const ContextSessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ContextSessionProvider;
