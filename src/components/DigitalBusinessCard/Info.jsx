import React from "react";
import s from "../css/DigitalCard.module.css";
import profile from "../DigitalBusinessCard/profile.jpg";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Interests from "../DigitalBusinessCard/Interests";
import Footer from "../DigitalBusinessCard/Footer";

function Info() {
  return (
    <div>
      <div className={s.img__container}>
        <img className={s.profile} src={profile} alt="profilePhoto" />
        <div className={s.details__container}>
          <div className={s.info__name}>John Patrick Torio</div>
          <div className={s.job}>Front-end Developer</div>
          <div className={s.website}> jpstorio.com </div>
          <div className={s.links__container}>
            <a className={s.email} href="/">
              <BsLinkedin className={s.icons} />
              Email
            </a>
            <a className={s.linkedIn} href="/">
              <MdEmail className={s.icons} />
              LinkedIn
            </a>
          </div>
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Info;
