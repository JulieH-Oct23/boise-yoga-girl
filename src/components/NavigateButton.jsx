import { useNavigate } from "react-router-dom";
import styles from "./NavigateButton.module.css";

const NavigateButton = ({ to, children }) => {
const navigate = useNavigate();

return (
    <button className={styles.navButton} onClick={() => navigate(to)}>
    {children}
    </button>
);
};

export default NavigateButton;