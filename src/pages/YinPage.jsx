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
      "🔔 Opening: “Welcome to your yin practice. Today, we will be opening the hips—an area where we tend to store stress, tension, and unspoken emotion. As you settle in, bring your awareness to your breath. Let each inhale nourish you, and each exhale soften and release. You are safe here. Supported. Ready to receive.",
     "🔲",
      "🧘 1: Butterfly, 5 minutes",
      "Bring the soles of your feet together and let your knees fall wide. If you are reclined, support the knees with blocks or cushions. This pose gently opens the inner hips. Soften the eyes. Relax your jaw. Let your breath find its own rhythm. Modify: Sit on a folded blanket or recline with support under knees.",
      "🔲",
      "🧘 2: Half Butterfly, 6 minutes",
      "Extend your right leg and bring the sole of your left foot to the inner right thigh. Fold over the extended leg. No forcing. Just a gentle yielding. Let the spine round.",
      "🔲",
      "🧘 3: Double Pigeon, 8 minutes",
      "Stack your shins, right leg in front, ankle over knee. If this is too intense, sit cross-legged. This targets the outer hip and glute. Find your edge and breathe into it. Imagine melting over the earth, let gravity do the work. Modify: Use props under knees or sit on a block.",
      "🔲",
      "🧘 4: Sleeping Swan, 8 minutes",
      "Slide your right knee forward, shin angled toward the front of your mat. Extend the left leg behind. Use a bolster or blanket under the hip if needed. Then fold forward. Surrender the upper body.",
      "🔲",
      "🧘 5: Dragon Pose, 6 minutes",
      "Step your right foot forward into a low lunge. Let your hips sink forward. Keep your hands on blocks if needed. Feel into the hip flexor and the front of the left hip.",
      "🔲",
      "🧘 6: Frog Pose, 5 minutes",
      "Come to hands and knees. Gently widen your knees apart and bring the inner edges of your feet to the mat. Sink your hips back. If this is too intense, take a wide-legged childs pose instead. This is a deep one. If emotions arise, greet them like old friends. You are just witnessing. Modify: Use blankets under knees. Option to lie on bolster.",
      "🔲",
      "🧘 7: Reclined Twist, 6 minutes",
      "Lie on your back. Hug your knees in and let them fall to the right. Open your left arm and gaze to the left. Allow the hips to ring out the residue.",
      "🔲",
      "🧘 8: Happy Baby, 3 minutes",
      "Hold the outer edges of your feet or shins. Let your knees move toward your armpits. Gently rock if it feels good.",
      "🔲",
      "🧘 9: Savasana, 7-10 minutes",
      "Settle into your final rest. Allow the hips to integrate all the deep opening and release. There is nothing left to do, nowhere to be. Just this moment.  Feel the floor rise up to hold you. Let yourself dissolve. Modify: Place bolster under knees or use an eye pillow.",
      "🔲",
      "🔔Closing: “Begin to bring gentle movement back. Wiggle your fingers and toes. Draw your knees in and roll to one side. Come up slowly.Bring your hands to heart center. Bow to your own courage for showing up and going deep. May the space you have created ripple out into your day.",
    ],
    closing: "🔔 Let each breath ground you. Feel supported by the earth."
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
      <p className={styles.description}>Yin Yoga is a slow, meditative style of yoga that targets the deep connective tissues of the body — fascia, ligaments, joints — rather than the superficial muscles. It is known for long, passive holds and mindful stillness. </p>
      <p className={styles.description}>The Purpose of Yin Yoga:</p>
      <p className={styles.description}>1.	Stretch and hydrate connective tissue. Holding poses for time puts gentle, sustained stress on fascia and joints to promote elasticity and hydration.</p>
      <p className={styles.description}>2.	Increase joint mobility and flexibility. Especially in the hips, pelvis, spine, and lower back — places where tightness often limits movement.</p>
      <p className={styles.description}>3.	Calm the nervous system. Yin activates the parasympathetic “rest and digest” state through slow breathing and minimal movement.</p>
      <p className={styles.description}>4.	Cultivate mindfulness and inner awareness. With fewer poses and longer holds, students have time to turn inward and observe physical or emotional sensations.</p>

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