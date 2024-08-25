import React from "react";
import styles from "./text.module.css";
import { useColorModeStore } from "../../../stores/useColorModeStore";
const getSize = (size) => {
  switch (size) {
    case "big":
      return "2.334rem";
    case "xlg":
      return "1.3334rem";
    case "lg":
      return "1.2rem";
    case "md":
      return "1rem";
    case "sm":
      return "0.88888889rem";
    case "ty":
      return "0.7778rem";
    case "xty":
      return "0.666667rem";
    default:
      return "1rem";
  }
};

const Text = ({
  type = "title",
  color = "normal",
  size = "md",
  bold = "regular",
  children,
  ...otherProps
}) => {
  const mode = useColorModeStore((state) => state.mode);
  return (
    <p
      className={`${styles[mode]} ${styles[color]} ${styles[bold]}`}
      style={{ fontSize: getSize(size) ?? "" }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
