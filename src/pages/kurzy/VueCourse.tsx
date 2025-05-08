import type {FC} from "react";
import {Course} from "@/components/Course.tsx";

export const VueCourse: FC = () => {
  return (
    <Course
      heading="Vue"
      description="Vue je knihovna pro tvorbu uživatelských rozhraní pro webové aplikace. Její významná vlastností jsou dynamické typové systémy, asynchronní a asynchronní programování, a jeho velký rozsah technologií a knihoven, které jej umožňují."
      images={[]}
    />
  )
}