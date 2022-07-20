/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div style={{ border: "2px solid black" }}>
      {isVisible && (
        <div onClick={handleScrollToTop}>
          <h3>Go up!</h3>
        </div>
      )}
    </div>
  );
}
