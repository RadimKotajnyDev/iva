import type {ReactNode} from "react";

export type RouteType = {
  displayName: string,
  ignore: boolean,
  path: string,
  element: ReactNode,
  subRoutes?: RouteType[],
}