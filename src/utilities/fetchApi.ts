import { jwtDecode } from "jwt-decode";

function isTokenExpired(token: string) {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000; //current time in milliseconds
  if (!decodedToken || !decodedToken.exp) {
    return true;
  }
  console.log(
    "decodedToken in is token expired: ",
    decodedToken,
    "current in ms: ",
    currentTime,
  );
  const isTokenExpired = currentTime > decodedToken.exp;
  console.log("is token expired: ", isTokenExpired);
  return isTokenExpired;
}

async function refreshToken(refreshToken: string) {
  try {
    const url = import.meta.env.VITE_GET_REFRESH_TOKEN_PATH;
    console.log("url in refreshToken: ", url);
    const response = await fetch("http://localhost:3000/token/refresh", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ refreshToken: refreshToken }),
    });
    const data = await response.json();
    console.log("data in refresh token: ", data);

    return data;
  } catch (error) {
    console.log("Http error in refresh token: ", error);
    throw new Error(`Http Error in refresh token : ${error}`);
  }
}

export { isTokenExpired, refreshToken };
