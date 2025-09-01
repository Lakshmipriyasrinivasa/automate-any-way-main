
// // // // // export default Asset;
// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // interface Asset {
// // // //   id: number;
// // // //   assetName: string;
// // // //   serialNumber: string;
// // // //   installDate: string;
// // // //   accountName: string;
// // // //   contactName: string;
// // // // }

// // // // const AssetsTable: React.FC = () => {
// // // //   const navigate = useNavigate();
// // // //   const [assets, setAssets] = useState<Asset[]>([
// // // //     {
// // // //       id: 1,
// // // //       assetName: 'tools',
// // // //       serialNumber: '',
// // // //       installDate: '',
// // // //       accountName: 'hyatt',
// // // //       contactName: 'Kiruthiga Eswararaj',
// // // //     },
// // // //   ]);
// // // //   const [editId, setEditId] = useState<number | null>(null);
// // // //   const [editValue, setEditValue] = useState<string>('');

// // // //   const handleEdit = (id: number, value: string) => {
// // // //     setEditId(id);
// // // //     setEditValue(value);
// // // //   };

// // // //   const handleSave = (id: number) => {
// // // //     setAssets(assets.map(asset =>
// // // //       asset.id === id ? { ...asset, assetName: editValue } : asset
// // // //     ));
// // // //     setEditId(null);
// // // //   };

// // // //   const handleNewAsset = () => {
// // // //     navigate("/assets/new");
// // // //   };
  

// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
// // // //         <div>
// // // //           <h2 style={{ margin: 0 }}>Assets</h2>
// // // //           <span style={{ color: '#666' }}>Recently Viewed ▼</span>
// // // //         </div>
// // // //         <button
// // // //           style={{ background: '#0073aa', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
// // // //           onClick={handleNewAsset}
// // // //         >
// // // //           New
// // // //         </button>
// // // //       </div>
// // // //       <p style={{ color: '#666', margin: '5px 0' }}>1 item - Updated a few seconds ago</p>
// // // //       <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search this list..."
// // // //           style={{ padding: '5px', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
// // // //         />
// // // //       </div>
// // // //       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// // // //         <thead>
// // // //           <tr style={{ background: '#f5f5f5' }}>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}>Asset Name</th>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}>Serial Number</th>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}>Install Date</th>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}>Account Name</th>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}>Contact Name</th>
// // // //             <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {assets.map((asset) => (
// // // //             <tr key={asset.id}>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>
// // // //                 {editId === asset.id ? (
// // // //                   <input
// // // //                     type="text"
// // // //                     value={editValue}
// // // //                     onChange={(e) => setEditValue(e.target.value)}
// // // //                     onBlur={() => handleSave(asset.id)}
// // // //                     autoFocus
// // // //                     style={{ border: '1px solid #0073aa', padding: '2px' }}
// // // //                   />
// // // //                 ) : (
// // // //                   <span
// // // //                     style={{ cursor: 'pointer', color: '#0073aa' }}
// // // //                     onClick={() => handleEdit(asset.id, asset.assetName)}
// // // //                   >
// // // //                     {asset.assetName}
// // // //                   </span>
// // // //                 )}
// // // //               </td>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.serialNumber}</td>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.installDate}</td>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.accountName}</td>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.contactName}</td>
// // // //               <td style={{ padding: '8px', border: '1px solid #ddd' }}>
// // // //                 {/* Placeholder for action icons */}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AssetsTable;
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // interface Asset {
// // //   id: number;
// // //   Asset Name: string;    // ✅ match backend keys
// // //   Asset Number: string;
// // //   Installation Date: string;
// // //   Asset Type: string;
// // //   Contact: string;
// // // }

// // // const AssetsPage: React.FC = () => {
// // //   const navigate = useNavigate();
// // //   const [assets, setAssets] = useState<Asset[]>([]);

// // //   // Fetch all assets
// // //   useEffect(() => {
// // //   fetch("http://localhost:5000/api/assets")
// // //     .then((res) => res.json())
// // //     .then((data) => {
// // //       console.log("Fetched assets:", data); // <-- see what backend sends
// // //       setAssets(data);
// // //     })
// // //     .catch((err) => console.error("Error fetching assets:", err));
// // // }, []);

// // //   return (
// // //     <div style={{ padding: "20px" }}>
// // //       {/* Header */}
// // //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //         <div>
// // //           <h2>Assets</h2>
// // //           <span style={{ color: "#666" }}>Recently Viewed ▼</span>
// // //         </div>
// // //         <button
// // //           style={{
// // //             background: "#0073aa",
// // //             color: "white",
// // //             border: "none",
// // //             padding: "5px 10px",
// // //             borderRadius: "4px",
// // //           }}
// // //           onClick={() => navigate("/assets/new")}
// // //         >
// // //           New
// // //         </button>
// // //       </div>

// // //       <p style={{ color: "#666", margin: "5px 0" }}>
// // //         {assets.length} item{assets.length !== 1 && "s"} - Updated just now
// // //       </p>

// // //       {/* ✅ Proper table wrapper */}
// // //       <table style={{ width: "100%", borderCollapse: "collapse" }}>
// // //         <thead>
// // //           <tr style={{ background: "#f5f5f5" }}>
// // //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Name</th>
// // //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Serial Number</th>
// // //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Install Date</th>
// // //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Account Name</th>
// // //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Contact Name</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {assets.map((asset) => (
// // //             <tr key={asset.id}>
// // //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.asset_name}</td>
// // //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.serial_no || "-"}</td>
// // //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.install_date || "-"}</td>
// // //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.account_name || "-"}</td>
// // //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.contact_name || "-"}</td>
// // //             </tr>
// // //           ))}

// // //           {assets.length === 0 && (
// // //             <tr>
// // //               <td colSpan={5} style={{ textAlign: "center", padding: "10px", color: "#666" }}>
// // //                 No assets found.
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default AssetsPage;
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // interface Asset {
// //   id: number;
// //   asset_name: string;
// //   serial_no: string;
// //   install_date: string;
// //   asset_type: string;
// //   contact_name: string;
// // }

// // const AssetsPage: React.FC = () => {
// //   const navigate = useNavigate();
// //   const [assets, setAssets] = useState<Asset[]>([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/newassets")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log("Fetched assets:", data);
// //         setAssets(data);
// //       })
// //       .catch((err) => console.error("Error fetching assets:", err));
// //   }, []);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       {/* Header */}
// //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //         <div>
// //           <h2>Assets</h2>
// //           <span style={{ color: "#666" }}>Recently Viewed ▼</span>
// //         </div>
// //         <button
// //           style={{
// //             background: "#0073aa",
// //             color: "white",
// //             border: "none",
// //             padding: "5px 10px",
// //             borderRadius: "4px",
// //           }}
// //           onClick={() => navigate("/assets/new")}
// //         >
// //           New
// //         </button>
// //       </div>

// //       <p style={{ color: "#666", margin: "5px 0" }}>
// //         {assets.length} item{assets.length !== 1 && "s"} - Updated just now
// //       </p>

// //       {/* Table */}
// //       <table style={{ width: "100%", borderCollapse: "collapse" }}>
// //         <thead>
// //           <tr style={{ background: "#f5f5f5" }}>
// //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Name</th>
// //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Serial Number</th>
// //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Install Date</th>
// //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Type</th>
// //             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Contact Name</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {assets.length === 0 && (
// //             <tr>
// //               <td colSpan={5} style={{ textAlign: "center", padding: "10px", color: "#666" }}>
// //                 No assets found.
// //               </td>
// //             </tr>
// //           )}
// //           {assets.map((asset) => (
// //             <tr key={asset.id}>
// //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.asset_name || "-"}</td>
// //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.serial_no || "-"}</td>
// //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.install_date || "-"}</td>
// //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.asset_type || "-"}</td>
// //               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.contact_name || "-"}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AssetsPage;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// interface Asset {
//   id: number;
//   "Asset Name": string;
//   "Asset Number": string;
//   "Installation Date": string;
//   "Asset Type": string;
//   Contact: string;
// }

// const AssetsPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [assets, setAssets] = useState<Asset[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/assets")
//       .then((res) => res.json())
//       .then((data) => setAssets(data))
//       .catch((err) => console.error("Error fetching assets:", err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Header */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <h2>Assets</h2>
//           <span style={{ color: "#666" }}>Recently Viewed ▼</span>
//         </div>
//         <button
//           style={{
//             background: "#0073aa",
//             color: "white",
//             border: "none",
//             padding: "5px 10px",
//             borderRadius: "4px",
//           }}
//           onClick={() => navigate("/assets/new")}
//         >
//           New
//         </button>
//       </div>

//       <p style={{ color: "#666", margin: "5px 0" }}>
//         {assets.length} item{assets.length !== 1 && "s"} - Updated just now
//       </p>

//       {/* Table */}
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ background: "#f5f5f5" }}>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Name</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Number</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Installation Date</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Asset Type</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assets.length === 0 && (
//             <tr>
//               <td colSpan={5} style={{ textAlign: "center", padding: "10px", color: "#666" }}>
//                 No assets found.
//               </td>
//             </tr>
//           )}

//           {assets.map((asset) => (
//             <tr key={asset.id}>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset["Asset Name"] || "-"}</td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset["Asset Number"] || "-"}</td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset["Installation Date"] || "-"}</td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset["Asset Type"] || "-"}</td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>{asset.Contact || "-"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AssetsPage;
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Asset {
  id: number;
  "Asset Name": string;
  "Asset Number": string;
  "Installation Date": string;
  "Asset Type": string;
  Contact: string;
}

const AssetPage: React.FC = () => {
  const navigate = useNavigate();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch assets function (can be called to refresh table)
  const fetchAssets = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/newassets") // replace with your backend URL
      .then((res) => res.json())
      .then((data: Asset[]) => {
        setAssets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching assets:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  if (loading) return <p>Loading assets...</p>;
  if (assets.length === 0) return <p>No assets found.</p>;

  // Dynamically generate headers from object keys
  const headers = Object.keys(assets[0]);

  return (
    <div className="p-4">
      {/* Header */}
        <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>         <div>
       <h2 style={{ margin: 0 }}>Assets</h2>
           <span style={{ color: '#666' }}>Recently Viewed ▼</span>
            <p className="text-xs text-gray-500 mt-1">
      {assets.length} item{assets.length !== 1 && "s"} - Updated just now
    </p>
</div>      
  <Button
  className="bg-blue-600 text-white hover:bg-blue-700"
  onClick={() => navigate("/assets/new")}
>
  New
</Button>

</div>


      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              {headers.map((header) => (
                <th key={header} className="border px-4 py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                {headers.map((header) => (
                  <td key={header} className="border px-4 py-2">
                    {asset[header as keyof Asset] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AssetPage;
