import React from "react";
import styles from "./styles.module.css";
import LogoImg from "@assets/Logo.svg";
const Logo = () => {
  return <img src={LogoImg} alt="Logo" className={styles.logo} />;
};

export default Logo;
