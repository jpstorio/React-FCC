import styles from '../components/css/App.module.css';
import Footer from "../components/Test/Footer";
import Header from "../components/Test/Header";
import MainContent from "../components/Test/MainContent";

function Test() {
  return (
    <div className={styles.App}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Test;
