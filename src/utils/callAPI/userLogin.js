import { URL_LOGIN } from "../config";

const userLogin = async (userData) => {
  try {
    const response = await fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error.status;
  }
};

export default userLogin;
