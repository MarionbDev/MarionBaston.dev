"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
    <>
      <Toaster richColors closeButton />
      {children}{" "}
      <ProgressBar
        height="4px"
        color="#9045f9"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
