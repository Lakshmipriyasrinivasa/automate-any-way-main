// // export default ServicePage;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface Contract {
//   id: string;
//   contract_number: string;
//   contract_name: string;
//   account_name: string;
//   start_date: string;
//   end_date: string;
//   grand_total: string;
// }

// function ServicePage() {
//   const navigate = useNavigate();
//   const [contracts, setContracts] = useState<Contract[]>([]);

//   useEffect(() => {
//   fetch("http://localhost:5000/api/service-contracts")
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.success && Array.isArray(data.contracts)) {
//         setContracts(data.contracts);
//       } else {
//         setContracts([]);
//       }
//     })
//     .catch((err) => console.error("Failed to fetch contracts", err));
// }, []);


//   const handleAddClick = () => {
//     navigate("/servicecontractinfo");
//   };

//   return (
//     <div>
//       <div style={styles.header}>
//         <span style={styles.dropdown}>Recently Viewed ▼</span>
//         <button style={styles.newButton} onClick={handleAddClick}>
//           New
//         </button>
//       </div>

//      <thead>
//   <tr>
//     <th style={styles.th}>Contract Number</th>
//     <th style={styles.th}>Contract Name</th>
//     <th style={styles.th}>Account</th>
//     <th style={styles.th}>Start Date</th>
//     <th style={styles.th}>End Date</th>
//     <th style={styles.th}>Grand Total</th>
//   </tr>
// </thead>
// <tbody>
//   {contracts.map((c) => (
//     <tr key={c.id}>
//       <td style={styles.td}>{c.contract_number}</td>
//       <td style={styles.td}>{c.contract_name}</td>
//       <td style={styles.td}>{c.account_name}</td>
//       <td style={styles.td}>{c.start_date}</td>
//       <td style={styles.td}>{c.end_date}</td>
//       <td style={styles.td}>{c.grand_total} ₹</td>
//     </tr>
//   ))}
// </tbody>

//     </div>
//   );
// }

// const styles: any = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px 20px",
//     borderBottom: "1px solid #ddd",
//   },
//   dropdown: { fontSize: "14px", color: "#555" },
//   newButton: {
//     backgroundColor: "#0070d2",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     padding: "5px 12px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "20px",
//   },
//   th: { border: "1px solid #ddd", padding: "8px" },
//   td: { border: "1px solid #ddd", padding: "8px" },
// };

// export default ServicePage;  
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Contract {
  id: string;
  contract_number: string;
  contract_name: string;
  account_name: string;
  start_date: string;
  end_date: string;
  grand_total: string;
}

function ServicePage() {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/service-contracts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.contracts)) {
          setContracts(data.contracts);
        } else {
          setContracts([]);
        }
      })
      .catch((err) => console.error("Failed to fetch contracts", err));
  }, []);

  const handleAddClick = () => {
    navigate("/servicecontractinfo");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={styles.header}>
        <span style={styles.dropdown}>Recently Viewed ▼</span>
        <button style={styles.newButton} onClick={handleAddClick}>
          New
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Contract Number</th>
            <th style={styles.th}>Contract Name</th>
            <th style={styles.th}>Account</th>
            <th style={styles.th}>Start Date</th>
            <th style={styles.th}>End Date</th>
            <th style={styles.th}>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((c, idx) => (
            <tr
              key={c.id}
              style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <td style={styles.td}>{c.contract_number}</td>
              <td style={styles.td}>{c.contract_name}</td>
              <td style={styles.td}>{c.account_name}</td>
              <td style={styles.td}>
                {c.start_date ? new Date(c.start_date).toLocaleDateString() : ""}
              </td>
              <td style={styles.td}>
                {c.end_date ? new Date(c.end_date).toLocaleDateString() : ""}
              </td>
              <td style={styles.td}>{c.grand_total} ₹</td>
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

export default ServicePage;
