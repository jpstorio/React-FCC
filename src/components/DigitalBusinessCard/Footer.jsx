import React from "react";
import s from "../css/DigitalCard.module.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={s.footer__container}>
      <FaTwitterSquare className={s.icons__footer} />
      <FaFacebookSquare className={s.icons__footer} />
      <FaInstagramSquare className={s.icons__footer} />
      <FaGithubSquare className={s.icons__footer} />
    </div>
  );
}

export default Footer;
