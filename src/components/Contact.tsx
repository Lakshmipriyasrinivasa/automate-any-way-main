import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  name: string;
  updated_at: string;
}

const NewContact: React.FC = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="flex justify-between items-start p-4 border-b">
      {/* Left Side - Recent View */}
      <div>
        <h2 className="text-sm font-medium text-gray-600">Recently Viewed ▼</h2>
        <p className="text-xs text-gray-500 mt-1">
          {contacts.length} item{contacts.length !== 1 && "s"} - Updated just now
        </p>
      </div>

      {/* Right Side - Button */}
      <div>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => navigate("/Contactform")}
        >
          New
        </Button>
      </div>
    </div>
  );
};

export default NewContact;
