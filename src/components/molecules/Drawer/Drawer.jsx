import React from "react";
import styles from "./drawer.module.css";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
const Drawer = ({ show, children, onClose }) => {
  return (
    <div
      className={`${styles.drawer} ${show && styles.show}`}
      onClick={onClose}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.close} onClick={onClose}>
            <Icon size="2rem" type={"close"} />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
