import {Course} from "@/components/Course.tsx";
import type {FC} from "react";

export const JavascriptCourse: FC = () => {
  return (
    <Course
      heading="Javascript"
      description="Javascript je jednou z největších programovacích jazyků na světě. Jeho významná vlastností jsou dynamické typové systémy, asynchronní a asynchronní programování, a jeho velký rozsah technologií a knihoven, které jej umožňují."
      images={[
        {
          src: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Javascript",
          name: "1",
        }]}
    />
  )
}