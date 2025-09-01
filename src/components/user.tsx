// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate, useLocation } from "react-router-dom";

// interface User {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   role: string;
//   is_active: boolean;
//   created_at: string;
// }

// const Users: React.FC = () => {
//   const [recentUsers, setRecentUsers] = useState<User[]>([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ⬅️ Check if a new user was passed from UserForm
//   useEffect(() => {
//     if (location.state?.newUser) {
//       setRecentUsers((prev) => [location.state.newUser, ...prev]);
//     }
//   }, [location.state]);

//   return (
//     <div className="p-6 grid grid-cols-2 gap-6">
//       {/* Left: Recent Users */}
//       <div>
//         <h2 className="text-xl font-bold mb-4">Recently Updated Users</h2>
//         {recentUsers.length === 0 ? (
//           <p className="text-gray-500">No recent updates</p>
//         ) : (
//           <ul className="space-y-2">
//             {recentUsers.map((u) => (
//               <li key={u.id} className="p-3 border rounded-md shadow-sm">
//                 <div className="font-semibold">
//                   {u.first_name} {u.last_name}
//                 </div>
//                 <div className="text-sm text-gray-600">{u.email}</div>
//                 <div className="text-xs text-gray-400">
//                   {new Date(u.created_at).toLocaleString()}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Right: New User Button */}
//       <div className="flex justify-end items-start">
//         <Button onClick={() => navigate("/newuser")}>➕ New User</Button>
//       </div>
//     </div>
//   );
// };
// export default Users;
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  // ✅ Fetch users from DB
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users"); // adjust API URL
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      {/* Header with button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Users</h2>
        <Button onClick={() => navigate("/newuser")}>➕ New User</Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Role</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">
                    {u.first_name} {u.last_name}
                  </td>
                  <td className="p-3 border-b">{u.email}</td>
                  <td className="p-3 border-b">{u.role}</td>
                  <td className="p-3 border-b">
                    {u.is_active ? (
                      <span className="text-green-600 font-semibold">Active</span>
                    ) : (
                      <span className="text-red-500 font-semibold">Inactive</span>
                    )}
                  </td>
                  <td className="p-3 border-b text-gray-500 text-sm">
                    {new Date(u.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
