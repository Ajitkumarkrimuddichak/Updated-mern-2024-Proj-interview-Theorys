import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/RecentOrder.json")
      .then((response) => {
        setOrders(response.data.recentOrders);
      })
      .catch((error) => {
        console.error("There was an error fetching the orders!", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recent Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2">Customer</th>
              <th className="w-1/4 py-2">Order Number</th>
              <th className="w-1/4 py-2">Amount</th>
              <th className="w-1/4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center border-b">
                <td className="py-2 flex items-center justify-center">
                  <img
                    src={order.customerImage}
                    alt={order.customerName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{order.customerName}</span>
                </td>
                <td className="py-2">{order.orderNumber}</td>
                <td className="py-2">${order.amount}</td>
                <td className="py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
