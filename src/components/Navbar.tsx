import type {FC} from "react";
import {routes} from "@/routing/routes.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const Navbar: FC = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Iva logo" className="h-20 p-3 rounded-full w-auto" />
          <h1 className="text-3xl font-semibold text-primary-foreground md:block hidden">IVA s.r.o.</h1>
          <span className="w-[1px] h-5 bg-primary-foreground xl:block hidden" />
          <h2 className="text-xl text-primary-foreground xl:block hidden">Vzdělávací agentura</h2>
        </Link>
        <ul className="md:flex items-center justify-center hidden gap-3 pr-5">
          {routes
            .filter((route) => !route.ignore)
            .map((route) => !route.subRoutes ? (
              <li key={route.path}>
                <Button size="lg" variant="outline">
                  <Link to={route.path}>{route.displayName}</Link>
                </Button>
              </li>
            ) : (
              <li key={route.path}>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{route.displayName}</NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col gap-3">
                        {route.subRoutes.map((subRoute) => (
                          <Button key={subRoute.path}>
                            <Link key={subRoute.path} to={subRoute.path}>
                              {subRoute.displayName}
                            </Link>
                          </Button>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            ))}
          <li>
            <Button size="lg">
              Můj účet
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}