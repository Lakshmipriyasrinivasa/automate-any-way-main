import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Asset: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/assets/new");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Assets</h1>
      <Button onClick={handleAddNew}>Add New</Button>
    </div>
  );
};

export default Asset;
