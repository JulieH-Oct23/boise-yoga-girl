import { useState } from "react";
import NavigateButton from "../components/NavigateButton";
import styles from "./YinPage.module.css";

const yinClasses = [
  {
    key: "hips",
    title: "Yin Yoga – Hips",
    theme: "Letting Go & Grounding",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/weightless/448357648?i=448357663",
    poses: [
      "Child’s Pose – Breath awareness",
      "Butterfly Pose – 5 min",
      "Half Butterfly (Right/Left) – 3 min each side",
      "Square Pose (Right/Left) – 4 min each side",
      "Sleeping Swan (Right/Left) – 4 min each side",
      "Dragon Pose – 3 min each side",
      "Frog Pose – 5 min",
      "Reclined Twist – 3 min each side",
      "Happy Baby – 2 min",
      "Savasana – 7–10 min"
    ],
    closing: "Let each breath ground you. Feel supported by the earth."
  },
  {
    key: "shoulders",
    title: "Yin Yoga – Shoulders & Upper Body",
    theme: "Softening Effort",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/an-ending-ascent/519983255?i=519983431",
    poses: [
      "Melting Heart – 4 min",
      "Thread the Needle (Right/Left) – 3 min each side",
      "Broken Wing (Right/Left) – 4 min each side",
      "Sphinx Pose – 4 min",
      "Reclined Cactus Arms – 4 min",
      "Eagle Arms (Reclined) – 3 min each side",
      "Strap Shoulder Stretch – 5 min",
      "Supported Fish Pose – 6 min",
      "Reclined Twist – 3 min each side",
      "Savasana – 7–10 min"
    ],
    closing: "Release the shoulders. Let the weight melt off."
  }
];

const YinPage = () => {
  const [activeClass, setActiveClass] = useState(null);

  const renderClassDetails = () => {
    const selected = yinClasses.find((c) => c.key === activeClass);
    if (!selected) return null;

    return (
      <div className={styles.classCard}>
        <h2>{selected.title}</h2>
        <p><strong>Theme:</strong> {selected.theme}</p>
        <p><strong>Duration:</strong> {selected.duration}</p>
        <p>
          <strong>Playlist:</strong>{" "}
          <a
            href={selected.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playlistLink}
          >
            Listen on Apple Music
          </a>
        </p>
        <h4>Sequence:</h4>
        <ul>
          {selected.poses.map((pose, index) => (
            <li key={index}>{pose}</li>
          ))}
        </ul>
        <p><em>{selected.closing}</em></p>
      </div>
    );
  };

  return (
    <main className="app-main">
      <h1 className={styles.title}>Yin Yoga Sequences</h1>
      <p className={styles.description}>Add description of Yin Yoga</p>

      <div className={styles.buttonGroup}>
        <button onClick={() => setActiveClass("hips")} className={styles.selectButton}>
          Yin Sequence #1 – Hips
        </button>
        <button onClick={() => setActiveClass("shoulders")} className={styles.selectButton}>
          Yin Sequence #2 – Shoulders & Upper Body
        </button>
      </div>

      <NavigateButton to="/">← Back Home</NavigateButton>

      {renderClassDetails()}
    </main>
  );
};

export default YinPage;