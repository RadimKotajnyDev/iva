import type {FC} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <section>
      <header>
        <h1>{heading}</h1>
      </header>
      <main>
        <Carousel>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.name}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <footer>
        <p>{description}</p>
      </footer>
    </section>
  )
}