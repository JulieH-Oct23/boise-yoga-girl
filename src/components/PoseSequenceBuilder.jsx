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
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <label className="block text-left font-semibold mb-1 text-sm">Select a Pose to Add:</label>
        <select
          onChange={(e) => {
            const poseId = parseInt(e.target.value);
            const pose = poses.find((p) => p.id === poseId);
            if (pose) addPose(pose);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="">-- Pose Finder --</option>
          {poses.map((pose) => (
            <option key={pose.id} value={pose.id}>
              {pose.english_name || pose.name_en || "Unnamed Pose"}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-left">🧘 Sequence Preview</h3>
        {selectedPoses.length === 0 && <p className="text-gray-500 text-sm">No poses added yet.</p>}
        <ol className="list-decimal pl-4 space-y-2">
          {selectedPoses.map((pose, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-md gap-2"
            >
              <div className="flex items-center space-x-3">
                {pose.url_png && (
                  <img
                    src={pose.url_png}
                    alt={pose.english_name || "Pose"}
                    className="w-8 h-8 object-contain rounded-sm"
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
                title="Remove pose"
              >
                &times;
              </button>
            </li>
          ))}
        </ol>
      </div>

      <button
        onClick={() => onBuild(selectedPoses)}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
      >
        Save Sequence
      </button>
      <div className="mt-4">
        <NavigateBackButton />
      </div>
    </div>
  );
}