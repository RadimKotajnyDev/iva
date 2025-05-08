import {Marquee} from "@/components/magicui/marquee.tsx";
import type {FC} from "react";

export const PageBar: FC = () => {
  return (
    <Marquee className="h-7 text-sm bg-secondary items-center text-primary font-bold hidden md:flex" repeat={10}>
      <p>Důležitá informace</p>
      <p className="mx-52">Nový kurz každý pátek v <time>14:00</time></p>
    </Marquee>
  )
}