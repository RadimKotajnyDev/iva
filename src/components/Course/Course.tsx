import {type FC, useState} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx"
import {BlurFade} from "@/components/magicui/blur-fade.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {CourseOptions} from "@/components/Course/CourseOptions.tsx";

type Props = {
  heading: string,
  description: string,
  images: {
    src: string,
    alt: string,
    name: string,
  }[],
  timeDiff: string,
  capacity: number,
  accreditation: boolean,
}

export const Course: FC<Props> = ({
                                    heading,
                                    description,
                                    images,
                                    timeDiff,
                                    accreditation,
                                    capacity,
                                  }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col justify-center w-full items-center">
        <section className="bg-primary px-20 py-10 rounded-xl">
          <header className="w-full text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-5">{heading}</h1>
          </header>
          <main className="flex flex-col md:flex-row gap-16">
            <div className="max-w-xs">
              {images.length > 0 && (
                <Carousel>
                  <CarouselContent className="flex items-center">
                    {images.map((image, index) => (
                      <CarouselItem key={image.name + index}>
                        <figure className="flex flex-col gap-2">
                          <img src={image.src} alt={image.alt} className="rounded-sm" />
                          <figcaption className="text-sm w-full text-center text-muted-foreground">
                            {image.name}
                          </figcaption>
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              )}
            </div>
            <article className="max-w-xs">
              <CourseOptions
                accreditation={accreditation}
                capacity={capacity}
                timeDiff={timeDiff}
              />
              <Separator className="my-3" />
              <h1 className="text-xl font-semibold tracking-tight">O kurzu</h1>
              <div className={`relative ${isExpanded ? '' : 'max-h-36 overflow-hidden'}`}>
                <p className="text-sm text-gray-100 tracking-wide">
                  {description}
                </p>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-primary to-transparent"></div>
                )}
              </div>
              <button onClick={toggleExpansion} className="text-secondary mt-1 hover:text-secondary/80 hover:cursor-pointer">
                {isExpanded ? 'Zobrazit méně' : 'Zobrazit více'}
              </button>
            </article>
          </main>
          <footer></footer>
        </section>
      </div>
    </BlurFade>
  )
}