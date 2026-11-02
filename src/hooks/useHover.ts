import { useState, useRef, useEffect } from "react";

function useHover<T extends HTMLElement = HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return [ref, isHovered];
}

export default useHover;
