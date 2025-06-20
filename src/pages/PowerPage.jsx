// src/pages/PowerPage.jsx
import NavigateButton from "../components/NavigateButton";
import styles from "./PowerPage.module.css";

const PowerPage = () => (
<div className={styles.home}>
    <h1>Power Yoga Sequences</h1>
    <p>Welcome to the Boise Yoga Girl Yoga Hub</p>
    
    <div className={styles.buttonGroup}>
    <NavigateButton to="/posepage/hips">Power Sequence #1 – Hips</NavigateButton>
    <NavigateButton to="/powerpage/core">Power Sequence #2 – Core</NavigateButton>
    <NavigateButton to="/powerpage/focus">Power Sequence #3 – Focus</NavigateButton>
    <NavigateButton to="/powerpage/strength">Power Sequence #4 – Strength</NavigateButton>
    </div>

    <NavigateButton to="/">← Back Home</NavigateButton>
</div>
);

export default PowerPage;