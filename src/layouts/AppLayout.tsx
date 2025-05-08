import type {FC} from "react";
import {Outlet} from "react-router";
import {Navbar} from "@/components/Navbar.tsx";
import {PageBar} from "@/components/PageBar.tsx";

export const AppLayout: FC = () => {
  return (
    <section className="h-screen flex flex-col">
      <header className="mb-10">
        <PageBar />
        <Navbar />
      </header>
      <main className="container mx-auto flex flex-col gap-10">
        <Outlet />
      </main>
      <footer className="absolute bottom-0 w-full flex justify-center text-xs text-primary-foreground font-light p-2 gap-1">
        <p>Copyright &copy; {new Date().getFullYear()} Iva s.r.o.</p>
        <p>Všechna práva vyhrazena.</p>
      </footer>
    </section>
  )
}