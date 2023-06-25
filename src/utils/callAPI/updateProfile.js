import { URL_PROFILE } from "../config";

const updateProfile = async (token, userData) => {
  const response = await fetch(URL_PROFILE, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName: userData.firstName,
      lastName: userData.lastName,
    }),
  });

  const data = await response.json();
  console.log(data);
};

export default updateProfile;
