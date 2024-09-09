import { useEffect, useRef, useState } from "react";
import { IYLBackgroundCarrouselProps } from "./yl-background-carrousel";

export default function useYLCarrousel({
  imgUrls,
  autoplay,
  autoplayDelay,
  inlineSize,
}: IYLBackgroundCarrouselProps) {
  const block = useRef(false);
  const isLeftButtonLastPressed = useRef(false);
  const isRightButtonLastPressed = useRef(false);

  const [selectedSlide, setSelectedSlide] = useState(2);
  const [transitionProperty, setTransitionProperty] = useState("none");
  const [data, setData] = useState([
    imgUrls[imgUrls.length - 2],
    imgUrls[imgUrls.length - 1],
    ...imgUrls,
  ]);
  const [slideWidth, setSlideWidth] = useState(inlineSize);

  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      block.current = true;
    }
    elementRef.current &&
      elementRef.current.addEventListener("transitionstart", handleScroll);
    return () => {
      elementRef.current &&
        elementRef.current.removeEventListener("transitionstart", handleScroll);
    };
  }, [elementRef]);

  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.getBoundingClientRect().width + "px");
    }
    console.log(slideWidth);
  }, [containerRef, slideWidth, setSlideWidth]);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      if (containerRef.current) {
        setSlideWidth(
          containerRef.current.getBoundingClientRect().width + "px"
        );
      }
    });
  }, [containerRef, setSlideWidth]);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        onNextSlide();
        console.log("entre");
      }, autoplayDelay);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  function onPreviousSlide() {
    transitionProperty == "none" && setTransitionProperty("translate");

    isLeftButtonLastPressed.current = true;
    isRightButtonLastPressed.current = false;

    !block.current && setSelectedSlide((n) => n - 1);
  }

  function onNextSlide() {
    transitionProperty == "none" && setTransitionProperty("translate");

    isLeftButtonLastPressed.current = false;
    isRightButtonLastPressed.current = true;

    !block.current && setSelectedSlide((n) => n + 1);
  }
  function onTransitionEnd() {
    if (isRightButtonLastPressed.current && selectedSlide + 1 == data.length) {
      setSelectedSlide(1);
    }
    if (isLeftButtonLastPressed.current && selectedSlide == 0) {
      setSelectedSlide(data.length - 2);
    }
    setTransitionProperty("none");
    block.current = false;
  }

  return {
    elementRef,
    containerRef,
    slideWidth,
    selectedSlide,
    transitionProperty,
    data,
    onTransitionEnd,
    onPreviousSlide,
    onNextSlide,
  };
}
