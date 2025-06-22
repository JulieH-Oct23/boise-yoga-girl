import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const coreClass = {
  title: "Power Vinyasa – Core",
  theme: "Fire & Focus",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/playlist/core-vinyasa-energy/pl.56789abcd",
  poses: [
    "Seated Breathing + Cat/Cow",
    "Sun Salutation A (3x)",
    "Boat Pose (Navasana)",
    "Plank → Forearm Plank",
    "Side Plank – R/L",
    "Chair Pose → Twist",
    "Warrior III",
    "Bridge → Reclined Twist → Savasana"
  ],
  closing: "You are strong, steady, and centered."
};

const PowerPage2 = () => (
  <YogaLayout title="Power Yoga Sequence #2 – Core">
    <PowerYogaClass yogaClass={coreClass} />
  </YogaLayout>
);

export default PowerPage2;