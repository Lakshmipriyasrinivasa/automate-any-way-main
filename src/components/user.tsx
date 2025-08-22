import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

const Users: React.FC = () => {
  const [recentUsers, setRecentUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // ⬅️ Check if a new user was passed from UserForm
  useEffect(() => {
    if (location.state?.newUser) {
      setRecentUsers((prev) => [location.state.newUser, ...prev]);
    }
  }, [location.state]);

  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      {/* Left: Recent Users */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recently Updated Users</h2>
        {recentUsers.length === 0 ? (
          <p className="text-gray-500">No recent updates</p>
        ) : (
          <ul className="space-y-2">
            {recentUsers.map((u) => (
              <li key={u.id} className="p-3 border rounded-md shadow-sm">
                <div className="font-semibold">
                  {u.first_name} {u.last_name}
                </div>
                <div className="text-sm text-gray-600">{u.email}</div>
                <div className="text-xs text-gray-400">
                  {new Date(u.created_at).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: New User Button */}
      <div className="flex justify-end items-start">
        <Button onClick={() => navigate("/newuser")}>➕ New User</Button>
      </div>
    </div>
  );
};

export default Users;
