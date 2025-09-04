import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  alias: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  is_active: boolean;
  updated_at?: string;
}

const UserList: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User</h1>
        <Button onClick={() => navigate("/newuser")}>New</Button>
      </div>
      <div className="mb-2 text-sm text-gray-600">Recently Viewed ▼</div>
      <div className="mb-4 text-xs text-gray-400">
        {users.length} items - Updated just now
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Active</th>
              {/* <th className="px-4 py-2 text-left">Updated At</th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user.id || user.email}>
  <td className="px-4 py-2">{user.first_name} {user.last_name}</td>
  <td className="px-4 py-2">{user.email || "-"}</td>
  <td className="px-4 py-2">{user.phone || "-"}</td>
  <td className="px-4 py-2">{user.company || "-"}</td>
  <td className="px-4 py-2">{user.role || "-"}</td>
  <td className="px-4 py-2">{user.is_active ? "Yes" : "No"}</td>
  {/* <td className="px-4 py-2">{user.updated_at ? new Date(user.updated_at).toLocaleString() : "-"}</td> */}
</tr>

              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
