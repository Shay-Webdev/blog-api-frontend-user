import { jwtDecode } from "jwt-decode";
import { fetchWrapperParam, postApi } from "./fetchWrapper";
import { urlPaths } from "./urlPaths";

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
  const url = urlPaths.tokenUrl.token_Refresh;
  console.log("url in refreshToken: ", url);
  const fetchParams: fetchWrapperParam = {
    url,
    opts: {
      body: JSON.stringify({ refreshToken }),
    },
  };
  const responseData = postApi(fetchParams);
  return responseData;
}

export { isTokenExpired, refreshToken };
