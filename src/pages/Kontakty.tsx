import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC } from "react";
import { MagicCard } from "@/components/magicui/magic-card.tsx";

export const Kontakty: FC = () => {
  return (
    <div className="flex w-full justify-center">
      <Card className="p-0 max-w-sm w-full shadow-none border-none">
        <MagicCard
          gradientColor=""
          className="p-0"
        >
          <CardHeader className="border-b border-border p-8 [.border-b]:pb-4">
            <CardTitle>Kontaktní formulář</CardTitle>
            <CardDescription>
              Vyplňte vaše údaje a my se vám ozveme co nejdříve
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 ">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Jméno</Label>
                  <Input id="name" type="text" placeholder="Vaše jméno" className="border-primary"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@priklad.cz" className="border-primary" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Zpráva</Label>
                  <textarea id="message" placeholder="Vaše zpráva" className="w-full border border-primary rounded-md p-4"></textarea>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="py-4 px-8 border-t border-border [.border-t]:pt-4">
            <Button className="w-full">Odeslat</Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
}