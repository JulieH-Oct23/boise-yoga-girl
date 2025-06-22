

const classData = [
  {
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
      "Savasana – 7-10 min"
    ],
    closing: "Let each breath ground you. Feel supported by the earth."
  },
  {
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
      "Savasana – 7-10 min"
    ],
    closing: "Release the shoulders. Let the weight melt off."
  },
  {
    title: "Power Vinyasa – Hips",
    theme: "Root Down to Rise Up",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/spirit-bird/527766034?i=527766039",
    poses: [
      "Child’s Pose → Cat-Cow → Down Dog",
      "Sun A Flow with Low Lunge Hip Mobility",
      "Sun B with Warrior II + Horse",
      "Three-Legged Dog → Knee-to-Nose",
      "Crescent Lunge → Twisted Crescent",
      "Standing Figure 4",
      "Lizard Pose + Half Split",
      "Crow Pose or Yogi Squat",
      "Half Pigeon (Right/Left)",
      "Happy Baby + Savasana"
    ],
    closing: "Feel grounded and open. Strong from the hips down."
  },
  {
    title: "Power Vinyasa – Core",
    theme: "Ignite Your Center",
    duration: "60 minutes",
    playlist: "https://music.apple.com/us/album/energy/1515216908?i=1515216912",
    poses: [
      "Reclined Core Activation + Tabletop",
      "Sun A with Chair Pose",
      "Sun B with Twisted Chair",
      "Core Flow: Three-Legged Dog → Knee-to-Nose",
      "Warrior III with Twist → Airplane Arms",
      "Navasana + Low Boat Repeats",
      "Plank + Forearm Plank Work",
      "Side Plank Variations",
      "Crow Pose or Malasana",
      "Twist + Savasana"
    ],
    closing: "Stay connected to your center. Move from power."
  }
];

const YogaClasses = () => {
  return (
    <div className="yoga-classes">
      {classData.map((yogaClass, index) => (
        <div key={index} className="class-card">
          <h2>{yogaClass.title}</h2>
          <p><strong>Theme:</strong> {yogaClass.theme}</p>
          <p><strong>Duration:</strong> {yogaClass.duration}</p>
          <p><strong>Playlist:</strong> <a href={yogaClass.playlist} target="_blank" rel="noopener noreferrer">Listen on Apple Music</a></p>
          <h4>Sequence:</h4>
          <ul>
            {yogaClass.poses.map((pose, i) => (
              <li key={i}>{pose}</li>
            ))}
          </ul>
          <p><em>{yogaClass.closing}</em></p>
        </div>
      ))}
    </div>
  );
};

export default YogaClasses;