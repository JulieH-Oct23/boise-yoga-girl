
import { useState } from "react";
import NavigateBackButton from "./NavigateBackButton";

export default function PoseSequenceBuilder({ poses, onBuild }) {
  const [selectedPoses, setSelectedPoses] = useState([]);

  const addPose = (pose) => {
    setSelectedPoses([...selectedPoses, pose]);
  };

  const removePose = (index) => {
    const newList = [...selectedPoses];
    newList.splice(index, 1);
    setSelectedPoses(newList);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <label className="block text-left font-semibold mb-2">Select a Pose to Add:</label>
        <br />
        <select
          onChange={(e) => {
            const poseId = parseInt(e.target.value);
            const pose = poses.find((p) => p.id === poseId);
            if (pose) addPose(pose);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Pose Finder --</option>
          {poses.map((pose) => (
            <option key={pose.id} value={pose.id}>
  {pose.english_name || pose.name_en || "Unnamed Pose"}
</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-left">Sequence Preview</h3>
        {selectedPoses.length === 0 && <p className="text-gray-500">No poses added yet.</p>}
        <ol className="list-decimal pl-4 space-y-3">
  {selectedPoses.map((pose, index) => (
    <li
      key={index}
      className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm"
    >
      <div className="flex items-center space-x-3">
        {pose.url_png && (
          <img
            src={pose.url_png}
            alt={pose.english_name || "Pose"}
            className="w-10 h-10 object-cover rounded"
          />
        )}
        <span className="font-medium text-sm">
          {pose.english_name || pose.name_en || "Unnamed Pose"}
        </span>
      </div>
      <button
        onClick={() => removePose(index)}
        className="text-red-500 hover:text-red-700 text-xl font-bold px-2"
        aria-label="Remove pose"
      >
        &times;
      </button>
    </li>
  ))}
</ol>
      </div>

      <button
        onClick={() => onBuild(selectedPoses)}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Save Sequence
      </button>
      <div><NavigateBackButton /></div>
    </div>
  );
}