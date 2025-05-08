import type {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import {routes} from "@/routing/routes.tsx";
import {AppLayout} from "@/layouts/AppLayout.tsx";
import {NotFound} from "@/pages/404/NotFound.tsx";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route element={<AppLayout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}