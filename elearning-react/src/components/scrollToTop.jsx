// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Force-remove Bootstrap's leftover styles
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }, [pathname]);

  return null;
};

export default ScrollToTop;
