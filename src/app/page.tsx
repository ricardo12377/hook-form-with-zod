"use client";

import { Login } from "@/components/login";
import { StoreProvider } from "@/providers/storeProvider";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <StoreProvider>
        <Login />
      </StoreProvider>
    </main>
  );
}
