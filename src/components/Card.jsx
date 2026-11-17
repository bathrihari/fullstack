import "./Card.css";
function Card({ name, dept, year }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Department: {dept}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Card;