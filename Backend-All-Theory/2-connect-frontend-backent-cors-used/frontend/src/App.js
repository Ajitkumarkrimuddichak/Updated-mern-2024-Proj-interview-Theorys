import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:8080/api/student"); // Backend url (or) frontend ke package.json me "proxy":"http://localhost:8080" pass kar sakate hai (or) itana part yahi rahega "/api/student"
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);

  return (
    <>
      <div>
        <h2>Two Types of connect Frontend and Backend cors & proxy</h2>
        {students.map((student, i) => {
          return (
            <h2 key={i}>
              {student.stuname} {student.email}
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default App;
