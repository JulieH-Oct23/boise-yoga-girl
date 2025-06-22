import { useState } from "react";
import NavigateButton from "../components/NavigateButton";
import styles from "../pages/PowerPage.module.css";


const classData = [
  {
    key: "hips",
    title: "Power Vinyasa – Hips",
    theme: "Root Down to Rise Up",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/spirit-bird/527766034?i=527766039",
    poses: [
      "Child’s Pose → Cat-Cow → Down Dog",
      "Sun A Flow with Low Lunge Hip Mobility",
      "Sun B with Warrior II + Horse",
      "Three-Legged Dog → Knee-to-Nose",
      "Crescent Lunge → Twisted Crescent",
      "Standing Figure 4",
      "Lizard Pose + Half Split",
      "Crow Pose or Yogi Squat",
      "Half Pigeon (Right/Left)",
      "Happy Baby + Savasana"
    ],
    closing: "Feel grounded and open. Strong from the hips down."
  },
  {
    key: "core",
    title: "Power Vinyasa – Core",
    theme: "Ignite Your Center",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/energy/1515216908?i=1515216912",
    poses: [
      "Reclined Core Activation + Tabletop",
      "Sun A with Chair Pose",
      "Sun B with Twisted Chair",
      "Core Flow: Three-Legged Dog → Knee-to-Nose",
      "Warrior III with Twist → Airplane Arms",
      "Navasana + Low Boat Repeats",
      "Plank + Forearm Plank Work",
      "Side Plank Variations",
      "Crow Pose or Malasana",
      "Twist + Savasana"
    ],
    closing: "Stay connected to your center. Move from power."
  }
];

const PowerPage = () => {
  const [activeClass, setActiveClass] = useState(null);

  const renderClassContent = () => {
    const selectedClass = classData.find((c) => c.key === activeClass);
    if (!selectedClass) return null;

    return (
      <article className={styles.classCard}>
        <h2>{selectedClass.title}</h2>
        <p><strong>Theme:</strong> {selectedClass.theme}</p>
        <p><strong>Duration:</strong> {selectedClass.duration}</p>
        <p>
          <strong>Playlist:</strong>{" "}
          <a href={selectedClass.playlist} target="_blank" rel="noopener noreferrer" className={styles.playlistLink}>
            Listen on Apple Music
          </a>
        </p>
        <h4>Sequence:</h4>
        <ul>
          {selectedClass.poses.map((pose, i) => (
            <li key={i}>{pose}</li>
          ))}
        </ul>
        <p><em>{selectedClass.closing}</em></p>
      </article>
    );
  };

  return (
    <main className="app-main">
      <h1 className={styles.title}>Power Yoga Sequences</h1>
      <p className={styles.description}>Add description of Power Yoga</p>

      <div className={styles.buttonGroup}>
        <button onClick={() => setActiveClass("hips")} className={styles.selectButton}>
          Power Sequence #1 – Hips
        </button>
        <button onClick={() => setActiveClass("core")} className={styles.selectButton}>
          Power Sequence #2 – Core
        </button>
      </div>

      <NavigateButton to="/">Back</NavigateButton>

      {renderClassContent()}
    </main>
  );
};

export default PowerPage;