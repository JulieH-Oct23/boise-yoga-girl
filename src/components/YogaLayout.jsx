import NavigateButton from "./NavigateButton";

const YogaLayout = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <div style={styles.content}>{children}</div>
      <NavigateButton to="/">← Back Home</NavigateButton>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "left",
  },
  content: {
    marginBottom: "2rem",
  },
};

export default YogaLayout;