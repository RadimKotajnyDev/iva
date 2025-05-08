import {type FC, StrictMode} from "react";
import {Router} from "@/routing/Router.tsx";

export const AppWrappers: FC = () => {
  return (
    <StrictMode>
      <Router/>
    </StrictMode>
  )
}