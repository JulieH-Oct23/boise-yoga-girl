import NavigateButton from "./NavigateButton";
import styles from "./YogaLayout.module.css";

const YogaLayout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
      <NavigateButton to="/">← Back Home</NavigateButton>
    </div>
  );
};

export default YogaLayout;