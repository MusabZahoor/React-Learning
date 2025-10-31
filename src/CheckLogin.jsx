import { useState } from "react";

const CheckLogin = () => {
  let userLogin = [
    {
      id: 1,
      name: "Sarah",
      loginStatus: true,
    },
  ];
  let [checkLog, setCheckLog] = useState(userLogin.loginStatus);

  return (
    <>
      <button onClick={() => setCheckLog(!checkLog)}>
        {checkLog ? "Logout" : "Login"}
      </button>
      <h1>
        {checkLog
          ? `Welcome back, ${userLogin[0].name}`
          : "Please log in to continue."}
      </h1>
    </>
  );
};
export default CheckLogin;
