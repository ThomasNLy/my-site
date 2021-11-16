import { useState, useEffect } from "react";

function useMouseLocation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  function mouseMoveHandler(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  return position;
}

export default useMouseLocation;
