import {Course} from "@/components/Course/Course.tsx";
import type {FC} from "react";

export const SvelteCourse: FC = () => {
  return (
    <Course
      heading="Svelte"
      description="Tento kurz je zaměřen na Svelte, moderní JavaScriptový framework, který se odlišuje tím, že kompiluje komponenty do vysoce optimalizovaného čistého JavaScriptu bez nutnosti běhové knihovny. Účastníci se naučí vytvářet komponenty pomocí jednoduché a čitelné syntaxe, pracovat s reaktivními proměnnými, podmínkami, cykly a obousměrnou vazbou dat. Dále kurz pokrývá práci s událostmi, formuláři, životním cyklem komponent a modulární strukturou aplikace. Postupně se přejde k pokročilejším konceptům, jako jsou stores pro správu sdíleného stavu, sloty, dynamické komponenty a jednoduché routování. Výuka je vhodná pro vývojáře se základní znalostí JavaScriptu, kteří chtějí zkusit alternativu k Reactu nebo Vue a naučit se vytvářet rychlé, efektivní a snadno udržovatelné aplikace. Kurz probíhá online, je založen na praktickém přístupu a obsahuje úkoly i menší projekty. Doporučená délka kurzu je tři až čtyři týdny, s časovou dotací zhruba tři až pět hodin týdně."
      images={[
        {
          src: "https://www.sveltejs.cz/images/svelte-logo-main-page-image.png",
          alt: "Svelte",
          name: "1. obrázek s Svelte",
        }
      ]}
      timeDiff="3 - 4 týdny"
      capacity={50}
      accreditation={false}
    />
  )
}