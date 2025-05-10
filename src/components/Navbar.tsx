import {type FC, useState} from "react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {IoIosMenu} from "react-icons/io";
import {flattenRoutes} from "@/routing/RouteFunctions.tsx";
import {ConfettiButton} from "@/components/magicui/confetti.tsx";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const flatRoutes = flattenRoutes(routes);

  return (
    <>
      <nav className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Iva logo" className="h-20 p-3 rounded-full w-auto" />
          <h1 className="text-3xl font-semibold text-primary-foreground md:block hidden">IVA</h1>
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
                          <Button asChild key={subRoute.path} className="w-full">
                            <Link key={subRoute.path} to={subRoute.path} className="w-full">
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
            <ConfettiButton
              options={{
                get angle() {
                  return Math.floor(Math.random() * (250 - 170 + 1)) + 170;
                },
              }}>
              Můj účet
            </ConfettiButton>
          </li>
        </ul>
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
            <DrawerTrigger asChild>
              <IoIosMenu size={30} className="mr-4 hover:cursor-pointer text-secondary" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                {flatRoutes
                  .filter((route) => !route.ignore)
                  .filter((route) => route.displayName !== "Kurzy")
                  .map((route) => (
                    <Button asChild key={route.path} size="lg" variant="outline" onClick={() => setIsOpen(!isOpen)}>
                      <Link to={route.path}>{route.displayName}</Link>
                    </Button>
                ))}
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>zavřít</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  )
}