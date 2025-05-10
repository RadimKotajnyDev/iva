import type {FC} from "react";
import {Course} from "@/components/Course/Course.tsx";

export const VueCourse: FC = () => {
  return (
    <Course
      heading="Vue"
      description="Tento kurz je zaměřen na Vue.js, progresivní JavaScriptový framework, který usnadňuje tvorbu moderních webových aplikací. Účastníci se seznámí se základy Vue, jako jsou komponenty, šablony, direktivy, reakce na události a obousměrná vazba dat. Kurz dále pokrývá práci se stavem komponent, výpočtovými vlastnostmi, sledovači změn a způsobem, jak Vue reaguje na úpravy dat. Postupně se přejde i k práci se sloty, dynamickým komponentám a základnímu routingu pomocí knihovny Vue Router. Součástí kurzu je i úvod do správy stavů pomocí Pinia nebo Vuex (v závislosti na zvolené verzi). Kurz je vhodný pro vývojáře, kteří mají základní znalosti JavaScriptu a chtějí se naučit tvořit přehledné, modulární a interaktivní uživatelské rozhraní. Výuka probíhá online a kombinuje výklad s praktickými úlohami a projektem. Doporučená délka studia je čtyři až pět týdnů, s časovou náročností přibližně čtyři hodiny týdně."
      images={[
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
          alt: "Vue",
          name: "1. obrázek s Vue",
        },
        {
          src: "https://v1.vuejs.org/images/mvvm.png",
          alt: "Vue",
          name: "2. Overview",
        }
      ]}
      timeDiff="4 - 5 týdnů"
      capacity={30}
      accreditation={false}
    />
  )
}