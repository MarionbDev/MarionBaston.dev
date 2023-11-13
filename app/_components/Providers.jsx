"use client";

import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
    <>
      <Toaster richColors closeButton />
      {children}
    </>
  );
}
