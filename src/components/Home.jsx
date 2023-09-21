import { useEffect } from "react";
import Exercise from "./Exercise";
import { useState } from "react";
import User from "./User";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handlerAddToList = (data) => {
    console.log(data.time_required);
  };

  return (
    <div className="home">
      <div className="left-side">
        <div className="logo">UTRA-ACTIVE-CLUB</div>
        <div className="title">{`Select today's exercise`}</div>
        <div className="ecercises">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              handlerAddToList={handlerAddToList}
            />
          ))}
        </div>
      </div>
      <div className="right-side">
        <User />
      </div>
    </div>
  );
};

export default Home;
