import type {FC} from "react";
import {Course} from "@/components/Course/Course.tsx";

export const DotNETcourse: FC = () => {
  return (
    <Course
      heading="DotNET"
      description="Tento kurz je zaměřen na vývoj aplikací v .NET, moderní multiplatformní framework od Microsoftu pro tvorbu webových, desktopových a serverových aplikací. Účastníci se seznámí se základy jazyka C#, strukturou .NET aplikací a způsobem, jak efektivně vytvářet konzolové a webové aplikace pomocí ASP.NET Core. Kurz zahrnuje práci s objekty, kolekcemi, třídami, rozhraními, výjimkami, asynchronním programováním a základními principy OOP. Dále se probírá tvorba REST API, připojení k databázi přes Entity Framework Core, migrace, validace dat a jednoduché autentizační mechanismy. Kurz je určen pro začátečníky a mírně pokročilé vývojáře, kteří chtějí vstoupit do světa vývoje v .NET a naučit se vytvářet robustní, výkonné a škálovatelné aplikace. Výuka probíhá online a je doplněna praktickými úkoly a projektem. Doporučená délka studia je čtyři až šest týdnů, s časovou náročností přibližně čtyři hodiny týdně."
      images={[
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
          alt: "DotNET",
          name: "1. obrázek s DotNET",
        }
      ]}
      timeDiff="3 - 4 týdny"
      capacity={15}
      accreditation={true}
      />
  )
}