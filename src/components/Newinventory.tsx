
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface InventoryFormData {
//   org_id: string; // keep as string for the <select>
//   item_number: string;
//   item_name: string;
//   item_description?: string;
//   category?: string;
//   subcategory?: string;
//   unit_of_measure?: string;
//   cost?: number;
//   price?: number;
//   supplier_id?: number;
//   stock_quantity?: number;
//   minimum_stock?: number;
//   maximum_stock?: number;
//   reorder_point?: number;
//   warehouse_location?: string;
//   bin_location?: string;
//   serial_tracked?: boolean;
//   lot_tracked?: boolean;
//   expiry_date?: string;
//   last_purchase_date?: string;
//   last_sale_date?: string;
//   weight?: number;
//   dimensions?: string;
//   barcode?: string;
//   image_url?: string;
//   status?: string;
//   created_by?: string;
//   updated_by?: string;
// }

// interface Organization {
//   id: number;
//   name: string;
// }

// const InventoryForm: React.FC = () => {
//   const [formData, setFormData] = useState<InventoryFormData>({
//     org_id: "",
//     item_number: "",
//     item_name: "",
//     status: "active",
//   });

//   const [organizations, setOrganizations] = useState<Organization[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/organizations")
//       .then((res) => setOrganizations(res.data))
//       .catch(console.error);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type } = e.target;
//     let fieldValue: any;

//     if (type === "checkbox" && e.target instanceof HTMLInputElement) {
//       fieldValue = e.target.checked;
//     } else if (
//       [
//         // NOTE: org_id REMOVED from this list
//         "stock_quantity",
//         "minimum_stock",
//         "maximum_stock",
//         "reorder_point",
//         "supplier_id",
//         "cost",
//         "price",
//         "weight",
//       ].includes(name)
//     ) {
//       fieldValue = value === "" ? "" : Number(value);
//     } else {
//       fieldValue = value; // org_id stays a string here
//     }

//     setFormData((prev) => ({ ...prev, [name]: fieldValue }));
//   };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const payload = {
//       ...formData,
//       org_id: formData.org_id ? Number(formData.org_id) : null, // ensure number
//     };

//     console.log("Submitting payload:", payload);

//     await axios.post("http://localhost:5000/api/inventory", payload);
//     alert("Inventory added successfully!");
//     setFormData({ org_id: "", item_number: "", item_name: "", status: "active" });
//   } catch (err) {
//     console.error("Submit error:", err);
//     alert("Error adding inventory item.");
//   }
// };


//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold mb-6">Add Inventory Item</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Organization */}
//         <label className="block">
//           <span className="font-semibold">Organization</span>
//           <select
//             name="org_id"
//             value={formData.org_id} // keep as string
//             onChange={handleChange}
//             required
//             className="w-full border rounded px-2 py-1 mt-1"
//           >
//             <option value="">Select Organization</option>
//             {organizations.map((org) => (
//               <option key={org.id} value={String(org.id)}>
//                 {org.name}
//               </option>
//             ))}
//           </select>
//         </label>

//         {/* Basic info */}
//         <label className="block">
//           <span className="font-semibold">Item Number</span>
//           <input
//             type="text"
//             name="item_number"
//             value={formData.item_number}
//             onChange={handleChange}
//             className="w-full border rounded px-2 py-1 mt-1"
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="font-semibold">Item Name</span>
//           <input
//             type="text"
//             name="item_name"
//             value={formData.item_name}
//             onChange={handleChange}
//             className="w-full border rounded px-2 py-1 mt-1"
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="font-semibold">Description</span>
//           <textarea
//             name="item_description"
//             value={formData.item_description || ""}
//             onChange={handleChange}
//             className="w-full border rounded px-2 py-1 mt-1"
//           />
//         </label>

//         {/* Category / Subcategory */}
//         <div className="grid grid-cols-2 gap-4">
//           <label className="block">
//             <span className="font-semibold">Category</span>
//             <input
//               type="text"
//               name="category"
//               value={formData.category || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label className="block">
//             <span className="font-semibold">Subcategory</span>
//             <input
//               type="text"
//               name="subcategory"
//               value={formData.subcategory || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//         </div>

//         {/* Stock, price, supplier */}
//         <div className="grid grid-cols-3 gap-4">
//           <label className="block">
//             <span className="font-semibold">Stock Quantity</span>
//             <input
//               type="number"
//               name="stock_quantity"
//               value={formData.stock_quantity ?? ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label className="block">
//             <span className="font-semibold">Cost</span>
//             <input
//               type="number"
//               step="0.01"
//               name="cost"
//               value={formData.cost ?? ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label className="block">
//             <span className="font-semibold">Price</span>
//             <input
//               type="number"
//               step="0.01"
//               name="price"
//               value={formData.price ?? ""} // ✅ ok
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//         </div>

//         <label className="block">
//           <span className="font-semibold">Supplier ID</span>
//           <input
//             type="number"
//             name="supplier_id"
//             value={formData.supplier_id ?? ""}
//             onChange={handleChange}
//             className="w-full border rounded px-2 py-1 mt-1"
//           />
//         </label>

//         {/* Warehouse / Bin */}
//         <div className="grid grid-cols-2 gap-4">
//           <label className="block">
//             <span className="font-semibold">Warehouse Location</span>
//             <input
//               type="text"
//               name="warehouse_location"
//               value={formData.warehouse_location || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label className="block">
//             <span className="font-semibold">Bin Location</span>
//             <input
//               type="text"
//               name="bin_location"
//               value={formData.bin_location || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//         </div>

//         {/* Serial / Lot Tracking */}
//         <div className="flex gap-4">
//           <label>
//             <input
//               type="checkbox"
//               name="serial_tracked"
//               checked={formData.serial_tracked || false}
//               onChange={handleChange}
//             />
//             <span className="ml-2">Serial Tracked</span>
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="lot_tracked"
//               checked={formData.lot_tracked || false}
//               onChange={handleChange}
//             />
//             <span className="ml-2">Lot Tracked</span>
//           </label>
//         </div>

//         {/* Dates */}
//         <div className="grid grid-cols-3 gap-4">
//           <label>
//             <span className="font-semibold">Expiry Date</span>
//             <input
//               type="date"
//               name="expiry_date"
//               value={formData.expiry_date || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label>
//             <span className="font-semibold">Last Purchase Date</span>
//             <input
//               type="date"
//               name="last_purchase_date"
//               value={formData.last_purchase_date || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label>
//             <span className="font-semibold">Last Sale Date</span>
//             <input
//               type="date"
//               name="last_sale_date"
//               value={formData.last_sale_date || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//         </div>

//         {/* Dimensions / Weight / Barcode / Image */}
//         <div className="grid grid-cols-4 gap-4">
//           <label>
//             <span className="font-semibold">Weight</span>
//             <input
//               type="number"
//               step="0.01"
//               name="weight"
//               value={formData.weight ?? ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label>
//             <span className="font-semibold">Dimensions</span>
//             <input
//               type="text"
//               name="dimensions"
//               value={formData.dimensions || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label>
//             <span className="font-semibold">Barcode</span>
//             <input
//               type="text"
//               name="barcode"
//               value={formData.barcode || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//           <label>
//             <span className="font-semibold">Image URL</span>
//             <input
//               type="text"
//               name="image_url"
//               value={formData.image_url || ""}
//               onChange={handleChange}
//               className="w-full border rounded px-2 py-1 mt-1"
//             />
//           </label>
//         </div>

//         {/* Status */}
//         <label>
//           <span className="font-semibold">Status</span>
//           <select
//             name="status"
//             value={formData.status || "active"}
//             onChange={handleChange}
//             className="w-full border rounded px-2 py-1 mt-1"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </label>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
//           Add Inventory
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InventoryForm;
import React, { useState, useEffect } from "react";
import axios from "axios";

interface InventoryFormData {
  org_id: string;
  item_number: string;
  item_name: string;
  item_description?: string;
  category?: string;
  subcategory?: string;
  unit_of_measure?: string;
  cost?: number;
  price?: number;
  supplier_id?: number;
  stock_quantity?: number;
  minimum_stock?: number;
  maximum_stock?: number;
  reorder_point?: number;
  warehouse_location?: string;
  bin_location?: string;
  serial_tracked?: boolean;
  lot_tracked?: boolean;
  expiry_date?: string;
  last_purchase_date?: string;
  last_sale_date?: string;
  weight?: number;
  dimensions?: string;
  barcode?: string;
  image_url?: string;
  status?: string;
  created_by?: string;
  updated_by?: string;
}

interface Organization {
  id: number;
  name: string;
}

const InventoryForm: React.FC = () => {
  const [formData, setFormData] = useState<InventoryFormData>({
    org_id: "",
    item_number: "",
    item_name: "",
    status: "active",
  });

  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/organizations")
      .then((res) => setOrganizations(res.data))
      .catch(console.error);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let fieldValue: any;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    } else if (
      [
        "stock_quantity",
        "minimum_stock",
        "maximum_stock",
        "reorder_point",
        "supplier_id",
        "cost",
        "price",
        "weight",
      ].includes(name)
    ) {
      fieldValue = value === "" ? undefined : Number(value);
    } else {
      fieldValue = value;
    }

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
org_id: formData.org_id || null,  // keep as string
      serial_tracked: formData.serial_tracked || false,
      lot_tracked: formData.lot_tracked || false,
      expiry_date: formData.expiry_date || null,
      cost: formData.cost ? Number(formData.cost) : undefined,
      price: formData.price ? Number(formData.price) : undefined,
      stock_quantity: formData.stock_quantity ? Number(formData.stock_quantity) : undefined,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await axios.post("http://localhost:5000/api/inventory", payload);
      console.log("Inventory added:", response.data);
      alert("Inventory added successfully!");
      setFormData({
        org_id: "",
        item_number: "",
        item_name: "",
        status: "active",
      });
    } catch (error: any) {
      console.error("Submit error:", error.response?.data || error.message);
      alert("Error adding inventory item.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Inventory Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Organization */}
        <label className="block">
          <span className="font-semibold">Organization</span>
          <select
            name="org_id"
            value={formData.org_id}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1 mt-1"
          >
            <option value="">Select Organization</option>
            {organizations.map((org) => (
              <option key={org.id} value={String(org.id)}>
                {org.name}
              </option>
            ))}
          </select>
        </label>

        {/* Item Number */}
        <label className="block">
          <span className="font-semibold">Item Number</span>
          <input
            type="text"
            name="item_number"
            value={formData.item_number}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1 mt-1"
            required
          />
        </label>

        {/* Item Name */}
        <label className="block">
          <span className="font-semibold">Item Name</span>
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1 mt-1"
            required
          />
        </label>

        {/* Description */}
        <label className="block">
          <span className="font-semibold">Description</span>
          <textarea
            name="item_description"
            value={formData.item_description || ""}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1 mt-1"
          />
        </label>

        {/* Stock / Price / Supplier */}
        <div className="grid grid-cols-3 gap-4">
          <label>
            <span className="font-semibold">Stock Quantity</span>
            <input
              type="number"
              name="stock_quantity"
              value={formData.stock_quantity ?? ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
          <label>
            <span className="font-semibold">Cost</span>
            <input
              type="number"
              step="0.01"
              name="cost"
              value={formData.cost ?? ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
          <label>
            <span className="font-semibold">Price</span>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price ?? ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
        </div>
         <label className="block">
          <span className="font-semibold">Supplier ID</span>
          <input type="number" name="supplier_id" value={formData.supplier_id ?? ""} onChange={handleChange} className="w-full border rounded px-2 py-1 mt-1" />
        </label>


        {/* Serial / Lot Tracking */}
        <div className="flex gap-4">
          <label>
            <input
              type="checkbox"
              name="serial_tracked"
              checked={formData.serial_tracked || false}
              onChange={handleChange}
            />
            <span className="ml-2">Serial Tracked</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="lot_tracked"
              checked={formData.lot_tracked || false}
              onChange={handleChange}
            />
            <span className="ml-2">Lot Tracked</span>
          </label>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-3 gap-4">
          <label>
            <span className="font-semibold">Expiry Date</span>
            <input
              type="date"
              name="expiry_date"
              value={formData.expiry_date || ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
          <label>
            <span className="font-semibold">Last Purchase Date</span>
            <input
              type="date"
              name="last_purchase_date"
              value={formData.last_purchase_date || ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
          <label>
            <span className="font-semibold">Last Sale Date</span>
            <input
              type="date"
              name="last_sale_date"
              value={formData.last_sale_date || ""}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </label>
        </div>

        {/* Status */}
        <label>
          <span className="font-semibold">Status</span>
          <select
            name="status"
            value={formData.status || "active"}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1 mt-1"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
        >
          Add Inventory
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
