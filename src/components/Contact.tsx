// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// interface Contact {
//   id: string;
//   name: string;
//   updated_at: string;
// }

// const NewContact: React.FC = () => {
//   const navigate = useNavigate();
//   const [contacts, setContacts] = useState<Contact[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/contacts")
//       .then(res => res.json())
//       .then(data => setContacts(data))
//       .catch(err => console.error("Error fetching contacts:", err));
//   }, []);

//   return (
//     <div className="flex justify-between items-start p-4 border-b">
//       {/* Left Side - Recent View */}
//       <div>
//         <h2 className="text-sm font-medium text-gray-600">Recently Viewed ▼</h2>
//         <p className="text-xs text-gray-500 mt-1">
//           {contacts.length} item{contacts.length !== 1 && "s"} - Updated just now
//         </p>
//       </div>

//       {/* Right Side - Button */}
//       <div>
//         <Button
//           className="bg-blue-600 text-white hover:bg-blue-700"
//           onClick={() => navigate("/Contactform")}
//         >
//           New
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default NewContact;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  organization_name?: string;
  account_name?: string;
  updated_by_name?: string;
  last_service_date?: string;
  updated_at: string;
}

const NewContact: React.FC = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        <div>
          <h2 className="text-sm font-medium text-gray-600">Recently Viewed ▼</h2>
          <p className="text-xs text-gray-500 mt-1">
            {contacts.length} item{contacts.length !== 1 && "s"} - Updated just now
          </p>
        </div>

        <div>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigate("/Contactform")}
          >
            New
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Organization</th>
              <th className="border px-4 py-2 text-left">Account</th>
              <th className="border px-4 py-2 text-left">Updated By</th>
              <th className="border px-4 py-2 text-left">Last Service Date</th>
              <th className="border px-4 py-2 text-left">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{c.first_name} {c.last_name}</td>
                <td className="border px-4 py-2">{c.email}</td>
                <td className="border px-4 py-2">{c.phone}</td>
                <td className="border px-4 py-2">{c.organization_name || "-"}</td>
                <td className="border px-4 py-2">{c.account_name || "-"}</td>
                <td className="border px-4 py-2">{c.updated_by_name || "-"}</td>
                <td className="border px-4 py-2">{c.last_service_date || "-"}</td>
                <td className="border px-4 py-2">{new Date(c.updated_at).toLocaleString()}</td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewContact;
