import NavigateButton from "../components/NavigateButton";
import PowerYogaClass from "../components/PowerYogaClass";


const yinClass2 = {
  title: "Yin Yoga – Shoulders & Upper Body",
  theme: "Softening Resistance",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/album/ambient-yoga/1440841360",
  poses: [
    "Supported Child’s Pose with arms extended – 4 min",
    "Thread the Needle (Right/Left) – 3 min each",
    "Eagle Arms in Seated or Reclined – 3 min",
    "Melting Heart (Anahatasana) – 4 min",
    "Reclined Shoulder Stretch (Right/Left) – 3 min each",
    "Wall Shoulder Opener – 4 min",
    "Bridge Pose or Supported Bridge – 5 min",
    "Reclined Twist – 3 min each side",
    "Savasana – 10 min"
  ],
  closing: "Melt tension in your shoulders. Let the breath flow freely."
};

const YinPage2 = () => (
  <div>
    <h1>Yin Yoga Sequence #2 – Shoulders & Upper Body</h1>
    <PowerYogaClass yogaClass={yinClass2} />
    <NavigateButton to="/">← Back Home</NavigateButton>
  </div>
);

export default YinPage2;
