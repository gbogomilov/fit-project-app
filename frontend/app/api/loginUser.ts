export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
