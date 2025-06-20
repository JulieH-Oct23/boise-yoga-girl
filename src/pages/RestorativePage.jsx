import NavigateButton from "../components/NavigateButton";
import styles from "./RestorativePage.module.css";

const RestorativePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Restorative Yoga Sequences</h1>
    <p>Welcome to the Boise Yoga Girl Yoga Hub</p>

    <div className={styles.poseCard}>
      <NavigateButton to="/posepage">Yoga for Anxiety</NavigateButton>
    </div>

    <div className={styles.poseCard}>
      <NavigateButton to="/powerpage">Yoga for Depression</NavigateButton>
    </div>

     <NavigateButton to="/">← Back Home</NavigateButton>
  </div>
);

export default RestorativePage;