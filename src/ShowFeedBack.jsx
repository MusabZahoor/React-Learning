import { useState } from "react";
const ShowFeedBack = () => {
  const [feedBack, setFeedBack] = useState("");
  const [onSub, setOnSub] = useState("");
  const subForm = (e) => {
    e.preventDefault();
    setOnSub(feedBack);
  };
  return (
    <>
      <form onSubmit={subForm}>
        <input
          value={feedBack}
          type="text"
          placeholder="Enter your feedback here"
          onChange={(e) => setFeedBack(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      {subForm && <p>Your feed back is: {onSub}</p>}
    </>
  );
};
export default ShowFeedBack;
