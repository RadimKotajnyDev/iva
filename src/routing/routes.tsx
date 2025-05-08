import {Homepage} from "@/pages/homepage/Homepage.tsx";
import {JavascriptCourse} from "@/pages/kurzy/javascriptCourse.tsx";
import type {RouteType} from "@/types/RouteType.tsx";

export const routes: RouteType[] = [
  {
    displayName: "",
    ignore: true,
    path: "/",
    element: <Homepage />,
  },
  {
    displayName: "O nás",
    ignore: false,
    path: "/o-nas",
    element: <></>,
  },
  {
    displayName: "Kurzy",
    ignore: false,
    path: "/kurzy",
    element: <></>,
    subRoutes: [
      {
        displayName: "Javascript",
        ignore: false,
        path: "/kurzy/javascript",
        element: <JavascriptCourse />,
      },
      {
        displayName: "React",
        ignore: false,
        path: "/kurzy/react",
        element: <></>,
      },
      {
        displayName: "Vue",
        ignore: false,
        path: "/kurzy/vue",
        element: <></>,
      },
      {
        displayName: "Svelte",
        ignore: false,
        path: "/kurzy/svelte",
        element: <></>,
      },
      {
        displayName: "TypeScript",
        ignore: false,
        path: "/kurzy/typescript",
        element: <></>,
      },
      {
        displayName: "Node.js",
        ignore: false,
        path: "/kurzy/nodejs",
        element: <></>,
      },
      {
        displayName: "MongoDB",
        ignore: false,
        path: "/kurzy/mongodb",
        element: <></>,
      }
    ]
  },
  {
    displayName: "Kontakt",
    ignore: false,
    path: "/kontakt",
    element: <></>,
  },
]