import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
const Select = ({
  elements = [],
  id,
  size = "100%",
  value,
  onError,
  variant = "primary",
  icon,
  listPosition = "bottom",
  onChange,
  label,
  placeholder,
  onClear = () => {},
}) => {
  const [show, setShow] = useState(false);
  const btn = useRef();
  const handleChange = (value) => {
    onChange(id, value);
    setShow(false);
  };
  const handleClear = (e) => {
    onClear(id);
    setShow(false);
    e.stopPropagation();
  };
  const handleClick = () => {
    setShow((prev) => !prev);
    btn.current.focus();
  };
  const handleCloseOnBlur = (e) => {
    setShow(false);
  };
  useEffect(() => {
    onError(id, !value ? "ingrese un valor por favor" : "");
  }, [value]);
  return (
    <a
      className={`${styles[variant]} ${styles.select}`}
      style={{ width: size }}
      href="#"
      onBlur={handleCloseOnBlur}
    >
      {label && <Text size={"ty"}>{label}</Text>}
      <div className={styles.header} onClick={handleClick}>
        <div className={styles.placeholder}>
          <Text size="ty" bold={!value && "font-light"}>
            {value || placeholder}
          </Text>
          {icon && (
            <div className={styles.icon}>
              <Icon size={"1rem"} type={icon} />
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className={`${styles.elementsList} ${styles[listPosition]}`}>
          <div className={styles.subElementList}>
            {elements.map((e) => (
              <div className={styles.hover}>
                <Text onClick={() => handleChange(e)}>{e}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </a>
  );
};

export default Select;
