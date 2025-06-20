import NavigateBackButton from "../components/NavigateBackButton";
import NavigateButton from "../components/NavigateButton";
import styles from "./HomePage.module.css";

const HomePage = () => (
<div className={styles.home}>
    <h1>Boise Yoga Girl</h1>
    <p>Welcome to the Boise Yoga Girl Yoga Hub</p>
    <div className={styles.buttonGroup}>
    <NavigateButton to="/posepage">All Poses</NavigateButton>
    <NavigateButton to="/powerpage">Power Yoga</NavigateButton>
    <NavigateButton to="/restorativepage">Restorative Yoga</NavigateButton>
    <NavigateButton to="/yinpage">Yin Yoga</NavigateButton>
    </div>
    <NavigateBackButton />
</div>
);

export default HomePage;