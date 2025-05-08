import type {RouteType} from "@/types/RouteType.tsx";

export const flattenRoutes = (routes: RouteType[]): RouteType[] => {
  return routes.reduce<RouteType[]>((acc, route) => {
    acc.push(route);
    if (route.subRoutes) {
      acc.push(...flattenRoutes(route.subRoutes));
    }
    return acc;
  }, []);
};