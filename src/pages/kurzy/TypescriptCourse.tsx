import type {FC} from "react";
import {Course} from "@/components/Course/Course.tsx";

export const TypescriptCourse: FC = () => {
  return (
    <Course
      heading="Typescript"
      description="Tento kurz je zaměřen na TypeScript, nadstavbu JavaScriptu, která přináší statické typování a další moderní nástroje pro vývojáře. Účastníci se naučí, jak přidávat typy do proměnných, funkcí a objektů, jak pracovat s rozhraními, typovými aliasy a generickými typy. Dále se kurz věnuje třídám, modulům a integraci TypeScriptu s běžnými JavaScriptovými knihovnami. Vysvětlíme si, jak nakonfigurovat projekt pomocí souboru tsconfig.json, jak používat kompilátor tsc a jak ladit chyby, které TypeScript pomáhá odhalit už při psaní kódu. Kurz je vhodný pro vývojáře se základní znalostí JavaScriptu, kteří chtějí psát přehlednější, bezpečnější a lépe udržovatelný kód. Výuka probíhá online formou a je doplněna praktickými příklady a úkoly. Doporučená doba studia je tři až čtyři týdny, s časovou dotací zhruba čtyři hodiny týdně."
      images={[
        {
          src: "https://images.unsplash.com/photo-1595074475099-633660478a7a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Typescript",
          name: "Ilustrační foto",
        },
      ]}
      timeDiff="3 - 4 týdny"
      capacity={15}
      accreditation={true}
    />
  )
}