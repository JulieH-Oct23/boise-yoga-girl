import NavigateButton from "../components/NavigateButton";
import styles from "./YinPage.module.css";

const YinPage = () => (
  <div className={styles.container}>
    <div className={styles.home}>
      <h1>Yin Yoga Sequences</h1>
      <p>Add Description of Yin Yoga</p>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/yinpage/sequence1">Yin Sequence #1 - Hips</NavigateButton>
        <NavigateButton to="/yinpage/sequence2">Yin Sequence #2 - Shoulders</NavigateButton>
      </div>
      <NavigateButton to="/">← Back Home</NavigateButton>
    </div>
  </div>
);

export default YinPage;