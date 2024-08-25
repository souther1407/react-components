import React from "react";
import styles from "./title.module.css";
import { useColorModeStore } from "../../../stores/useColorModeStore";

const Title = ({
  type = "title",
  color = "normal",
  size = "md",
  bold = "regular",
  children,
}) => {
  const mode = useColorModeStore((state) => state.mode);
  const classStyles = `${styles[mode]} ${styles[color]} ${styles[bold]} ${styles[size]}`;
  if (type === "title") return <h1 className={classStyles}>{children}</h1>;
  else if (type === "subtitle")
    return <h2 className={classStyles}>{children}</h2>;
};

export default Title;
