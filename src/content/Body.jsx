import "./Body.css";
import Student from "./Student";
const Body = () => {
  let numbers = [1, 2, 3, 4, 5];
  const time = new Date().getHours();

  return (
    <>
      <div className="body">
        {numbers.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
        <div>
          {time < 12 ? (
            <p>Good Morning</p>
          ) : time > 12 && time < 17 ? (
            <p>Good afternoon</p>
          ) : time > 17 && time < 20 ? (
            <p>Good evening</p>
          ) : (
            <p>Good night</p>
          )}
          <Student name="Ali" age={21} course="React" />
        </div>
      </div>
    </>
  );
};

export default Body;
