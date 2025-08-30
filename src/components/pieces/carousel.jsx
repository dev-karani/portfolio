"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import Card from "./cardWide"

export default function EmblaCarousel({children}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start", // alignment at the start
    slidesToScroll: 1,
    slideSize:"auto",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla ">
      {/* Viewport */}
      <div className="embla__viewport h-[90%]" ref={emblaRef}>
        <div className="embla__container w-full">
          {children}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between">
        <button
          onClick={scrollPrev}
          className=" px-4 py-2 hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          className="px-4 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  )
}
