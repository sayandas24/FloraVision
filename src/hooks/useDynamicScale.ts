import { useEffect, useRef } from "react";

export const useDynamicScale = (
  originalWidth: number,
  originalHeight: number,
  maxWeidth?: number,
) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current || !innerRef.current) return;

      const isBelowThreshold =
        !maxWeidth || window.innerWidth < maxWeidth;

      if (isBelowThreshold) {
        const wrapperWidth = wrapperRef.current.offsetWidth;
        const scale = wrapperWidth / originalWidth;
        innerRef.current.style.transform = `scale(${scale})`;
        wrapperRef.current.style.height = `${originalHeight * scale}px`;
      } else {
        innerRef.current.style.transform = "";
        wrapperRef.current.style.height = "";
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [originalWidth, originalHeight, maxWeidth]);

  return { wrapperRef, innerRef };
};
