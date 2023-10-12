import { useEffect, useState } from "react";

export const useGetWorkouts = () => {
  const [exercises, setExersies] = useState([]);
  const getWorkout = async () => {
    const res = await fetch("http://localhost:3001/exersises", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setExersies(data);
  };
  useEffect(() => {
    getWorkout();
  }, []);

  return { exercises, getWorkout };
};
