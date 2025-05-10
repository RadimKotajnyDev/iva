import {Course} from "@/components/Course/Course.tsx";
import type {FC} from "react";

export const JavascriptCourse: FC = () => {
  return (
    <Course
      heading="Javascript"
      description="
      Tento kurz je určen pro začátečníky, kteří se chtějí naučit základy JavaScriptu, nejpoužívanějšího jazyka pro tvorbu moderních webových aplikací. Účastníci se postupně seznámí se základní syntaxí, proměnnými, funkcemi, podmínkami, cykly a prací s objekty. Naučí se také, jak reagovat na uživatelské události a jak pomocí JavaScriptu upravovat obsah webové stránky prostřednictvím manipulace s DOM. V pozdější části kurzu získají přehled o asynchronním programování, práci s promisy a základech async/await. Kurz nevyžaduje žádné předchozí zkušenosti s programováním, postačí pouze základní znalost práce s webovým prohlížečem. Výuka probíhá formou online lekcí doplněných interaktivními úlohami. Doporučená doba studia je čtyři týdny, s časovou náročností přibližně tři až čtyři hodiny týdně.
      "
      images={[
        {
          src: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Javascript",
          name: "1. obrázek s Javascriptem",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png",
          alt: "Javascript",
          name: "2. Syntaxe Javascriptu",
        }
      ]}
      timeDiff="3 - 4 týdny"
      capacity={15}
      accreditation={true}
    />
  )
}