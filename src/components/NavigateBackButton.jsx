import { useNavigate } from "react-router-dom";
import styles from "./NavigateBackButton.module.css";

const NavigateBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={styles.button}
      aria-label="Go back"
    >
      ← Back
    </button>
  );
};

export default NavigateBackButton;