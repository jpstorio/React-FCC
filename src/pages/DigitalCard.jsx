import Info from "../components/DigitalBusinessCard/Info";
import About from "../components/DigitalBusinessCard/About";
import Interests from "../components/DigitalBusinessCard/Interests";
import Footer from "../components/DigitalBusinessCard/Footer";
import styles from "../components/css/DigitalCard.module.css";

function DigitalCard() {
  return (
    <div className={styles.card__container}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default DigitalCard;
