import NavigateButton from "../components/NavigateButton";
import styles from "./RestorativePage.module.css";

const RestorativePage = () => (
<div className={styles.home}>
    <h1>Restorative Yoga Sequences</h1>
    <p>Welcome to the Boise Yoga Girl Yoga Hub</p>
    <div className={styles.buttonGroup}>
    <NavigateButton to="/posepage">Yoga for Anxiety</NavigateButton>
    <NavigateButton to="/powerpage">Yoga for Depression</NavigateButton>
    </div>
    <NavigateButton to="/">← Back Home</NavigateButton>
</div>
);

export default RestorativePage;