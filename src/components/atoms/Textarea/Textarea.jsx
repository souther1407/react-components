import React from "react";
import styles from "./textarea.module.css";
import Text from "../Text/Text";
import { useColorModeStore } from "../../../stores/useColorModeStore";
const Textarea = ({
  id,
  onChange,
  variant = "primary",
  onError,
  label = "",
  size = "100%",
  errorValue,
  validators = [],
  ...otherProps
}) => {
  const mode = useColorModeStore((state) => state.mode);
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
    onError(id, error);
  };
  return (
    <div
      className={`${styles.textarea} ${styles[mode]} ${styles[variant]} ${
        styles.container
      } ${errorValue ? styles.error : ""}`}
    >
      {label && <Text size={"ty"}>{label}</Text>}
      <textarea
        style={{ width: size }}
        id={id}
        className={styles.input}
        onChange={handleChange}
        {...otherProps}
      ></textarea>
    </div>
  );
};

export default Textarea;
