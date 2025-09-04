import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface InventoryItem {
  id: number | string;
  org_id: string;
  item_number: string;
  item_name: string;
  item_description?: string;
  category?: string;
  stock_quantity?: number;
  cost?: number | null;
  price?: number | null;
  supplier_id?: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

const InventoryList: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading inventory:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory</h1>
        <Button onClick={() => navigate("/Newinventory")}>New</Button>
      </div>
      <div className="mb-2 text-sm text-gray-600">Recently Viewed ▼</div>
      <div className="mb-4 text-xs text-gray-400">
        {items.length} items - Updated just now
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Item Number</th>
              <th className="px-4 py-2 text-left">Item Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Stock Quantity</th>
              {/* <th className="px-4 py-2 text-left">Cost</th> */}
              {/* <th className="px-4 py-2 text-left">Price</th> */}
              <th className="px-4 py-2 text-left">Status</th>
              {/* <th className="px-4 py-2 text-left">Updated At</th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              items.map(item => (
                <tr key={item.id || item.item_number} className="border-t">
                  <td className="px-4 py-2">{item.item_number || "-"}</td>
                  <td className="px-4 py-2">{item.item_name || "-"}</td>
                  <td className="px-4 py-2">{item.item_description || "-"}</td>
                  <td className="px-4 py-2">{item.category || "-"}</td>
                  <td className="px-4 py-2">{item.stock_quantity !== undefined ? item.stock_quantity : "-"}</td>
                  {/* <td className="px-4 py-2">{typeof item.cost === "number" ? item.cost.toFixed(2) : "-"}</td> */}
                  {/* <td className="px-4 py-2">{typeof item.price === "number" ? item.price.toFixed(2) : "-"}</td> */}
                  <td className="px-4 py-2">{item.status || "-"}</td>
                  {/* <td className="px-4 py-2">{item.updated_at ? new Date(item.updated_at).toLocaleString() : "-"}</td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;

// import React from 'react'

// const inventory = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default inventory
