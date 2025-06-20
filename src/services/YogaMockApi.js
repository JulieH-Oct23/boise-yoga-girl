import { useEffect, useState } from "react";

const MOCK_API_DATA = [
  {
    id: 1,
    name: "Downward Dog",
    image: "/images/downward-dog.jpg",
    duration: 60,
    category: "Inversion",
    difficulty: "Beginner",
    notes: "Opens shoulders and hamstrings.",
  },
  {
    id: 2,
    name: "Warrior II",
    image: "/images/warrior-ii.jpg",
    duration: 60,
    category: "Standing",
    difficulty: "Intermediate",
    notes: "Builds strength in legs and core.",
  },
  {
    id: 3,
    name: "Pigeon Pose",
    image: "/images/pigeon-pose.jpg",
    duration: 90,
    category: "Hip Opener",
    difficulty: "Beginner",
    notes: "Deep stretch for the glutes and hips.",
  },
];

export default function MockApiPage() {
  const [poses, setPoses] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a mock API
    setTimeout(() => {
      const localOverrides = JSON.parse(
        localStorage.getItem("poseOverrides") || "{}"
      );
      const enriched = MOCK_API_DATA.map((pose) => ({
        ...pose,
        ...(localOverrides[pose.id] || {}),
      }));
      setPoses(enriched);
    }, 500);
  }, []);

  const updatePose = (id, updates) => {
    const updated = poses.map((pose) =>
      pose.id === id ? { ...pose, ...updates } : pose
    );
    setPoses(updated);

    const overrides = JSON.parse(localStorage.getItem("poseOverrides") || "{}");
    overrides[id] = { ...overrides[id], ...updates };
    localStorage.setItem("poseOverrides", JSON.stringify(overrides));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🧘‍♀️ Mock API Pose Editor</h1>
      {poses.map((pose) => (
        <div
          key={pose.id}
          className="bg-white rounded-xl shadow-md p-4 mb-4 dark:bg-gray-800"
        >
          <img
            src={pose.image}
            alt={pose.name}
            className="w-full max-w-sm rounded-lg mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{pose.name}</h2>

          <label className="block mt-2">Duration (seconds):</label>
          <input
            type="number"
            value={pose.duration}
            onChange={(e) =>
              updatePose(pose.id, { duration: parseInt(e.target.value) })
            }
            className="border px-2 py-1 rounded w-full"
          />

          <label className="block mt-2">Category:</label>
          <input
            type="text"
            value={pose.category}
            onChange={(e) => updatePose(pose.id, { category: e.target.value })}
            className="border px-2 py-1 rounded w-full"
          />

          <label className="block mt-2">Notes:</label>
          <textarea
            value={pose.notes}
            onChange={(e) => updatePose(pose.id, { notes: e.target.value })}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
      ))}
    </div>
  );
}
