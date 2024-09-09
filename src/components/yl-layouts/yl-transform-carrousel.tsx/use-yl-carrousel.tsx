import { useEffect, useRef, useState } from "react";
import {
  IYLTransformCarrouselOptions,
  IYLTransformCarrouselProps,
} from "./yl-transform-carrousel";

export default function useYLCarrousel({
  items,
  autoplay,
  autoplayDelay,
  infinite,
  defaultCarrouselOptions,
}: IUseYLTransformCarrouselProps) {
  const block = useRef(false);
  const isLeftButtonLastPressed = useRef(false);
  const isRightButtonLastPressed = useRef(false);

  const [transitionProperty, setTransitionProperty] = useState("all");
  const [data, setData] = useState(
    infinite ? [items[items.length - 1], ...items, items[0]] : [...items]
  );
  const middleIndex = Math.ceil(data.length / 2);

  const [selectedSlide, setSelectedSlide] = useState(
    infinite ? middleIndex - 1 : 0
  );

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
    if (autoplay) {
      const intervalId = setInterval(() => {
        onNextSlide();
      }, autoplayDelay);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [data]);

  function onPreviousSlide() {
    if (!(selectedSlide - 1 <= -1)) {
      transitionProperty == "none" && setTransitionProperty("all");

      isLeftButtonLastPressed.current = true;
      isRightButtonLastPressed.current = false;

      !block.current && setSelectedSlide((n) => n - 1);
    }
  }

  function onNextSlide() {
    !block.current &&
      setSelectedSlide((n) => {
        let value = n;
        if (infinite && !(n + 1 >= data.length - 1)) {
          value = n + 1;
        } else if (!(n + 1 >= data.length)) {
          value = n + 1;
        }

        transitionProperty == "none" && setTransitionProperty("all");

        isLeftButtonLastPressed.current = false;
        isRightButtonLastPressed.current = true;

        return value;
      });
  }

  function onTransitionEnd() {
    if (infinite) {
      if (isRightButtonLastPressed.current) {
        const currentData = [...data];
        let currentElement = currentData[2];
        currentData.shift();
        currentData.push(currentElement);

        setData(currentData);
        setSelectedSlide(middleIndex - 1);
      }
      if (isLeftButtonLastPressed.current) {
        const currentData = [...data];
        let currentElement = currentData[data.length - 1 - 2];
        currentData.pop();
        currentData.unshift(currentElement);

        setData(currentData);
        setSelectedSlide(middleIndex - 1);
      }
    }

    setTransitionProperty("none");
    console.log(transitionProperty);
    block.current = false;
  }

  function handleOpacity(index: number) {
    const visibleItems = defaultCarrouselOptions.visibleItems;
    const visibleItemsHalf = Math.floor(visibleItems / 2);
    if (infinite) {
      if (!isEven(visibleItems)) {
        return index >= selectedSlide - visibleItemsHalf &&
          index <= selectedSlide + visibleItemsHalf
          ? "1"
          : "0";
      } else {
        return index > selectedSlide - visibleItemsHalf &&
          index <= selectedSlide + visibleItemsHalf
          ? "1"
          : "0";
      }
    } else {
      if (selectedSlide + visibleItems > data.length) {
        return index >= data.length - visibleItems &&
          index < selectedSlide + visibleItems
          ? "1"
          : "0";
      } else {
        return index >= selectedSlide && index < selectedSlide + visibleItems
          ? "1"
          : "0";
      }
    }
  }
  function handleFilter(index: number) {
    const visibleItems = defaultCarrouselOptions.visibleItems;
    const visibleItemsHalf = Math.floor(visibleItems / 2);

    if (infinite) {
      if (!isEven(visibleItems)) {
        return index >= selectedSlide - visibleItemsHalf &&
          index <= selectedSlide + visibleItemsHalf
          ? `blur(calc(2px * ${Math.abs(index - selectedSlide)}))`
          : "blur(20px)";
      } else {
        return index > selectedSlide - visibleItemsHalf &&
          index <= selectedSlide + visibleItemsHalf
          ? `blur(calc(2px * ${Math.abs(index - selectedSlide)}))`
          : "blur(20px)";
      }
    } else {
      if (selectedSlide + visibleItems > data.length) {
        return index >= data.length - visibleItems &&
          index < selectedSlide + visibleItems
          ? `blur(calc(4px * ${Math.abs(index - selectedSlide)}))`
          : "blur(40px)";
      } else {
        return index >= selectedSlide && index < selectedSlide + visibleItems
          ? `blur(calc(2px * ${Math.abs(index - selectedSlide)}))`
          : "blur(40px)";
      }
    }
  }

  function isEven(value: number): boolean {
    return value % 2 == 0;
  }

  return {
    elementRef,
    containerRef,

    selectedSlide,
    transitionProperty,
    data,
    middleIndex,
    onTransitionEnd,
    onPreviousSlide,
    onNextSlide,
    handleOpacity,
    handleFilter,
  };
}

export interface IUseYLTransformCarrouselProps
  extends IYLTransformCarrouselProps {
  defaultCarrouselOptions: Required<IYLTransformCarrouselOptions>;
}
