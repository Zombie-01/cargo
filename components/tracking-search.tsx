"use client";
import { useState } from "react";
import axios from "axios";

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
      // Step 1: Register the tracking number

      // Step 2: Fetch tracking data
      const trackResponse = await axios.post(
        "https://api.17track.net/track/v2.2/gettracks",
        {
          data: [
            {
              number: trackingNumber,
              carrier: null // Optional: Specify carrier code if known
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json",
            "17token": `${process.env.NEXT_PUBLIC_ORDER_KEY}` // Your 17Track API key
          }
        }
      );

      if (trackResponse.data && trackResponse.data.data.length > 0) {
        const trackingInfo = trackResponse.data.data[0];
        setTrackingData(trackingInfo);
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
            Хүлээгдэх хугацаа: {trackingData?.tracking?.estimatedDeliveryDate}
          </p>
          <h4 className="mt-2 font-semibold">Алхамууд:</h4>
          <ul>
            {trackingData?.tracking?.checkpoints?.map(
              (checkpoint: any, index: number) => (
                <li key={index} className="mt-1">
                  <p>
                    <strong>
                      {new Date(checkpoint.checkpointTime).toLocaleString()}
                    </strong>{" "}
                    - {checkpoint.status}
                  </p>
                  <p>{checkpoint.location}</p>
                  <p>Тээвэрлэгч: {checkpoint.courier}</p>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackingSearch;
