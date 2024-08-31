"use client";

import "./base.css";

import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export default forwardRef(function YLMenu(
  {
    className,
    children,
    parentElement,
    offset = [0, 0],
    anchor = AnchorPosition.bottom,
  }: {
    className?: string;
    children?: ReactNode;
    parentElement?: MutableRefObject<HTMLElement | { ref: HTMLElement } | null>;
    offset?: [number, number];
    anchor?: AnchorPosition;
  },
  ref
) {
  const [isMenu, setIsMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const currentBoundingRect = useRef({ x: 0, y: 0 });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  let parentElementRef: HTMLElement;

  const [menuStyle, setMenuStyle] = useState<IYLMenuStyle>({
    "--yl-menu-inline-size": "auto",
    "--yl-menu-block-size": "auto",
  });

  useEffect(() => {
    if (parentElement) {
      if (parentElement.current) {
        if (parentElement.current instanceof HTMLElement) {
          parentElementRef = parentElement.current;
        } else {
          parentElementRef = parentElement.current.ref;
        }
        parentElementRef.addEventListener("click", onClickMenu);
      }
    } else {
      if (menuRef.current) {
        if (menuRef.current.parentElement) {
          parentElementRef = menuRef.current.parentElement;

          parentElementRef.addEventListener("click", onClickMenu);
        }
      }
    }
  }, [parentElement, menuRef]);

  useImperativeHandle(
    ref,
    () => {
      return {
        close: () => {
          setIsMenu(false);
          setIsVisible(false);
        },
      };
    },
    [setIsMenu, setIsVisible]
  );

  return (
    <div ref={menuRef} className="yl-menu">
      {isMenu &&
        createPortal(
          <div className="yl-menu-container-background">
            <div
              className="yl-menu-close-area"
              onClick={(e) => onCloseMenu(e)}
            ></div>
            <div
              ref={menuContainerRef}
              className={`yl-menu-container ${className || ""} ${
                isVisible ? "visible" : ""
              }`}
              style={{
                ...menuStyle,
                top: currentBoundingRect.current.y,
                left: currentBoundingRect.current.x,
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </div>
  );

  function onClickMenu(e: MouseEvent) {
    e.stopPropagation();

    if (parentElementRef) {
      switch (anchor) {
        case AnchorPosition.top:
          setTimeout(() => {
            const { x, y, height, width } =
              parentElementRef.getBoundingClientRect();

            setMenuStyle({
              ...menuStyle,
              "--yl-menu-inline-size": width + "px",
            });

            const menuHeight = menuContainerRef.current?.getBoundingClientRect()
              .height as number;

            currentBoundingRect.current.x = x + offset[0];
            currentBoundingRect.current.y = y - menuHeight + offset[1];

            setIsVisible(true);
          }, 10);

          break;

        case AnchorPosition.bottom:
          setTimeout(() => {
            const { x, y, height, width } =
              parentElementRef.getBoundingClientRect();

            setMenuStyle({
              ...menuStyle,
              "--yl-menu-inline-size": width + "px",
            });

            const menuHeight = menuContainerRef.current?.getBoundingClientRect()
              .height as number;

            currentBoundingRect.current.x = x + offset[0];
            currentBoundingRect.current.y = y + height + offset[1];

            setIsVisible(true);
          }, 10);

          break;
      }

      setIsMenu(true);
    }
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setIsMenu(false);
    setIsVisible(false);
    // setTimeout(() => {
    //   setIsMenu(false);
    //   setIsVisible(false);
    // }, 100);
  }
});

interface IYLMenuStyle {
  "--yl-menu-inline-size": string;
  "--yl-menu-block-size": string;
}

export enum AnchorPosition {
  top = "top",
  bottom = "bottom",
}
