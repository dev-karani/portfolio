"use client"
import React, { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

export default function EmblaCarousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full h-full">
      {/* Carousel viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {React.Children.map(children, (child, i) => (
            <div
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4"
              key={i}
            >
              <div className="h-full">{child}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>
    </div>
  )
}
