import NavigateButton from "../components/NavigateButton";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <main className="app-main">
    <section className={styles.introSection}>
      <h2 className={styles.sectionTitleWelcome}>🌟 Welcome 🌟 </h2>
      <p className={styles.introText}>
        This application has been designed to help yoga teachers reference poses, indications, cues, and create sequences where yoga teachers can keep notes, meditations, and playlists all in one location.
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Reference</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/posepage">Yoga Poses</NavigateButton>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Instruction</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/powerpage">Power Yoga Classes</NavigateButton>
        <NavigateButton to="/yinpage">Yin Yoga Classes</NavigateButton>
        <NavigateButton to="/restorativepage">Restorative Yoga Classes</NavigateButton>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Sequence</h2>
      <div className={styles.buttonGroup}>
        <NavigateButton to="/sequencepage">Sequence Yoga Flows</NavigateButton>
      </div>
    </section>
  </main>
);

export default HomePage;