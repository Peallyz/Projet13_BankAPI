import { URL_SINGUP } from "../config";

const userSignup = async (userData) => {
  userData = {
    email: "tony@stark.co",
    password: "password123",
    firstName: "Tony",
    lastName: "Stark",
  };

  try {
    const response = await fetch(URL_SINGUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default userSignup;
