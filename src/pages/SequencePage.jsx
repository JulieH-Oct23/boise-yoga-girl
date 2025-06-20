import { useEffect, useState } from "react";
import PoseSequenceBuilder from "../components/PoseSequenceBuilder";

export default function SequencePage() {
  const [allPoses, setAllPoses] = useState([]);
  const [sequence, setSequence] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Build a Sequence</h1>

      <PoseSequenceBuilder poses={allPoses} onBuild={setSequence} />

      {sequence.length > 0 && (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">📝 Saved Sequence:</h2>
          <ol className="list-decimal pl-6 space-y-1">
            {sequence.map((pose, i) => (
              <li key={i}>{pose.name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}