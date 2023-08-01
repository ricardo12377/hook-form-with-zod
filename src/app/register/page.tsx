"use client";

import { RegisterComponent } from "@/components/register";
import { StoreProvider } from "@/providers/storeProvider";

export default function Register() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <StoreProvider>
        <RegisterComponent />
      </StoreProvider>
    </main>
  );
}
