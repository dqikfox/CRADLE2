import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#14111a] text-[#f0e6d0]">
      <h1 className="text-4xl font-semibold tracking-tight">Cradle</h1>
    </main>
  );
}
