import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="details">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Grade: {props.grade}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "No Name",
  age: 0,
  grade: 0,
  isStudent: false,
};

export default Student;
