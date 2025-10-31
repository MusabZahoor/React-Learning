import { useState } from "react";

const TogglePass = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? "Hide Password" : "Show Password"}
      </button>
      <input
        placeholder="Write your password"
        type={showPass ? "text" : "Password"}
      />
    </>
  );
};
export default TogglePass;
