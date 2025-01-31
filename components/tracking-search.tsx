"use client";
import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const TrackingSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrackingSearch = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number");
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
            "X-Ordertracker-Key": `${process.env.NEXT_PUBLIC_ORDER_KEY}`,
            "Content-Type": "application/json"
          },
          params: {
            tracking_number: trackingNumber
          }
        }
      );

      if (response.data && response.data.records.length > 0) {
        setTrackingData(response.data.records[0]);
      } else {
        alert("No tracking data found");
      }
    } catch (error) {
      alert("Error fetching tracking data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Хайх</h2>
      <div>
        {" "}
        <input
          type="text"
          placeholder="TRACK id ыг оруулна уу"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={handleTrackingSearch}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {loading ? "Хайж байна..." : "Хайх"}
        </button>
      </div>
      {trackingData && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">Мэдээлэл</h3>
          <p>Төлөв: {trackingData?.tracking?.status}</p>
          <p>Дугаар: {trackingData?.tracking?.number}</p>
          <p>Хугацаа: {trackingData?.tracking?.daysInTransit}</p>
          <p>
            Хүлээгдэх хугацаа:{" "}
            {trackingData?.tracking?.estimatedDaysBeforeDelivery}
          </p>
          <h4 className="mt-2 font-semibold">Алхамууд:</h4>
          <ul>
            {trackingData?.tracking?.steps.map((step: any, index: number) => (
              <li key={index} className="mt-1">
                <p>
                  <strong>{new Date(step.time).toLocaleString()}</strong> -{" "}
                  {step.status}
                </p>
                <p>{step.lines.join(" ")}</p>
                <p>Зогсолт: {step.courier}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackingSearch;
