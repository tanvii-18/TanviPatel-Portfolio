import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
};

export default useScrollReveal;
