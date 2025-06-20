import { useNavigate } from "react-router-dom";
import styles from "./NavigateBackButton.module.css";

const NavigateBackButton = () => {
const navigate = useNavigate();

return (
    <button
    className={styles.backButton}
      onClick={() => navigate(-1)} // go back one step in history
    aria-label="Go back"
    >
    ← Back
    </button>
);
};

export default NavigateBackButton;