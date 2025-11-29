const API_BASE_URL = 'http://localhost:3005';

export async function getLeaderboard() {
  const res = await fetch(`${API_BASE_URL}/leaderboard`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch leaderboard');
  }

  return res.json();
}

// Authentication APIs
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Store token in localStorage
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    // Store token in localStorage
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

