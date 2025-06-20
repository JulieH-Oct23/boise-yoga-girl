import NavigateButton from "../components/NavigateButton";
import styles from "./YinPage.module.css";

const YinPage = () => (
  <div className={styles.container}>
    <div className={styles.home}>
      <h1>Yin Yoga Sequences</h1>
      <p>Welcome to the Boise Yoga Girl Yoga Hub</p>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/posepage">Yin Sequence #1 - Hips</NavigateButton>
        <NavigateButton to="/powerpage">Yin Sequence #2 - Shoulders</NavigateButton>
        <NavigateButton to="/restorativepage">Yin Sequence #3 - Focus</NavigateButton>
      </div>
      <NavigateButton to="/">← Back Home</NavigateButton>
    </div>
  </div>
);

export default YinPage;