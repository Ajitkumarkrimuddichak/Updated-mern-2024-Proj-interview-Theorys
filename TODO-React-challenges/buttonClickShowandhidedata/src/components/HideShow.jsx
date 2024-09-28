import { useState, useEffect } from "react";
import axios from "axios";

const HideShow = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const onShowClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onShowClick}
      >
        {show ? "Show" : "Hide"} Data
      </button>
      {show && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left">ID</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Name</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Email</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((person) => (
                <tr key={person.id}>
                  <td className="border px-4 py-2">{person.id}</td>
                  <td className="border px-4 py-2">{person.name}</td>
                  <td className="border px-4 py-2">{person.email}</td>
                  <td className="border px-4 py-2">{person.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HideShow;
