import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./iconTextButton.module.css";
import Icon from "../../atoms/Icon/Icon";
import { useColorModeStore } from "../../../stores/useColorModeStore";

const IconTextButton = ({
  variant = "primary",
  size = "auto",
  icon,
  onClick,
  children,
  ...otherProps
}) => {
  const mode = useColorModeStore((state) => state.mode);
  return (
    <button
      style={{ width: size }}
      className={`${styles[mode]} ${styles.iconTextButton} ${styles[variant]}`}
      onClick={onClick}
      {...otherProps}
    >
      {icon && <Icon size={"1rem"} type={icon} />}
      <p>{children}</p>
    </button>
  );
};

export default IconTextButton;
