import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const restorativeClass1 = {
  title: "Restorative Yoga – Full Body",
  theme: "Deep Rest and Support",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/playlist/relaxing-yoga/pl.4b7a31b91d08412ab06c3cfc42c78bb7",
  poses: [
    "Supported Child's Pose – 8 min",
    "Reclined Bound Angle – 10 min",
    "Supported Twist (Right/Left) – 5 min each side",
    "Heart Bench – 8 min",
    "Legs Up the Wall – 10 min",
    "Reclined Butterfly – 8 min",
    "Savasana – 10 min"
  ],
  closing: "Allow gravity to hold you. Everything you need is already here."
};

const RestorativePage1 = () => (
  <YogaLayout title="Restorative Sequence #1 – Full Body">
    <PowerYogaClass yogaClass={restorativeClass1} />
  </YogaLayout>
);

export default RestorativePage1;