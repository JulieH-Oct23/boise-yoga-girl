import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const restorativeClass2 = {
  title: "Restorative Yoga for Depression Relief",
  theme: "Melt Into Stillness",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/playlist/chill-restorative/pl.1a23b4567cd890",
  poses: [
    "Supported Fish Pose – 8 min",
    "Reclined Twist with Bolster (Right/Left) – 5 min each side",
    "Neck Stretch (Supported Recline) – 5 min each side",
    "Reclined Cactus Arms – 8 min",
    "Heart Bench with Neck Roll – 6 min",
    "Side-Lying Savasana – 10 min",
    "Legs on Chair – 10 min"
  ],
  closing: "Let your shoulders drop, your neck soften, and your breath deepen."
};

const RestorativePage2 = () => (
  <YogaLayout title="Restorative Yoga for Anxiety Relief">
    <PowerYogaClass yogaClass={restorativeClass2} />
  </YogaLayout>
);

export default RestorativePage2;