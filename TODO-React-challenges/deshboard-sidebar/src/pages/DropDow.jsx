import React, { useEffect, useState } from "react";
import axios from "axios";

const DropDow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("Three.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  return (
    <div className="menu-list">
      {data.map((item, index) => (
        <div key={index} className="menu-item">
          <div className={`icon ${item.icon}`}></div>
          <span>{item.title}</span>
          <a href={item.link} className="arrow-link">
            →
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropDow;
