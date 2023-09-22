import { useEffect } from "react";
import Exercise from "./Exercise";
import { useState } from "react";
import User from "./User";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseTime, setExerciseTime] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handlerAddToList = (data) => {
    if (exerciseTime) {
      setExerciseTime([...exerciseTime, data]);
    } else {
      setExerciseTime([data]);
    }
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
        <User exerciseTime={exerciseTime} />
      </div>
    </div>
  );
};

export default Home;
