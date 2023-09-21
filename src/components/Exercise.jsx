const Exercise = ({ exercise, handlerAddToList }) => {
  const { image, title, description, age, time_required } = exercise;
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
      <button
        className="add-list-btn"
        onClick={() => handlerAddToList(exercise)}
      >
        Add to list
      </button>
    </div>
  );
};

export default Exercise;
