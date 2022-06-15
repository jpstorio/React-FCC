import styles from "./components/css/App.module.css";
import AirBnb from "./pages/AirBnb";
//import FactSite from "./pages/FactSite";
//import Test from "./pages/Test";
//import DigitalCard from "./pages/DigitalCard";

function App() {
  return (
    <div className={styles.App}>
      {/* <Test /> */}
      {/* <FactSite /> */}
      {/* <DigitalCard /> */}
      <AirBnb />
    </div>
  );
}

export default App;
