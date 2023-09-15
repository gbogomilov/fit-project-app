export const registerUser = async (username: string, email: string, password: string, age: number, gender: string) => {
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, age, gender }),
    });
    return response;
  } catch (error) {
    return null;
  }
};
