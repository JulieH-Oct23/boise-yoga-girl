import { useState } from "react";
import NavigateButton from "../components/NavigateButton";
import styles from "./RestorativePage.module.css";

const restorativeClasses = [
  {
    key: "fullbody",
    title: "Restorative Yoga for Depression Relief",
    theme: "Nervous System Reset",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/weightless/448357648?i=448357663",
    poses: [
  "🔔 Opening: “Welcome to your restorative practice. This sequence is for meeting depression with kindness and care. You are not here to fix or change anything. You are here to rest. To listen. To reconnect with the quiet spark inside you. Let the earth hold you. Let the breath carry you. You are safe.”",
  "🔲",

  "🧘 1: Supported Child’s Pose, 5 minutes",
  "Knees wide, big toes touch. Place a bolster or pillow under your torso and rest one cheek. Let the arms soften beside you. Feel the breath gently rock the body. Modify: Place a folded blanket under hips or chest for more ease.",
  "🔲",

  "🧘 2: Reclined Butterfly with Bolster, 8 minutes",
  "Lie back on a bolster lengthwise along your spine. Bring soles of feet together, knees wide. Support thighs with cushions. Let the chest gently open and the breath expand. Modify: Blanket under head or knees for comfort.",
  "🔲",

  "🧘 3: Supported Twist, 4 minutes per side",
  "Sit beside your bolster, knees bent, and twist torso to lie belly-down onto the bolster. Arms cradle the bolster or rest wide. Turn head to one side. Allow the body to spiral into release. Modify: Use props to support the knees and torso fully.",
  "🔲",

  "🧘 4: Legs on Chair or Couch, 8 minutes",
  "Lie down and rest your lower legs on a chair or couch, knees bent at 90 degrees. Arms relax at sides, palms up. This pose calms the nervous system and soothes the lower back. Modify: Place a folded blanket under the head.",
  "🔲",

  "🧘 5: Heart Bench (Supported Fish), 6 minutes",
  "Place a rolled blanket under shoulder blades and another under the head. Let the arms fall wide. Legs extended or in butterfly. This passive heart opener invites lightness and courage into the chest. Modify: Use more support for a gentler shape.",
  "🔲",

  "🧘 6: Gentle Twist on Back, 4 minutes per side",
  "Lie on your back, bring knees in and drop them gently to one side. Arms open wide. Gaze is soft or eyes closed. Let the breath wring out heaviness and bring in space.",
  "🔲",

  "🧘 7: Reclined Figure Four, 3 minutes per side",
  "Cross your right ankle over your left thigh. Hug the left knee in or keep the foot on the floor. This pose invites softness into the hips, where we often hold unresolved emotion. Modify: Thread a strap behind the thigh if needed.",
  "🔲",

  "🧘 8: Supported Forward Fold, 5 minutes",
  "Sit tall with legs extended or slightly bent. Place a bolster, block, or cushion across the legs and rest your torso over it. Let the forehead be supported. This inward-facing shape is calming and grounding. Modify: Sit on a blanket for elevation.",
  "🔲",

  "🧘 9: Supported Savasana, 10 minutes",
  "Lie down with a bolster under knees and a folded blanket under head. Cover yourself with a blanket. Use an eye pillow if helpful. Feel the earth holding you. Let go of effort. Let this stillness be your medicine.",
  "🔲",

  "🔔 Closing: “Begin to bring awareness back. Wiggle your fingers. Take a deeper breath. Roll gently to one side and come up slowly. Bring hands to heart. You showed up for yourself today. You allowed space for feeling, healing, and rest. May this ease accompany you forward.",
],
closing: "🔔 You are not alone. You are enough as you are. Let this light you touched today continue to guide you home."
},
{
    key: "shoulders",
    title: "Restorative Yoga for Anxiety Relief",
    theme: "Release and Restore",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/ambient-1-music-for-airports/692526201?i=692526202",
poses: [
  "🔔 Opening: “Welcome to your restorative practice. Today, we create space for calming the mind, grounding the body, and softening anxious energy. Anxiety is not your enemy—it is a messenger asking for safety and stillness. Let this be a space of refuge. Let your breath be your anchor. You are safe now.”",
  "🔲",

  "🧘 1: Seated Breath Awareness, 3 minutes",
  "Come to a comfortable seat or lie down. Place one hand on your heart, one on your belly. Close the eyes if it feels safe. Inhale for 4, exhale for 6. Let the body follow the breath. No rush. Just presence.",
  "🔲",

  "🧘 2: Reclined Bound Angle with Support, 8 minutes",
  "Lie back on a bolster or a pillow. Bring soles of feet together, knees wide. Support the knees with cushions or blocks. Arms open wide, palms up. This shape invites the heart to soften and the breath to deepen.",
  "🔲",

  "🧘 3: Legs Up the Wall, 7 minutes",
  "Scoot your hips close to the wall and rest your legs vertically. Arms rest by your sides or over the belly. Let the blood return to your heart, soothing the nervous system. Modify: Use a folded blanket under the hips for gentle support.",
  "🔲",

  "🧘 4: Supported Child’s Pose, 6 minutes",
  "Knees wide, big toes touch. Place a bolster under your chest and rest one cheek. Let the forehead be supported. This pose invites deep surrender. Modify: Blanket under hips or chest as needed.",
  "🔲",

  "🧘 5: Side-Lying Fetal Pose, 4 minutes per side",
  "Lie on your right side, knees bent, one arm under the head or hugging a bolster. Feel yourself held and cradled. This pose mimics our earliest sense of safety. Switch sides halfway through.",
  "🔲",

  "🧘 6: Heart Opener with Rolled Blanket, 5 minutes",
  "Lie back with a rolled blanket or towel under your shoulder blades, arms open wide. This gentle chest opener allows the breath to expand. Modify: Support the head with an extra folded blanket.",
  "🔲",

  "🧘 7: Supine Twist with Support, 4 minutes per side",
  "Lie on your back, bring knees in, then drop them to one side. Support under the knees if needed. Open your arms wide. Let the breath spiral through the spine, unwinding tension. Switch sides gently.",
  "🔲",

  "🧘 8: Belly-Down Crocodile Pose, 6 minutes",
  "Lie on your belly, rest your forehead on stacked palms. Let your body feel the grounding connection to the earth. This pose brings awareness and calm to the belly and mind.",
  "🔲",

  "🧘 9: Supported Savasana, 8–10 minutes",
  "Lie down with a bolster under your knees and a blanket over your body. Use an eye pillow if you like. Let everything go. You are being held. Nothing to do. Nowhere to be. Just breathe and rest.",
  "🔲",

  "🔔 Closing: “Begin to welcome movement gently. Wiggle the fingers, deepen the breath. Roll to one side and slowly rise. Bring hands to your heart. You chose peace today. You gave yourself care and safety. May this calm stay with you.”"
],
closing: "🔔 Return to this place anytime. You are grounded. You are loved. You are enough exactly as you are."
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
          Restorative Sequence for Depression
        </button>
        <button onClick={() => setActiveClass("shoulders")} className={styles.selectButton}>
          Restorative Sequence for Anxiety
        </button>
      </div>

      <NavigateButton to="/">← Back Home</NavigateButton>

      {renderClassDetails()}
    </main>
  );
};

export default RestorativePage;