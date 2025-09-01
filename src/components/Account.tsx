// import React, { useEffect, useState } from "react";

// interface Account {
//   id: string;
//   organization_id: string | null;
//   name: string;
//   status: string;
//   type: string;
//   industry: string;
//   territory_id: string | null;
//   contract_status: string;
//   credit_limit: number | null;
//   payment_terms: string;
//   total_revenue: number | null;
//   customer_rating: string;
//   account_manager: string | null;
// }

// const Accounts: React.FC = () => {
//   const [accounts, setAccounts] = useState<Account[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAccounts();
//   }, []);

//   const fetchAccounts = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/accounts");
//       const data = await res.json();
//       setAccounts(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   if (loading) return <p className="text-center mt-5">Loading accounts...</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Accounts Records</h2>
//       <div className="overflow-x-auto border rounded-xl shadow-md">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Industry</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Credit Limit</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total Revenue</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Account Manager</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {accounts.map((acc) => (
//               <tr key={acc.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2">{acc.name}</td>
//                 <td className="px-4 py-2">{acc.status}</td>
//                 <td className="px-4 py-2">{acc.type}</td>
//                 <td className="px-4 py-2">{acc.industry}</td>
//                 <td className="px-4 py-2">{acc.credit_limit ?? "-"}</td>
//                 <td className="px-4 py-2">{acc.total_revenue ?? "-"}</td>
//                 <td className="px-4 py-2">{acc.account_manager ?? "-"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Accounts;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Account {
  id: string;
  organization_id: string | null;
  name: string;
  status: string;
  type: string;
  industry: string;
  territory_id: string | null;
  contract_status: string;
  credit_limit: number | null;
  payment_terms: string;
  total_revenue: number | null;
  customer_rating: string;
  account_manager: string | null;
}

function Accounts() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/accounts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAccounts(data);
        } else {
          setAccounts([]);
        }
      })
      .catch((err) => console.error("Failed to fetch accounts", err));
  }, []);

  const handleAddClick = () => {
    navigate("/accountform"); // 👈 route to your AccountForm page
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.dropdown}>Recently Viewed ▼</span>
        <button style={styles.newButton} onClick={handleAddClick}>
          New
        </button>
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Account Name</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Industry</th>
            <th style={styles.th}>Credit Limit</th>
            <th style={styles.th}>Total Revenue</th>
            <th style={styles.th}>Account Manager</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((a, idx) => (
            <tr key={a.id} style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{a.name}</td>
              <td style={styles.td}>{a.status}</td>
              <td style={styles.td}>{a.type}</td>
              <td style={styles.td}>{a.industry}</td>
              <td style={styles.td}>{a.credit_limit ?? "-"}</td>
              <td style={styles.td}>{a.total_revenue ?? "-"}</td>
              <td style={styles.td}>{a.account_manager ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles: any = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "15px",
    borderBottom: "2px solid #eee",
  },
  dropdown: { fontSize: "14px", color: "#555" },
  newButton: {
    backgroundColor: "#0070d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 6px",
    marginTop: "20px",
  },
  th: {
    backgroundColor: "#f5f5f5",
    textAlign: "left",
    padding: "12px",
    fontWeight: 600,
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "10px 12px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },
  evenRow: { backgroundColor: "#fff" },
  oddRow: { backgroundColor: "#f9f9f9" },
};

export default Accounts;
