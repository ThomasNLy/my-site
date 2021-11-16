import React from "react";
import useMouseLocation from "../custom-hooks/useMouseLocation";

import "./CustomCursor.css";
function CustomCursor() {
  const position = useMouseLocation();
  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
}
export default CustomCursor;
