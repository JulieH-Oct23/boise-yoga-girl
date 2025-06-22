import YogaLayout from "../components/YogaLayout";
import styles from "./yogaclasses.module.css";

const classData = [
  // ... your classData array here, unchanged
];

const YogaClasses = () => {
  return (
    <YogaLayout title="Yoga Classes">
      <div className={styles.yogaClasses}>
        {classData.map((yogaClass, index) => (
          <article key={index} className={styles.classCard}>
            <h2>{yogaClass.title}</h2>
            <p><strong>Theme:</strong> {yogaClass.theme}</p>
            <p><strong>Duration:</strong> {yogaClass.duration}</p>
            <p>
              <strong>Playlist:</strong>{" "}
              <a
                href={yogaClass.playlist}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.playlistLink}
              >
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
          </article>
        ))}
      </div>
    </YogaLayout>
  );
};

export default YogaClasses;