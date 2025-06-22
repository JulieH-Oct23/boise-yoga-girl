
const PowerYogaClass = ({ yogaClass }) => {
  if (!yogaClass) return null;

  return (
    <div>
      <h2>{yogaClass.title}</h2>
      <p><strong>Theme:</strong> {yogaClass.theme}</p>
      <p><strong>Duration:</strong> {yogaClass.duration}</p>
      <p>
        <strong>Playlist:</strong>{" "}
        <a href={yogaClass.playlist} target="_blank" rel="noopener noreferrer">
          Listen on Apple Music
        </a>
      </p>
      <h4>Sequence:</h4>
      <ul>
        {yogaClass.poses.map((pose, i) => (
          <li key={i}>{pose}</li>
        ))}
      </ul>
      <p><em>{yogaClass.closing}</em></p>
    </div>
  );
};

export default PowerYogaClass;