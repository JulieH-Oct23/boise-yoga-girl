import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>🧘 Boise Yoga Girl 🧘 </h1>
        </header>

        <main style={styles.main}>
          <AppRoutes />
        </main>

        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} @boiseyogagirl </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    // backgroundColor: "#f1f1f1",
    padding: "1rem",
    // borderBottom: "1px solid #ccc",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
  footer: {
    // backgroundColor: "#f1f1f1",
    padding: "1rem",
    // borderTop: "1px solid #ccc",
    fontSize: "0.9rem",
  },
};

export default App;