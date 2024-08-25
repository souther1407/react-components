import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import {
  FaInfoCircle,
  FaWhatsapp,
  FaTimes,
  FaCheck,
  FaBars,
} from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./icon.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaPlay } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowSquareOutBold } from "react-icons/pi";
const Icon = ({ type, size, color = "inherit" }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
    color,
  };
  const icons = {
    send: <RiSendPlaneLine {...props} />,
    wp: <FaWhatsapp {...props} />,
    info: <FaInfoCircle {...props} />,
    diamond: <IoDiamondOutline {...props} />,
    close: <FaTimes {...props} />,
    check: <FaCheck {...props} />,
    bars: <FaBars {...props} />,
    arrow: <MdArrowForwardIos {...props} />,
    linkedin: <FaLinkedin {...props} />,
    facebook: <FaFacebook {...props} />,
    instagram: <FaInstagram {...props} />,
    medal: <BiSolidMedal {...props} />,
    warning: <CiWarning {...props} />,
    arrowFoward: <IoIosArrowForward {...props} />,
    arrowSquare: <PiArrowSquareOutBold {...props} />,
    play: <FaPlay {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
