import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card col-md px-0 border-0">
      <Link to="/">
        <img
          src={instructor.imageSrc}
          className="card-img"
          alt={instructor.name}
        />
      </Link>

      <h4 className="card-title text-muted text-center">{instructor.name}</h4>
    </div>
  );
};

export default InstructorCard;
