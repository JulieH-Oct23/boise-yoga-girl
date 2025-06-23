import { useState } from "react";
import NavigateButton from "../components/NavigateButton";
import styles from "./RestorativePage.module.css";

const restorativeClasses = [
  {
    key: "fullbody",
    title: "Restorative Yoga – Full Body",
    theme: "Nervous System Reset",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/weightless/448357648?i=448357663",
    poses: [
      "Constructive Rest – 5 min",
      "Supported Reclined Bound Angle – 7 min",
      "Supported Child’s Pose – 6 min",
      "Legs Up the Wall – 8 min",
      "Supported Twist (Right/Left) – 5 min each",
      "Supported Bridge – 5 min",
      "Reclined Butterfly with Bolsters – 7 min",
      "Savasana – 10+ min"
    ],
    closing: "Feel the nervous system soften. Everything is supported."
  },
  {
    key: "shoulders",
    title: "Restorative Yoga – Shoulders & Neck",
    theme: "Release and Restore",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/ambient-1-music-for-airports/692526201?i=692526202",
    poses: [
      "Supported Heart Opener – 6 min",
      "Thread the Needle (Right/Left) – 4 min each",
      "Supported Side-Lying Twist – 5 min each",
      "Cactus Arms on Bolster – 6 min",
      "Supported Bridge with Neck Roll – 5 min",
      "Child’s Pose with Shoulder Stretch – 6 min",
      "Savasana with Eye Pillow – 10+ min"
    ],
    closing: "Release tension from your upper body. Let it all go."
  }
];

const RestorativePage = () => {
  const [activeClass, setActiveClass] = useState(null);

  const renderClassDetails = () => {
    const selected = restorativeClasses.find((c) => c.key === activeClass);
    if (!selected) return null;

    return (
      <div className={styles.classCard}>
        <h2>{selected.title}</h2>
        <p><strong>Theme:</strong> {selected.theme}</p>
        <p><strong>Duration:</strong> {selected.duration}</p>
        <p>
          <strong>Playlist:</strong>{" "}
          <a href={selected.playlist} target="_blank" rel="noopener noreferrer" className={styles.playlistLink}>
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
    <h1 className={styles.title}>Restorative Yoga Sequences</h1>
      <p className={styles.description}>Restorative Yoga is a deeply relaxing, passive style of yoga designed to calm the nervous system and encourage physical and mental recovery. It uses props to fully support the body in restful postures, often held for extended periods with no muscular effort.</p>
      <p className={styles.description}>The Purpose of Restorative Yoga:</p>
      <p className={styles.description}>1. Reset the nervous system. Long-held, supported poses activate the parasympathetic system (“rest and digest”) to reduce stress and promote healing.</p>
      <p className={styles.description}>2. Encourage deep relaxation. With the body fully supported, muscles can release chronic tension and fatigue.</p>
      <p className={styles.description}>3. Support recovery from illness, injury, or burnout. Gentle, still poses offer a safe space for restoration.</p>
      <p className={styles.description}>4. Cultivate introspection and stillness. Minimal movement allows time for deep awareness and presence.</p>

      <div className={styles.buttonGroup}>
        <button onClick={() => setActiveClass("fullbody")} className={styles.selectButton}>
          Restorative Sequence #1 – Full Body
        </button>
        <button onClick={() => setActiveClass("shoulders")} className={styles.selectButton}>
          Restorative Sequence #2 – Shoulders & Neck
        </button>
      </div>

      <NavigateButton to="/">← Back Home</NavigateButton>

      {renderClassDetails()}
    </main>
  );
};

export default RestorativePage;