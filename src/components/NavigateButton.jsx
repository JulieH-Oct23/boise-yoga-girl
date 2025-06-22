import { Link } from "react-router-dom";
import styles from "./NavigateButton.module.css";

const NavigateButton = ({ to, children }) => {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
};

export default NavigateButton;