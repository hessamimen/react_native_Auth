import axios from "axios";

const API_KEY = "AIzaSyBYrk2qKttCZLfiJnEgRn5R-g8Pb52AwzI";

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}

export { createUser };
