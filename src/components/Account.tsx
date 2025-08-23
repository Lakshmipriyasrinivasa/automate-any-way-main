// src/pages/account.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [lastUpdated, setLastUpdated] = useState<string>("a few seconds ago");
  const [items, setItems] = useState<number>(1); // Example: 1 item

  // Simulate updating timestamp
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated("a few seconds ago"); // Later you can calculate real time
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Accounts</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Recently Viewed ▼</span>
          </div>
        </div>

        {/* New button */}
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => navigate("/accountform")}
        >
          New
        </Button>
      </div>

      {/* Sub info */}
      <p className="text-sm text-gray-500 mb-4">
        {items} item{items !== 1 ? "s" : ""} – Updated {lastUpdated}
      </p>

      {/* List (dummy for now) */}
      <div className="border rounded p-4">
        <p>No accounts added yet.</p>
      </div>
    </div>
  );
};

export default Account;
