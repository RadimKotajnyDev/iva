import {Course} from "@/components/Course/Course.tsx";
import type {FC} from "react";

export const CryptoCourse: FC = () => {
  return (
    <Course
      heading="Crypto"
      description="Tento kurz je zaměřen na základy kryptoměn a technologie blockchainu a je určen pro každého, kdo chce porozumět tomu, jak fungují digitální měny a decentralizované systémy. Účastníci se seznámí s principy kryptografie, historií kryptoměn, fungováním blockchainu, těžbou, validací transakcí a rozdíly mezi jednotlivými kryptoměnami jako jsou Bitcoin, Ethereum a další altcoiny. Kurz dále pokrývá témata jako jsou peněženky, burzy, bezpečné uchovávání aktiv, DeFi (decentralizované finance), NFT a aktuální trendy ve světě digitálních aktiv. Vysvětlíme si také, jak vyhodnocovat rizika, jak číst whitepapery a na co si dát pozor při investování. Kurz je vhodný pro úplné začátečníky i mírně pokročilé uživatele, kteří chtějí získat pevný základ a orientaci ve světě kryptoměn. Výuka probíhá online a kombinuje výklad, interaktivní materiály a praktické ukázky. Doporučená doba studia je tři až čtyři týdny, s časovou dotací zhruba tři hodiny týdně."
      images={[
        {
          src: "https://static.news.bitcoin.com/wp-content/uploads/2025/05/cz-buy-bitcoin-before-governments.jpg",
          alt: "Crypto",
          name: "1. obrázek s Crypto",
        }
      ]}
      timeDiff="3 - 4týdny"
      capacity={40}
      accreditation={false}
    />
  )
}