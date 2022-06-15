import aStyles from "../css/AirBnb.module.css";
import logo from "../airbnb-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} className={aStyles.nav__logo} />
      </nav>
    </>
  );
};

export default Navbar;
