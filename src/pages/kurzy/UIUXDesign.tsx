import type {FC} from "react";
import {Course} from "@/components/Course/Course.tsx";

export const UIUXDesign: FC = () => {
  return (
    <Course
      heading="UI/UX Design"
      description="Tento kurz je zaměřen na UX a UI design a představuje komplexní úvod do navrhování uživatelsky přívětivých a vizuálně atraktivních digitálních produktů. Účastníci se seznámí se základy uživatelské zkušenosti (UX), jako je výzkum uživatelů, tvorba person, uživatelských cest, drátových modelů a testování použitelnosti. Dále kurz pokrývá principy vizuálního designu (UI), jako jsou práce s typografií, barvami, ikonografií, rozvržením, hierarchií a konzistencí v rámci rozhraní. Součástí kurzu je také přehled populárních nástrojů jako Figma, Adobe XD nebo Sketch, včetně praktické tvorby návrhů a interaktivních prototypů. Kurz je vhodný pro začátečníky i mírně pokročilé, kteří chtějí porozumět procesu návrhu digitálních produktů od nápadu až po finální vizuální podobu. Výuka probíhá online a kombinuje teoretické základy s praktickými úlohami a zpětnou vazbou. Doporučená délka kurzu je pět až šest týdnů, s časovou náročností přibližně čtyři až šest hodin týdně."
      images={[
        {
          src: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "UI/UX Design",
          name: "1. obrázek s UI/UX Designem",
        }
      ]}
      timeDiff="5 - 6 týdny"
      capacity={30}
      accreditation={true}
    />
  )
}