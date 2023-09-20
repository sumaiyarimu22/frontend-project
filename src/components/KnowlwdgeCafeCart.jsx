import { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
const KnowlwdgeCafeCart = ({ data, handlerMarkAsRead, handleTimeBookmark }) => {
  const {
    property_image,
    user_image,
    user_name,
    user_title,
    heading_title,
    tags,
    read_time,
  } = data;

  const [colorShift, setColorShift] = useState(false);
  return (
    <div className="knowledge-cafe-cart">
      <div className="cart-image">
        <img src={property_image} alt={user_title} />
      </div>
      <div className="cart-desc">
        <div className="user-info">
          <div className="user">
            <div className="user-img">
              <img src={user_image} alt={user_name} />
            </div>
            <div>
              <h5>{user_name}</h5>
              <span>{user_title}</span>
            </div>
          </div>
          <div className="read-more">
            {read_time} minutes
            <span onClick={() => handleTimeBookmark(data)}>
              <BsBookmarkFill
                onClick={() => setColorShift(!colorShift)}
                className={colorShift && "bookmark-icon "}
              />
            </span>
          </div>
        </div>
        <div className="knowldge-details">
          <h2>{heading_title}</h2>
          <p className="tags">
            {tags.map((tag, i) => (
              <span key={i}>#{tag}</span>
            ))}
          </p>
          <div className="mark-read-btn">
            <button onClick={() => handlerMarkAsRead(data)}>
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowlwdgeCafeCart;
