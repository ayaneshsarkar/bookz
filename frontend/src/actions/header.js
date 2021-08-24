import Cookies from 'universal-cookie';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

export const authHeader = {
  headers: {
    'Authorization': `Bearer ${accessToken} ${refreshToken}`
  }
};

export const fetchWithAuth = async (method, host, body) => {
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Authorization': `Bearer ${accessToken} ${refreshToken}`,
        'Content-Type': 'application/json'
      }),
      body: body ? JSON.stringify(body) : null
    })
  );
}

export const fetchWithoutAuth = async (method, host, body) => {
  return (
    await fetch(host, {
      method,
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: body ? JSON.stringify(body) : null
    })
  );
}