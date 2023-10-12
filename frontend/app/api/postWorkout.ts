export const postWorkout = async (body: {
  exercise: string;
  repetitions: number;
  sets: number;
  weight: number;
}) => {
  const res = await fetch("http://localhost:3001/exersises", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
