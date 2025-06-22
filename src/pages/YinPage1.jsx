// src/pages/YinPage1.jsx
import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const yinClass1 = {
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
    "Savasana – 7-10 min",
  ],
  closing: "Let each breath ground you. Feel supported by the earth.",
};

const YinPage1 = () => (
  <YogaLayout title="Yin Sequence #1 – Hips">
    <PowerYogaClass yogaClass={yinClass1} />
  </YogaLayout>
);

export default YinPage1;