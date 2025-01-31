"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const TrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackingSearch = async () => {
    if (!trackingNumber) {
      toast.error("Please enter a tracking number");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://my-webhook-endpoint.com/listen", {
        tracking_number: trackingNumber
      });

      const response = await axios.get(
        `https://api.ordertracker.com/public-v3/webhook-subscription`,
        {
          headers: {
            "X-Ordertracker-Key": "YOUR_API_KEY",
            "Content-Type": "application/json"
          },
          params: {
            tracking_number: trackingNumber
          }
        }
      );

      if (response.data && response.data.records.length > 0) {
        setTrackingData(response.data.records[0]);
        toast.success("Tracking data retrieved successfully");
      } else {
        toast.error("No tracking data found");
      }
    } catch (error) {
      toast.error("Error fetching tracking data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleTrackingSearch}
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        {loading ? "Searching..." : "Track Order"}
      </button>

      {trackingData && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">Tracking Details</h3>
          <p>Status: {trackingData.tracking.status}</p>
          <p>Tracking Number: {trackingData.tracking.number}</p>
          <p>Days in Transit: {trackingData.tracking.daysInTransit}</p>
          <p>
            Estimated Days Before Delivery:{" "}
            {trackingData.tracking.estimatedDaysBeforeDelivery}
          </p>
          <h4 className="mt-2 font-semibold">Steps:</h4>
          <ul>
            {trackingData.tracking.steps.map((step, index) => (
              <li key={index} className="mt-1">
                <p>
                  <strong>{new Date(step.time).toLocaleString()}</strong> -{" "}
                  {step.status}
                </p>
                <p>{step.lines.join(" ")}</p>
                <p>Courier: {step.courier}</p>
              </li>
            ))}
          </ul>
          <h4 className="mt-2 font-semibold">Tracking Map:</h4>
        </div>
      )}
    </div>
  );
};

export default TrackingSearch;
