import Card from "../components/Card";
import "../App.css";

function Home() {
  const students = [
    { id: 1, name: "Bathri", dept: "CSE", year: "3rd Year" },
    { id: 2, name: "Gokul", dept: "IT", year: "3rd Year" },
    { id: 3, name: "Mani", dept: "ECE", year: "1st Year" }
  ];

  return (
    <div>
      <h1>Student Dashboard</h1>

      <div className="student-container">
        {students.map((student) => (
          <Card
            key={student.id}
            name={student.name}
            dept={student.dept}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;