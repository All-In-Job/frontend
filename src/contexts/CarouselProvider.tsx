import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';

type CarouselState = {
  index: number;
  visibleSlide: number;
  isNavDisabled: boolean;
  hasTransition: boolean;
};

type CarouselContextType = {
  carouselState: CarouselState;
  setCarouselState: Dispatch<SetStateAction<CarouselState>>;
};

export const CarouselContext = createContext<CarouselContextType>({
  carouselState: {
    index: 0,
    visibleSlide: 0,
    isNavDisabled: true,
    hasTransition: false,
  },
  setCarouselState: () => {},
});

export const CarouselProvider: FC<PropsWithChildren> = ({ children }) => {
  const [carouselState, setCarouselState] = useState({
    index: 0,
    visibleSlide: 1,
    isNavDisabled: true,
    hasTransition: false,
  });

  return (
    <CarouselContext.Provider value={{ carouselState, setCarouselState }}>
      {children}
    </CarouselContext.Provider>
  );
};
