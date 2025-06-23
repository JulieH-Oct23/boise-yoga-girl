import { useEffect, useState } from "react";
import NavigateBackButton from "../components/NavigateBackButton";
import { getAllPoses } from "../services/YogaApi";
import styles from "./PosePage.module.css";

const PosePage = () => {
  const [poses, setPoses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await getAllPoses();
      if (result.error) setError(result.error);
      else setPoses(result);
    }
    loadData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!poses.length) return <p>Loading poses...</p>;

  return (
    <main className="app-main">
      <h1>Yoga Poses</h1>
      <NavigateBackButton />
      <div className={styles.poseGrid}>
        {poses.map((pose) => (
          <div key={pose.id} className={styles.poseCard}>
            <h3>{pose.english_name}</h3>
            <p><em>{pose.sanskrit_name}</em></p>
            {pose.url_png && (
              <img
                src={pose.url_png}
                alt={pose.english_name || "Pose"}
                className={styles.poseImage}
              />
            )}
            <p>{pose.pose_description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PosePage;