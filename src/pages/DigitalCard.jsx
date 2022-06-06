import Info from "../components/DigitalBusinessCard/Info"; 
import styles from "../components/css/DigitalCard.module.css";

function DigitalCard() {
  return (
    <div className={styles.card__container}>
      <Info /> 
    </div>
  );
}

export default DigitalCard;
