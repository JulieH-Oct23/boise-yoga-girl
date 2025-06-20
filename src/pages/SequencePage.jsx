import { useEffect, useState } from "react";
import PoseSequenceBuilder from "../components/PoseSequenceBuilder";


export default function SequencePage() {
  const [allPoses, setAllPoses] = useState([]);
  const [sequence, setSequence] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yoga-api-nzy4.onrender.com/v1/poses")
      .then((res) => res.json())
      .then((data) => {
        setAllPoses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch poses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading poses...</p>;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Build a Sequence</h1>

      <PoseSequenceBuilder poses={allPoses} onBuild={setSequence} />

      {sequence.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold mb-2 text-left">📝 Saved Sequence:</h2>
          <ol className="list-decimal pl-4 space-y-2">
            {sequence.map((pose, i) => (
              <li key={i} className="text-sm text-gray-700">
                {pose.english_name || "Unnamed Pose"}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}