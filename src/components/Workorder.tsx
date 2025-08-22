// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const WorkOrderForm: React.FC = () => {
//   const [types, setTypes] = useState<{ id: string; name: string }[]>([]);
//   const [statuses, setStatuses] = useState<{ id: string; name: string }[]>([]);
//   const [priorities, setPriorities] = useState<{ id: string; name: string }[]>([]);

//   const [formData, setFormData] = useState({
//     organization_id: "",
//     work_order_number: "",
//     title: "",
//     description: "",
//     long_description: "",
//     status_id: "",
//     priority_id: "",
//     type_id: "",
//     customer_id: "",
//     asset_id: "",
//     customer_contact_id: "",
//     estimated_duration: "",
//     actual_start_date: "",
//     completion_date: "",
//     assigned_to: "",
//     supervisor_id: "",
//     labor_hours: "",
//     failure_code_id: "",
//     resolution_code_id: "",
//     billing_status_id: "",
//     total_cost: "",
//     notes: "",
//     attachments: "",
//     scheduled_at: "",
//     created_by: "",
//     updated_by: "",
//   });

//   // Fetch dropdown data from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/work_order_types")
//       .then(res => setTypes(res.data))
//       .catch(err => console.error(err));

//     axios.get("http://localhost:5000/api/work_order_statuses")
//       .then(res => setStatuses(res.data))
//       .catch(err => console.error(err));

//     axios.get("http://localhost:5000/api/work_order_priorities")
//       .then(res => setPriorities(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSelect = (name: string, value: string) => {
//     setFormData({ ...formData, [name]: value });
//   };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post("http://localhost:5000/api/work_orders", formData);

//     // const res = await axios.post("http://localhost:5000/api/work_orders", formData);
//     alert("✅ Work Order Created: " + response.data.id);

//     // reset form after submission
//     setFormData({
//       organization_id: "",
//       work_order_number: "",
//       title: "",
//       description: "",
//       long_description: "",
//       status_id: "",
//       priority_id: "",
//       type_id: "",
//       customer_id: "",
//       asset_id: "",
//       customer_contact_id: "",
//       estimated_duration: "",
//       actual_start_date: "",
//       completion_date: "",
//       assigned_to: "",
//       supervisor_id: "",
//       labor_hours: "",
//       failure_code_id: "",
//       resolution_code_id: "",
//       billing_status_id: "",
//       total_cost: "",
//       notes: "",
//       attachments: "",
//       scheduled_at: "",
//       created_by: "",
//       updated_by: "",
//     });
//   } catch (err) {
//     console.error(err);
//     alert("❌ Failed to create work order");
//   }
// };


//   return (
//     <form onSubmit={handleSubmit} className="grid gap-4 p-6 bg-white rounded-2xl shadow-md">
//       <h2 className="text-xl font-semibold">Create Work Order</h2>

//       {/* Organization */}
//       <label>
//         Organization ID
//         <Input name="organization_id" value={formData.organization_id} onChange={handleChange} required />
//       </label>

//       {/* Work Order Number */}
//       <label>
//         Work Order Number
//         <Input name="work_order_number" value={formData.work_order_number} onChange={handleChange} required />
//       </label>

//       {/* Title */}
//       <label>
//         Title
//         <Input name="title" value={formData.title} onChange={handleChange} required />
//       </label>

//       {/* Description */}
//       <label>
//         Short Description
//         <Textarea name="description" value={formData.description} onChange={handleChange} />
//       </label>

//       {/* Long Description */}
//       <label>
//         Long Description
//         <Textarea name="long_description" value={formData.long_description} onChange={handleChange} />
//       </label>

//         {/* Type Dropdown */}
//       <label className="block">
//         Type
//         <select
//           value={formData.type_id}
//           onChange={(e) => handleChange("type_id", e.target.value)}
//           className="w-full border rounded p-2 mt-1"
//           required
//         >
//           <option value="">Select Type</option>
//           {types.map((t) => (
//             <option key={t.id} value={t.id}>
//               {t.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Status Dropdown */}
//       <label className="block">
//         Status
//         <select
//           value={formData.status_id}
//           onChange={(e) => handleChange("status_id", e.target.value)}
//           className="w-full border rounded p-2 mt-1"
//           required
//         >
//           <option value="">Select Status</option>
//           {statuses.map((s) => (
//             <option key={s.id} value={s.id}>
//               {s.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Priority Dropdown */}
//       <label className="block">
//         Priority
//         <select
//           value={formData.priority_id}
//           onChange={(e) => handleChange("priority_id", e.target.value)}
//           className="w-full border rounded p-2 mt-1"
//           required
//         >
//           <option value="">Select Priority</option>
//           {priorities.map((p) => (
//             <option key={p.id} value={p.id}>
//               {p.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       {/* Remaining input fields (Customer, Asset, Dates, etc.) */}
//       <label>
//         Customer ID
//         <Input name="customer_id" value={formData.customer_id} onChange={handleChange} />
//       </label>

//       <label>
//         Asset ID
//         <Input name="asset_id" value={formData.asset_id} onChange={handleChange} />
//       </label>

//       <label>
//         Customer Contact ID
//         <Input name="customer_contact_id" value={formData.customer_contact_id} onChange={handleChange} />
//       </label>

//       <label>
//         Estimated Duration (minutes)
//         <Input type="number" name="estimated_duration" value={formData.estimated_duration} onChange={handleChange} />
//       </label>

//       <label>
//         Actual Start Date
//         <Input type="datetime-local" name="actual_start_date" value={formData.actual_start_date} onChange={handleChange} />
//       </label>

//       <label>
//         Completion Date
//         <Input type="datetime-local" name="completion_date" value={formData.completion_date} onChange={handleChange} />
//       </label>

//       <label>
//         Assigned Technician ID
//         <Input name="assigned_to" value={formData.assigned_to} onChange={handleChange} />
//       </label>

//       <label>
//         Supervisor ID
//         <Input name="supervisor_id" value={formData.supervisor_id} onChange={handleChange} />
//       </label>

//       <label>
//         Labor Hours
//         <Input type="number" step="0.1" name="labor_hours" value={formData.labor_hours} onChange={handleChange} />
//       </label>

//       <label>
//         Failure Code ID
//         <Input name="failure_code_id" value={formData.failure_code_id} onChange={handleChange} />
//       </label>

//       <label>
//         Resolution Code ID
//         <Input name="resolution_code_id" value={formData.resolution_code_id} onChange={handleChange} />
//       </label>

//       <label>
//         Billing Status ID
//         <Input name="billing_status_id" value={formData.billing_status_id} onChange={handleChange} />
//       </label>

//       <label>
//         Total Cost
//         <Input type="number" step="0.01" name="total_cost" value={formData.total_cost} onChange={handleChange} />
//       </label>

//       <label>
//         Notes
//         <Textarea name="notes" value={formData.notes} onChange={handleChange} />
//       </label>

//       <label>
//         Attachments (JSON)
//         <Textarea name="attachments" value={formData.attachments} onChange={handleChange} />
//       </label>

//       <label>
//         Scheduled Date
//         <Input type="datetime-local" name="scheduled_at" value={formData.scheduled_at} onChange={handleChange} />
//       </label>

//       <label>
//         Created By (User ID)
//         <Input name="created_by" value={formData.created_by} onChange={handleChange} />
//       </label>

//       <label>
//         Updated By (User ID)
//         <Input name="updated_by" value={formData.updated_by} onChange={handleChange} />
//       </label>

//       <Button type="submit" className="mt-4">
//         Submit Work Order
//       </Button>
//     </form>
//   );
// };

// // export default WorkOrderForm;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";

// // interface Option {
// //   id: string;
// //   name: string;
// // }

// // const WorkOrderForm: React.FC = () => {
// //   const [types, setTypes] = useState<Option[]>([]);
// //   const [statuses, setStatuses] = useState<Option[]>([]);
// //   const [priorities, setPriorities] = useState<Option[]>([]);
// //   const [users, setUsers] = useState<Option[]>([]); // For "Updated By"

// //   const [formData, setFormData] = useState({
// //     organization_id: "",
// //     work_order_number: "",
// //     title: "",
// //     description: "",
// //     long_description: "",
// //     status_id: "",
// //     priority_id: "",
// //     type_id: "",
// //     customer_id: "",
// //     asset_id: "",
// //     customer_contact_id: "",
// //     estimated_duration: "",
// //     actual_start_date: "",
// //     completion_date: "",
// //     assigned_to: "",
// //     supervisor_id: "",
// //     labor_hours: "",
// //     failure_code_id: "",
// //     resolution_code_id: "",
// //     billing_status_id: "",
// //     total_cost: "",
// //     notes: "",
// //     attachments: "",
// //     scheduled_at: "",
// //     created_by: "",
// //     updated_by: "",
// //   });

// //   // Fetch dropdown data
// //   useEffect(() => {
// //     axios.get("http://localhost:5000/api/work_order_types")
// //       .then(res => setTypes(res.data))
// //       .catch(console.error);

// //     axios.get("http://localhost:5000/api/work_order_statuses")
// //       .then(res => setStatuses(res.data))
// //       .catch(console.error);

// //     axios.get("http://localhost:5000/api/work_order_priorities")
// //       .then(res => setPriorities(res.data))
// //       .catch(console.error);

// //     axios.get("http://localhost:5000/api/users")
// //       .then(res => setUsers(res.data))
// //       .catch(console.error);
// //   }, []);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSelect = (name: string, value: string) => {
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/work_orders",
// //         formData
// //       );
// //       alert("✅ Work Order Created: " + response.data.id);

// //       // Reset form
// //       setFormData({
// //         organization_id: "",
// //         work_order_number: "",
// //         title: "",
// //         description: "",
// //         long_description: "",
// //         status_id: "",
// //         priority_id: "",
// //         type_id: "",
// //         customer_id: "",
// //         asset_id: "",
// //         customer_contact_id: "",
// //         estimated_duration: "",
// //         actual_start_date: "",
// //         completion_date: "",
// //         assigned_to: "",
// //         supervisor_id: "",
// //         labor_hours: "",
// //         failure_code_id: "",
// //         resolution_code_id: "",
// //         billing_status_id: "",
// //         total_cost: "",
// //         notes: "",
// //         attachments: "",
// //         scheduled_at: "",
// //         created_by: "",
// //         updated_by: "",
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       alert("❌ Failed to create work order");
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="grid gap-4 p-6 bg-white rounded-2xl shadow-md"
// //     >
// //       <h2 className="text-xl font-semibold">Create Work Order</h2>

// //       {/* Organization */}
// //       <label>
// //         Organization ID
// //         <Input
// //           name="organization_id"
// //           value={formData.organization_id}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>

// //       {/* Work Order Number */}
// //       <label>
// //         Work Order Number
// //         <Input
// //           name="work_order_number"
// //           value={formData.work_order_number}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>

// //       {/* Title */}
// //       <label>
// //         Title
// //         <Input name="title" value={formData.title} onChange={handleChange} required />
// //       </label>

// //       {/* Description */}
// //       <label>
// //         Short Description
// //         <Textarea name="description" value={formData.description} onChange={handleChange} />
// //       </label>

// //       {/* Long Description */}
// //       <label>
// //         Long Description
// //         <Textarea name="long_description" value={formData.long_description} onChange={handleChange} />
// //       </label>

// //       {/* Type Dropdown */}
// //         <label className="block">
// //             Type
// //             <select
// //               name="type_id"
// //               value={formData.type_id}
// //               onChange={(e) => handleChange("type_id", e.target.value)}
// //               className="w-full border rounded p-2 mt-1"
// //               required
// //             >
// //               <option value="">Select Type</option>
// //               {types.map((t) => (
// //                 <option key={t.id} value={t.id}>
// //                   {t.name}
// //                 </option>
// //               ))}
// //             </select>
// //           </label>

// //           {/* Status Dropdown */}
// //           <label className="block">
// //             Status
// //             <select
// //               name="status_id"
// //               value={formData.status_id}
// //               onChange={(e) => handleChange("status_id", e.target.value)}
// //               className="w-full border rounded p-2 mt-1"
// //               required
// //             >
// //               <option value="">Select Status</option>
// //               {statuses.map((s) => (
// //                 <option key={s.id} value={s.id}>
// //                   {s.name}
// //                 </option>
// //               ))}
// //             </select>
// //           </label>

// //           {/* Priority Dropdown */}
// //           <label className="block">
// //             Priority
// //             <select
// //               name="priority_id"
// //               value={formData.priority_id}
// //               onChange={(e) => handleChange("priority_id", e.target.value)}
// //               className="w-full border rounded p-2 mt-1"
// //               required
// //             >
// //               <option value="">Select Priority</option>
// //               {priorities.map((p) => (
// //                 <option key={p.id} value={p.id}>
// //                   {p.name}
// //                 </option>
// //               ))}
// //             </select>
// //           </label>

// //       {/* Remaining fields can be added similarly */}
// //       <Button type="submit" className="mt-4">
// //         Submit Work Order
// //       </Button>
// //     </form>
// //   );
// // };

// // export default WorkOrderForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const WorkOrderForm: React.FC = () => {
  const [types, setTypes] = useState<{ id: string; name: string }[]>([]);
  const [statuses, setStatuses] = useState<{ id: string; name: string }[]>([]);
  const [priorities, setPriorities] = useState<{ id: string; name: string }[]>([]);

  const [formData, setFormData] = useState({
    organization_id: "",
    work_order_number: "",
    title: "",
    description: "",
    long_description: "",
    status_id: "",
    priority_id: "",
    type_id: "",
    customer_id: "",
    asset_id: "",
    customer_contact_id: "",
    estimated_duration: "",
    actual_start_date: "",
    completion_date: "",
    assigned_to: "",
    supervisor_id: "",
    labor_hours: "",
    failure_code_id: "",
    resolution_code_id: "",
    billing_status_id: "",
    total_cost: "",
    notes: "",
    attachments: "",
    scheduled_at: "",
    created_by: "",
    updated_by: "",
  });

  // Fetch dropdown data
  useEffect(() => {
    axios.get("http://localhost:5000/api/work_order_types")
      .then(res => setTypes(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:5000/api/work_order_statuses")
      .then(res => setStatuses(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:5000/api/work_order_priorities")
      .then(res => setPriorities(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/work_orders", formData);
      alert("✅ Work Order Created: " + response.data.id);

      // Reset form
      setFormData({
        organization_id: "",
        work_order_number: "",
        title: "",
        description: "",
        long_description: "",
        status_id: "",
        priority_id: "",
        type_id: "",
        customer_id: "",
        asset_id: "",
        customer_contact_id: "",
        estimated_duration: "",
        actual_start_date: "",
        completion_date: "",
        assigned_to: "",
        supervisor_id: "",
        labor_hours: "",
        failure_code_id: "",
        resolution_code_id: "",
        billing_status_id: "",
        total_cost: "",
        notes: "",
        attachments: "",
        scheduled_at: "",
        created_by: "",
        updated_by: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create work order");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold">Create Work Order</h2>

      <label>
        Organization ID
        <Input name="organization_id" value={formData.organization_id} onChange={handleChange} required />
      </label>

      <label>
        Work Order Number
        <Input name="work_order_number" value={formData.work_order_number} onChange={handleChange} required />
      </label>

      <label>
        Title
        <Input name="title" value={formData.title} onChange={handleChange} required />
      </label>

      <label>
        Short Description
        <Textarea name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Long Description
        <Textarea name="long_description" value={formData.long_description} onChange={handleChange} />
      </label>

      {/* Type Dropdown */}
      <label>
        Type
        <select name="type_id" value={formData.type_id} onChange={handleChange} required className="w-full border rounded p-2 mt-1">
          <option value="">Select Type</option>
          {types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </label>

      {/* Status Dropdown */}
      <label>
        Status
        <select name="status_id" value={formData.status_id} onChange={handleChange} required className="w-full border rounded p-2 mt-1">
          <option value="">Select Status</option>
          {statuses.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </label>

      {/* Priority Dropdown */}
      <label>
        Priority
        <select name="priority_id" value={formData.priority_id} onChange={handleChange} required className="w-full border rounded p-2 mt-1">
          <option value="">Select Priority</option>
          {priorities.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </label>

      {/* Remaining fields */}
      <label>
        Customer ID
        <Input name="customer_id" value={formData.customer_id} onChange={handleChange} />
      </label>

      <label>
        Asset ID
        <Input name="asset_id" value={formData.asset_id} onChange={handleChange} />
      </label>

      <label>
        Customer Contact ID
        <Input name="customer_contact_id" value={formData.customer_contact_id} onChange={handleChange} />
      </label>

      <label>
        Estimated Duration
        <Input type="number" name="estimated_duration" value={formData.estimated_duration} onChange={handleChange} />
      </label>

      <label>
        Actual Start Date
        <Input type="datetime-local" name="actual_start_date" value={formData.actual_start_date} onChange={handleChange} />
      </label>

      <label>
        Completion Date
        <Input type="datetime-local" name="completion_date" value={formData.completion_date} onChange={handleChange} />
      </label>

      <label>
        Assigned Technician ID
        <Input name="assigned_to" value={formData.assigned_to} onChange={handleChange} />
      </label>

      <label>
        Supervisor ID
        <Input name="supervisor_id" value={formData.supervisor_id} onChange={handleChange} />
      </label>

      <label>
        Labor Hours
        <Input type="number" step="0.1" name="labor_hours" value={formData.labor_hours} onChange={handleChange} />
      </label>

      <label>
        Failure Code ID
        <Input name="failure_code_id" value={formData.failure_code_id} onChange={handleChange} />
      </label>

      <label>
        Resolution Code ID
        <Input name="resolution_code_id" value={formData.resolution_code_id} onChange={handleChange} />
      </label>

      <label>
        Billing Status ID
        <Input name="billing_status_id" value={formData.billing_status_id} onChange={handleChange} />
      </label>

      <label>
        Total Cost
        <Input type="number" step="0.01" name="total_cost" value={formData.total_cost} onChange={handleChange} />
      </label>

      <label>
        Notes
        <Textarea name="notes" value={formData.notes} onChange={handleChange} />
      </label>

      <label>
        Attachments (JSON)
        <Textarea name="attachments" value={formData.attachments} onChange={handleChange} />
      </label>

      <label>
        Scheduled Date
        <Input type="datetime-local" name="scheduled_at" value={formData.scheduled_at} onChange={handleChange} />
      </label>

    

      <Button type="submit" className="mt-4">Submit Work Order</Button>
    </form>
  );
};

export default WorkOrderForm;
