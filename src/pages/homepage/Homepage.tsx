import type {FC} from "react";
import {ImageGrid} from "@/components/ImageGrid.tsx";
import {NumberTicker} from "@/components/magicui/number-ticker.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {BlurFade} from "@/components/magicui/blur-fade.tsx";

export const Homepage: FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-10">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-primary-foreground">
            Vyber si <span className="underline underline-offset-4 decoration-accent">online</span> kurz, <br/> který
            nastartuje tvou kariéru
          </h1>
          <article className="text-lg text-muted-foreground">
            Jsme IVA <span className="italic capitalize text-sm">(imaginární vzdělávací agentura)</span>,
            největší vzdělávácí <br/> a rekvalifikační agentura v České republice.
          </article>
          <section className="mt-18">
            <Card>
              <CardHeader>
                <h2 className="text-3xl font-semibold">
                  Naše statistika
                </h2>
              </CardHeader>
              <CardContent>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={100}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-2xl">+ kurzů online</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={500}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-2xl">+ recenzí online</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={95}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-2xl">% spokojených zákazníků</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={100}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-2xl">% uplatnění na trhu práce</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </BlurFade>
      <div className="w-[600px]">
        <ImageGrid/>
      </div>
    </section>
  )
}