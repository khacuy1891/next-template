'use client';
import { useEffect, useState } from 'react';
import { Carousel, CarouselApi, CarouselContent } from './ui/carousel';

export default function CarouselWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <section className="w-full">
        <Carousel opts={{ containScroll: false }} setApi={setApi}>
          <CarouselContent className="md:min-h-125">{children}</CarouselContent>
        </Carousel>
      </section>
      <div className="flex gap-3 mt-4 justify-center">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className={`w-10 h-1.5 rounded-full ${idx + 1 === current ? 'bg-primary' : 'dark:bg-white/30 bg-red-200'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
