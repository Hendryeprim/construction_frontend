export const loginUser = async (username, password) => {
  const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed. Please check your credentials.');
  }
  return response.json();
};

export const registerUser = async (username, email, password) => {
  const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.username) throw new Error(`Username: ${errorData.username[0]}`);
    throw new Error('Registration failed.');
  }
  return response.json();
};

export const getUser = async (token) => {
  const response = await fetch('http://127.0.0.1:8000/api/auth/me/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};
