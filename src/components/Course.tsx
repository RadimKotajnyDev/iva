import type {FC} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {BlurFade} from "@/components/magicui/blur-fade.tsx";

type Props = {
  heading: string,
  description: string,
  images: {
    src: string,
    alt: string,
    name: string,
  }[]
}

export const Course: FC<Props> = ({
                                    heading,
                                    description,
                                    images,
                                  }) => {
  return (
    <BlurFade delay={0.25} inView>
      <section className="flex flex-col justify-center w-full items-center">
        <header className="w-full text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">{heading}</h1>
        </header>
        <main className="flex flex-col md:flex-row mt-5 bg-primary p-10 md:p-20 rounded-xl gap-10">
          <div className="max-w-xs">
            {images.length > 0 &&
            <Carousel>
              <CarouselContent className="flex items-center">
                {images.map((image, index) => (
                  <CarouselItem key={image.name + index}>
                    <img src={image.src} alt={image.alt} className="rounded-sm"/>
                    <p className="text-sm w-full text-center text-muted-foreground">{image.name}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
            }
          </div>
          <article className="max-w-xs">
            <h1 className="text-2xl font-semibold">O kurzu</h1>
            <p>{description}</p>
          </article>
        </main>
        <footer>
        </footer>
      </section>
    </BlurFade>
  )
}