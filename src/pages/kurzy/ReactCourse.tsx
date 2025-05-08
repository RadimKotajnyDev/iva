import type {FC} from "react";
import {Course} from "@/components/Course.tsx";

export const ReactCourse: FC = () => {
  return (
    <Course
      heading="React"
      description="React je knihovna pro tvorbu uživatelských rozhraní pro webové aplikace. Její významná vlastností jsou dynamické typové systémy, asynchronní a asynchronní programování, a jeho velký rozsah technologií a knihoven, které jej umožňují."
      images={[]}
    />
  )
}