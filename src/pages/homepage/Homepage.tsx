import type {FC} from "react";
import {ImageGrid} from "@/components/ImageGrid.tsx";
import {NumberTicker} from "@/components/magicui/number-ticker.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {BlurFade} from "@/components/magicui/blur-fade.tsx";
import {GoPerson} from "react-icons/go";
import {IoHappyOutline, IoSchoolOutline} from "react-icons/io5";
import {MdAccessTime} from "react-icons/md";

export const Homepage: FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mx-5 md:mx-0">
      <BlurFade delay={0.25} inView>
        <header className="flex flex-col gap-2 flex-1 h-full">
          <hgroup>
            <h1 className="text-4xl md:text-5xl">
              Vyber si <span className="underline underline-offset-4 decoration-accent">online</span> kurz, <br/> který
              nastartuje tvou kariéru
            </h1>
            <h2 className="text-sm md:text-lg text-gray-300 mt-2">
              IVA je moderní vzdělávací agentura zaměřená na podporu studentů, <br/> profesionálů i těch, kteří chtějí změnit směr své kariéry.
              <br/>Věříme, že vzdělávání není povinnost, ale příležitost. <br/> A my jsme tu od toho, abychom vám pomohli ji naplno využít.
            </h2>
          </hgroup>
          <main className="my-10">
            <Card>
              <CardHeader>
                <h2 className="text-xl md:text-3xl font-semibold">
                  Naše statistika
                </h2>
              </CardHeader>
              <CardContent>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={100}
                    className="whitespace-pre-wrap text-xl md:text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-lg md:text-2xl">+ kurzů online</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={500}
                    className="whitespace-pre-wrap text-xl md:text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-lg md:text-2xl">+ recenzí online</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={95}
                    className="whitespace-pre-wrap text-xl md:text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-lg md:text-2xl">% spokojených zákazníků</p>
                </div>
                <div className="text-primary-foreground flex items-center">
                  <NumberTicker
                    value={100}
                    className="whitespace-pre-wrap text-xl md:text-3xl font-medium tracking-tighter text-primary-foreground"
                  />
                  <p className="text-lg md:text-2xl">% uplatnění na trhu práce</p>
                </div>
              </CardContent>
            </Card>
          </main>
          <footer className="flex flex-1 items-end text-primary-foreground">
            <div className="flex flex-row text-center gap-5">
              <div className="flex flex-col items-center justify-center gap-1">
                <GoPerson size={50}/>
                Osobní přístup
              </div>
              <div  className="flex flex-col items-center justify-center gap-1">
                <IoSchoolOutline size={50} />
                Spolupráce s kvalitními školami a institucemi</div>
              <div  className="flex flex-col items-center justify-center gap-1">
                <IoHappyOutline size={50} />
                Důraz na motivaci a dlouhodobý rozvoj</div>
              <div  className="flex flex-col items-center justify-center gap-1">
                <MdAccessTime size={50} />
                Flexibilita – přizpůsobíme se vám</div>
            </div>
          </footer>
        </header>
      </BlurFade>
      <div className="w-[600px]">
        <ImageGrid/>
      </div>
    </section>
  )
}