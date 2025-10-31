import { useState } from "react";
const Class29thOct = () => {
  
  // const [isOn, setIsOn] = useState(false);
  // const [buttonValue, setButtonValue] = useState(true);
  // const [showText, setShowText] = useState(false);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState();
  const [onSub, setOnSub] = useState("");
  const subForm = (e) => {
    e.preventDefault();
    setOnSub(name);
  };
  const [likeBtn, setLikeBtn] = useState(false);

  const [number, setNumber] = useState(0);
  return (
    <>
    <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase Value</button>
      <button onClick={() => setNumber(number > 0 ? number - 1 : number)}>
        Decrease by One
      </button>
      <button onClick={() => setNumber(0)}>Set to zero</button>

      <button onClick={() => setLikeBtn(!likeBtn)}>
        {likeBtn ? "Unlike 💔" : "Like ❤"}
      </button>
      <form onSubmit={subForm}>
        <input
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        {/* <p>My name is {name}</p> */}

        <input
          placeholder="Enter your email"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <br />
        {/* <p>My email is {userEmail}</p> */}

        <input
          type="number"
          placeholder="Enter your Number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />

        {/* <p>My number is {userNumber}</p> */}
        <br />
        <br />

        <input type="submit" />
      </form>

      {subForm && <p>Your name is: {onSub}</p>}

      
      {/* <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide" : "Show"}
      </button>
      {showText && <p>This text is visible</p>} */}
      {/* 
      
      <br />
      <h1>The light is {isOn ? "On 💡" : "Off 🌑"}</h1>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn off" : "Turn On"}
      </button>
      <button onClick={() => setButtonValue(!buttonValue)}>
        {buttonValue ? "Button is On" : "Button is Off"}
      </button> */}
    </>
  );
};
export default Class29thOct;
