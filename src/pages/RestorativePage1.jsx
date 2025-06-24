import PowerYogaClass from "../components/PowerYogaClass";
import YogaLayout from "../components/YogaLayout";

const restorativeClass1 = {
  title: "Restorative Yoga for Depression Relief",
  theme: "Deep Rest and Support",
  duration: "60 minutes",
  playlist: "https://music.apple.com/us/playlist/relaxing-yoga/pl.4b7a31b91d08412ab06c3cfc42c78bb7",
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

  "🔔 Closing: “Begin to bring awareness back. Wiggle your fingers. Take a deeper breath. Roll gently to one side and come up slowly. Bring hands to heart. You showed up for yourself today. You allowed space for feeling, healing, and rest. May this ease accompany you forward.”"
],
closing: "🔔 You are not alone. You are enough as you are. Let this light you touched today continue to guide you home."
};

const RestorativePage1 = () => (
  <YogaLayout title="Restorative Yoga for Anxiety Relief">
    <PowerYogaClass yogaClass={restorativeClass1} />
  </YogaLayout>
);

export default RestorativePage1;