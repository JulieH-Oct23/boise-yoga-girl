import NavigateButton from "../components/NavigateButton";
import styles from "./RestorativePage.module.css";

const RestorativePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Restorative Yoga Sequences</h1>
    <p>Add description of Restorative Yoga</p>

    <div className={styles.poseCard}>
         <NavigateButton to="/restorativepage/sequence1">Restorative Sequence #1 – Full Body</NavigateButton>
    </div>

    <div className={styles.poseCard}>
<NavigateButton to="/restorativepage/sequence2">Restorative Sequence #2 – Shoulders & Neck</NavigateButton>
    </div>

     <NavigateButton to="/">← Back Home</NavigateButton>
  </div>
);

export default RestorativePage;