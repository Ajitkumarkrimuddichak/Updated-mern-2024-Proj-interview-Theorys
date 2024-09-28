import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios
      .get("/Feedback.json")
      .then((response) => {
        setFeedbacks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-item">
          <img
            src={feedback.userImage}
            alt={feedback.userName}
            className="feedback-image"
          />
          <h3 className="feedback-name">{feedback.userName}</h3>
          <div className="feedback-stars">
            {"★".repeat(feedback.stars)}
            {"☆".repeat(5 - feedback.stars)}
          </div>
          <p className="feedback-message">{feedback.message}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
