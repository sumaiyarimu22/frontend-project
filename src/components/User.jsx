import { useState } from "react";

const User = ({ exerciseTime }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  let totalExerciseTime = 0;
  for (const data of exerciseTime) {
    totalExerciseTime = totalExerciseTime + data.time_required;
  }

  const handleBreakTime = (value) => {
    setSelectedValue(value);
  };

  const getButtonColor = (value) => {
    return value === selectedValue ? "item-color-change" : "item";
  };
  return (
    <div className="user">
      <div className="user-info">
        <div className="user-img">
          <img
            src="https://randomuser.me/api/portraits/women/40.jpg"
            alt="user-image"
          />
        </div>
        <div>
          <h4>kayra sanam</h4>
          <small>Sydney, Australia</small>
        </div>
      </div>
      <div className="add-break-area">
        <h2>Add a Break</h2>
        <div className="add-break-items">
          <div
            className={getButtonColor(10)}
            onClick={() => handleBreakTime(10)}
          >
            10s
          </div>
          <div
            className={getButtonColor(20)}
            onClick={() => handleBreakTime(20)}
          >
            20s
          </div>
          <div
            className={getButtonColor(30)}
            onClick={() => handleBreakTime(30)}
          >
            30s
          </div>
          <div
            className={getButtonColor(40)}
            onClick={() => handleBreakTime(40)}
          >
            40s
          </div>
          <div
            className={getButtonColor(50)}
            onClick={() => handleBreakTime(50)}
          >
            50s
          </div>
        </div>
      </div>

      <div className="excrcise-details-area">
        <h2>Excrcise Details</h2>
        <div className="excrcise-details">
          <p>Exercise time</p>
          <p className="gray">{totalExerciseTime} seconds</p>
        </div>

        <div className="break-details">
          <p>Break time</p>
          <p className="gray">{selectedValue} seconds</p>
        </div>
      </div>
      <button className="activity-completed">Activity Completed</button>
    </div>
  );
};

export default User;
