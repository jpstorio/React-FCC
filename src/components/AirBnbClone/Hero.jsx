import aStyles from "../css/AirBnb.module.css";
import logo from "../photo-grid.png";

const Hero = () => {
  return (
    <section>
      <img src={logo} alt="" className={aStyles.hero__photo} />
      <h1 className={aStyles.hero__header}>Online Experiences</h1>
      <p className={aStyles.hero__text}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
