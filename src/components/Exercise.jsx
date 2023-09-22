import { useState } from "react";

const Exercise = ({ exercise, handlerAddToList }) => {
  const [isAdded, setIsAdded] = useState(false);

  const { image, title, description, age, time_required } = exercise;

  const handleAddToListClick = () => {
    handlerAddToList(exercise);
    setIsAdded(!isAdded); // Toggle the isAdded state
  };

  const buttonText = isAdded ? "added" : "  Add to list";
  const buttonColor = isAdded ? "added-color" : "add-list-btn";

  return (
    <div className="single-exercise-cart">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="exercise-desc">
        <div className="cart-title">{title}</div>
        <p className="cart-des">{description}</p>
        <p>For age: {age}</p>
        <p>Time required: {time_required}</p>
      </div>
      <div>
        <button className={buttonColor} onClick={handleAddToListClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Exercise;
