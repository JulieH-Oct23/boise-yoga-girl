import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const hipsClass = {
  title: "Power Vinyasa – Hips",
  theme: "Strength & Mobility",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/playlist/hip-opening-flow/pl.12345678",
  poses: [
    "Child’s Pose → Downward Dog",
    "Sun Salutations A & B (3x each)",
    "Lizard Pose – R/L",
    "Low Lunge → Crescent → Warrior II",
    "Half Pigeon → Double Pigeon",
    "Wide-Legged Forward Fold",
    "Bridge or Wheel Pose",
    "Supine Twist → Savasana"
  ],
  closing: "Feel open, grounded, and empowered."
};

const PowerPage1 = () => (
  <YogaLayout title="Power Yoga Sequence #1 – Hips">
    <PowerYogaClass yogaClass={hipsClass} />
  </YogaLayout>
);

export default PowerPage1;