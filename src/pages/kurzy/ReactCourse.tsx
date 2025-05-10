import type {FC} from "react";
import {Course} from "@/components/Course/Course.tsx";

export const ReactCourse: FC = () => {
  return (
    <Course
      heading="React"
      description="Tento kurz se zaměřuje na React, jednu z nejpopulárnějších knihoven pro tvorbu moderních webových uživatelských rozhraní. Účastníci se naučí základní principy Reactu, včetně komponent, props, stavů (state) a práce s událostmi. Kurz dále pokrývá koncepty jako je správa formulářů, podmíněné vykreslování, seznamy a klíče, použití efektů pomocí hooku useEffect a práce s kontextem pro správu stavů napříč aplikací. Vysvětlíme si také, jak pracovat s Create React App, jak strukturovat větší projekty a jak navazovat komunikaci se vzdáleným API. Kurz je určen pro vývojáře, kteří ovládají základy JavaScriptu a chtějí se naučit vytvářet dynamické, rychlé a škálovatelné webové aplikace. Výuka probíhá online, zahrnuje praktická cvičení i menší projekt. Doporučená doba studia je pět týdnů, přibližně čtyři až pět hodin týdně."
      images={[
        {
          src: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
          alt: "React",
          name: "1. obrázek s Reactem",
        }

      ]}
      timeDiff="5 týdnů"
      capacity={15}
      accreditation={true}
    />
  )
}