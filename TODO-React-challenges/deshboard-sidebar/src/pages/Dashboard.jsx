import React, { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./Graph";
import DropDow from "./DropDow";
import RecentOrder from "./RecentOrder";
import CustomerFeedback from "./CustomerFeedback";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/OneDash.json")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="dashboard">
        <div className="card">
          <h3>Total Orders</h3>
          <p>{data.totalOrders.value}</p>
          <p>
            {data.totalOrders.change} {data.totalOrders.changePercentage}%
          </p>
        </div>
        <div className="card">
          <h3>Total Delivered</h3>
          <p>{data.totalDelivered.value}</p>
          <p>
            {data.totalDelivered.change} {data.totalDelivered.changePercentage}%
          </p>
        </div>
        <div className="card">
          <h3>Total Cancelled</h3>
          <p>{data.totalCancelled.value}</p>
          <p>
            {data.totalCancelled.change} {data.totalCancelled.changePercentage}%
          </p>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>${data.totalRevenue.value}</p>
          <p>
            {data.totalRevenue.change} {data.totalRevenue.changePercentage}%
          </p>
        </div>
        <div className="card">
          <h3>Net Profit</h3>
          <p>${data.netProfit.value}</p>
          <p>
            {data.netProfit.change} {data.netProfit.changePercentage}%
          </p>
        </div>
        <div className="card">
          <h3>Goal Completion</h3>
          <p>{data.goalCompletion.percentage}%</p>
          <p>{data.goalCompletion.note}</p>
        </div>
      </div>

      <div>
        <Graph />
        <DropDow />
      </div>

      <div>
        <RecentOrder />
        <CustomerFeedback />
      </div>
    </>
  );
};

export default Dashboard;
