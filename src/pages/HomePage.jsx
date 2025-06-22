import NavigateButton from "../components/NavigateButton";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.home}>
    <div className={styles.introSection}>
  <h2 className={styles.sectionTitle}>🌟 Welcome</h2>
  <p className={styles.introText}>
    This application has been designed to help yoga teachers reference poses, indications, cues, and create sequences where yoga teachers can keep notes, meditations, and playlists all in one location.
  </p>
</div>
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Reference</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/posepage">Yoga Poses</NavigateButton>
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Instruction</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/powerpage">Power Yoga Classes</NavigateButton>
        <NavigateButton to="/yinpage">Yin Yoga Classes</NavigateButton>
        <NavigateButton to="/restorativepage">Restorative Yoga Classes</NavigateButton>
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Sequence</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/sequencepage">Sequence Yoga Flows</NavigateButton>
      </div>
    </div>
  </div>
);

export default HomePage;