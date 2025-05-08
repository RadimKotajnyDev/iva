import {Homepage} from "@/pages/homepage/Homepage.tsx";
import {JavascriptCourse} from "@/pages/kurzy/JavascriptCourse.tsx";
import type {RouteType} from "@/types/RouteType.tsx";
import {ReactCourse} from "@/pages/kurzy/ReactCourse.tsx";
import {VueCourse} from "@/pages/kurzy/VueCourse.tsx";
import {SvelteCourse} from "@/pages/kurzy/SvelteCourse.tsx";
import {UIUXDesign} from "@/pages/kurzy/UIUXDesign.tsx";
import {DotNETcourse} from "@/pages/kurzy/DotNETcourse.tsx";
import {CryptoCourse} from "@/pages/kurzy/CryptoCourse.tsx";
import {Kontakty} from "@/pages/Kontakty.tsx";

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
        element: <ReactCourse />,
      },
      {
        displayName: "Vue",
        ignore: false,
        path: "/kurzy/vue",
        element: <VueCourse />,
      },
      {
        displayName: "Svelte",
        ignore: false,
        path: "/kurzy/svelte",
        element: <SvelteCourse />,
      },
      {
        displayName: ".NET",
        ignore: false,
        path: "/kurzy/dotnet",
        element: <DotNETcourse />,
      },
      {
        displayName: "UX/UI Design",
        ignore: false,
        path: "/kurzy/ux-ui-design",
        element: <UIUXDesign />,
      },
      {
        displayName: "Crypto",
        ignore: false,
        path: "/kurzy/zadna-pyramida-hehe",
        element: <CryptoCourse />,
      }
    ]
  },
  {
    displayName: "Kontakt",
    ignore: false,
    path: "/kontakt",
    element: <Kontakty />,
  },
]