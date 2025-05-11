import { userInSession } from "./userInSession";

const isLoggedIn = () => {
  const user = userInSession();
  if (!user) {
    return false;
  }
  return true;
};

export default isLoggedIn;
