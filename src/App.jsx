import Card from "./Components/Card";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>

      <Card name="bathri" dept="CSE" year="2nd Year" />

      <Card name="gokul" dept="IT" year="3rd Year" />
      
      <Card name="Ali" dept="ECE" year="1st Year" />
    </div>
  );
}

export default App;