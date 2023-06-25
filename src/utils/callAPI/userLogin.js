import { URL_LOGIN } from "../config";

const userLogin = async (userData) => {
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
  console.log(data);
};

export default userLogin;
