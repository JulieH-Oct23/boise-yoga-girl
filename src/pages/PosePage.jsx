import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateBackButton from "../components/NavigateBackButton";
import { getAllPoses } from "../services/YogaApi";

const PosePage = () => {
const [poses, setPoses] = useState([]);
const [error, setError] = useState(null);
const Navigate = useNavigate();

useEffect(() => {
    async function loadData() {
    const result = await getAllPoses();
    if (result.error) setError(result.error);
    else setPoses(result);
    }
    loadData();
}, []);

if (error) return <p>Error: {error}</p>;
if (!poses.length) return <p>Loading poses...</p>;

return (
    <div>
    <h1>Yoga Pictures, Poses, & Instruction</h1>
    <NavigateBackButton />
    {poses.map(pose => (
        <div key={pose.id}>
        <h3>{pose.english_name}</h3>
        <p><em>{pose.sanskrit_name}</em></p>
        <img src={pose.img_url} alt={pose.english_name} width={200} />
        <p>{pose.pose_description}</p>
        </div>
    ))}
    </div>
);
};

export default PosePage;