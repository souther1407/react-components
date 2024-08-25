import React, { useEffect, useRef, useState } from "react";
import styles from "./input.module.css";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { useColorModeStore } from "../../../stores/useColorModeStore";
const Input = ({
  id,
  onChange,
  onError,
  variant = "primary",
  label = "",
  icon,
  size = "100%",
  setFocus = false,
  validators = [],
  onEnterPressed = () => {},
  ...otherProps
}) => {
  const input = useRef(null);
  const mode = useColorModeStore((state) => state.mode);
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    handleError(e.target.value);
    onChange(id, e.target.value);
  };

  const handleError = (value) => {
    let error = "";
    for (const validator of validators) {
      error = validator(value);
      if (error) break;
    }
    setErrorMsg(error);
    onError(id, error);
  };
  useEffect(() => {
    if (setFocus) input.current.focus();
    else input.current.blur();
  }, []);
  return (
    <div
      className={`${styles[mode]} ${styles[variant]} ${styles.container} ${
        errorMsg ? styles.error : ""
      }`}
    >
      {icon && (
        <div className={styles.icon}>
          <Icon type={icon} size={"1.4rem"} />
        </div>
      )}

      {label && (
        <Text size={"ty"} color={errorMsg && "error"}>
          {label}
        </Text>
      )}
      <input
        ref={input}
        style={{ width: size }}
        className={styles.input}
        id={id}
        onKeyDown={(e) => {
          e.key === "Enter" && onEnterPressed();
        }}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
