import type {FC} from "react";
import {Outlet} from "react-router";
import {Navbar} from "@/components/Navbar.tsx";

export const AppLayout: FC = () => {
  return (
    <main className="h-screen flex flex-col">
      <header className="mb-10">
        <Navbar />
      </header>
      <main className="container mx-auto flex flex-col gap-10">
        <Outlet />
      </main>
      <footer className="absolute bottom-0 w-full flex justify-center text-xs text-primary-foreground font-light p-2 gap-1">
        <p>Copyright &copy; {new Date().getFullYear()} Iva s.r.o.</p>
        <p>Všechna práva vyhrazena.</p>
      </footer>
    </main>
  )
}