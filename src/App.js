import logo from "./logo.svg";
import "./App.css";


const link = "https://google.com";

function App() {
  return (
    <div>
      <MyButton
        color="red"
        text="red button"
        onClick={() => {
          console.log("i am red button");
        }}
        numbers={[1, 2, 3]}
      />
      <MyButton
        color="yellow"
        text="yellow button"
        onClick={() => {
          alert("i am yellow button");
        }}
        numbers={[4, 5, 6]}
      />
      <MyButton
        color="blue"
        text="blue button"
        onClick={() => {
          console.log("i am blue button");
        }}
        numbers={[7, 8, 9]}
      />
    </div>
  );
}

const MyButton = ({ color, text, onClick, numbers }) => {
  console.log(numbers);
  
  return (
    <button
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default App;
