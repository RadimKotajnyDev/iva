import {type FC, useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import {routes as initialRoutes} from "@/routing/routes.tsx";
import {AppLayout} from "@/layouts/AppLayout.tsx";
import {NotFound} from "@/pages/404/NotFound.tsx";
import {flattenRoutes} from "@/routing/RouteFunctions.tsx";

export const Router: FC = () => {

  const mergedRoutes = useMemo(
    () => flattenRoutes(initialRoutes)
    , []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route element={<AppLayout/>}>
          {mergedRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}/>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}