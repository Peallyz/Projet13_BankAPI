import { URL_PROFILE } from "../config";

const getProfile = async (token) => {
  const response = await fetch(URL_PROFILE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
};

export default getProfile;
