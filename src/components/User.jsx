const User = () => {
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
          <div className="item">10s</div>
          <div className="item">20s</div>
          <div className="item">30s</div>
          <div className="item">40s</div>
          <div className="item">50s</div>
        </div>
      </div>

      <div className="excrcise-details-area">
        <h2>Excrcise Details</h2>
        <div className="excrcise-details">
          <p>Exercise time</p>
          <p className="gray">200 seconds</p>
        </div>

        <div className="break-details">
          <p>Break time</p>
          <p className="gray">20 seconds</p>
        </div>
      </div>
      <button className="activity-completed">Activity Completed</button>
    </div>
  );
};

export default User;
