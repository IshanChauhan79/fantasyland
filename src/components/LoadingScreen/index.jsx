import { useState } from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const [start, setStart] = useState(false);
  const [remove, setRemove] = useState(false);
  const { progress, errors } = useProgress();

  const onButtonClick = () => {
    setStart(true);
    setTimeout(() => {
      setRemove(true);
    }, 500);
  };
  if (remove) return null;
  console.log("🚀 ~ file: index.jsx:6 ~ LoadingScreen ~ error:");

  return (
    <div className={`loadingScreen ${start ? "loadingScreen--started" : ""}`}>
      <h1 className="loadingScreen_title">Fantasy Land</h1>
      <div className="loadingScreen_progress">
        <div
          className="loadingScreen_progress_bar"
          style={{ width: `${progress}%` }}
        />
        <div
          className="loadingScreen_progress_value"
          style={{ width: `${progress}%` }}
        >
          {progress.toFixed(2)}%
        </div>
      </div>
      {errors.length > 0 && (
        <div className="loadingScreen_error">Something went wrong!!</div>
      )}
      <div className="loadingScreen_board">
        <button
          className="loadingScreen_button"
          onClick={onButtonClick}
          disabled={progress < 100 || errors.length > 0}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LoadingScreen;
