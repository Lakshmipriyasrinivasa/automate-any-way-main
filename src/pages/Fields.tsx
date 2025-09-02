// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // // import { toast } from "@/components/ui/use-toast";
// // // // import { Plus, Edit2, Trash2 } from "lucide-react";

// // // // interface Field {
// // // //   id: string;
// // // //   name: string;
// // // //   location: string;
// // // //   area: string;
// // // //   status: string;
// // // //   assignedworker: string;
// // // //   lastinspection: string;
// // // //   description: string;
// // // // }

// // // // const Fields: React.FC = () => {
// // // //   const [fields, setFields] = useState<Field[]>([]);
// // // //   const [isDialogOpen, setIsDialogOpen] = useState(false);
// // // //   const [editingField, setEditingField] = useState<Field | null>(null);

// // // //   // ✅ Fetch fields from backend
// // // //   useEffect(() => {
// // // //     const fetchFields = async () => {
// // // //       try {
// // // //         const res = await axios.get("http://localhost:5000/api/fields");
// // // //         setFields(res.data);
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         toast({ title: "Error fetching fields", variant: "destructive" });
// // // //       }
// // // //     };
// // // //     fetchFields();
// // // //   }, []);

// // // //   // ✅ Save new or edited field
// // // //   const handleSaveField = async (fieldData: Omit<Field, "id">) => {
// // // //     if (editingField) {
// // // //       // Update existing
// // // //       try {
// // // //         const res = await axios.put(
// // // //           `http://localhost:5000/api/fields/${editingField.id}`,
// // // //           fieldData
// // // //         );
// // // //         setFields(fields.map((f) => (f.id === editingField.id ? res.data : f)));
// // // //         toast({ title: "Field updated", description: "Field updated successfully" });
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         toast({ title: "Error updating field", variant: "destructive" });
// // // //       }
// // // //     } else {
// // // //       // Create new
// // // //       try {
// // // //         const res = await axios.post("http://localhost:5000/api/fields", fieldData);
// // // //         setFields([...fields, res.data]);
// // // //         toast({ title: "Field added", description: "New field added successfully" });
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         toast({ title: "Error adding field", variant: "destructive" });
// // // //       }
// // // //     }
// // // //     setIsDialogOpen(false);
// // // //     setEditingField(null);
// // // //   };

// // // //   // ✅ Delete field
// // // //   const handleDelete = async (fieldId: string) => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:5000/api/fields/${fieldId}`);
// // // //       setFields(fields.filter((field) => field.id !== fieldId));
// // // //       toast({ title: "Field deleted", description: "Field removed successfully" });
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       toast({ title: "Error deleting field", variant: "destructive" });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h1 className="text-2xl font-bold">Fields Management</h1>
// // // //         <Button
// // // //           onClick={() => {
// // // //             setEditingField(null);
// // // //             setIsDialogOpen(true);
// // // //           }}
// // // //         >
// // // //           <Plus className="h-4 w-4 mr-2" /> New Field
// // // //         </Button>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {fields.map((field) => (
// // // //           <Card key={field.id} className="shadow-md">
// // // //             <CardHeader>
// // // //               <CardTitle>{field.name}</CardTitle>
// // // //             </CardHeader>
// // // //             <CardContent>
// // // //               <p><strong>Location:</strong> {field.location}</p>
// // // //               <p><strong>Area:</strong> {field.area}</p>
// // // //               <p><strong>Status:</strong> {field.status}</p>
// // // //               <p><strong>Assigned Worker:</strong> {field.assignedworker}</p>
// // // //               <p><strong>Last Inspection:</strong> {field.lastinspection}</p>
// // // //               <p><strong>Description:</strong> {field.description}</p>
// // // //               <div className="flex justify-end space-x-2 mt-4">
// // // //                 <Button
// // // //                   variant="outline"
// // // //                   size="icon"
// // // //                   onClick={() => {
// // // //                     setEditingField(field);
// // // //                     setIsDialogOpen(true);
// // // //                   }}
// // // //                 >
// // // //                   <Edit2 className="h-4 w-4" />
// // // //                 </Button>
// // // //                 <Button variant="destructive" size="icon" onClick={() => handleDelete(field.id)}>
// // // //                   <Trash2 className="h-4 w-4" />
// // // //                 </Button>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>
// // // //         ))}
// // // //       </div>

// // // //       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
// // // //         <DialogContent>
// // // //           <DialogHeader>
// // // //             <DialogTitle>{editingField ? "Edit Field" : "New Field"}</DialogTitle>
// // // //           </DialogHeader>
// // // //           <FieldForm field={editingField} onSave={handleSaveField} />
// // // //         </DialogContent>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // // ✅ Form component
// // // // const FieldForm: React.FC<{
// // // //   field: Field | null;
// // // //   onSave: (data: Omit<Field, "id">) => void;
// // // // }> = ({ field, onSave }) => {
// // // //   const [formData, setFormData] = useState<Omit<Field, "id">>({
// // // //     name: "",
// // // //     location: "",
// // // //     area: "",
// // // //     status: "active",
// // // //     assignedworker: "",
// // // //     lastinspection: "",
// // // //     description: "",
// // // //   });

// // // //   useEffect(() => {
// // // //     if (field) {
// // // //       setFormData({
// // // //         name: field.name,
// // // //         location: field.location,
// // // //         area: field.area,
// // // //         status: field.status,
// // // //         assignedworker: field.assignedworker,
// // // //         lastinspection: field.lastinspection,
// // // //         description: field.description,
// // // //       });
// // // //     }
// // // //   }, [field]);

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   return (
// // // //     <form
// // // //       onSubmit={(e) => {
// // // //         e.preventDefault();
// // // //         onSave(formData);
// // // //       }}
// // // //       className="space-y-4"
// // // //     >
// // // //       <Input name="name" placeholder="Field Name" value={formData.name} onChange={handleChange} required />
// // // //       <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
// // // //       <Input name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
// // // //       <Select
// // // //         value={formData.status}
// // // //         onValueChange={(value) => setFormData({ ...formData, status: value })}
// // // //       >
// // // //         <SelectTrigger>
// // // //           <SelectValue placeholder="Select Status" />
// // // //         </SelectTrigger>
// // // //         <SelectContent>
// // // //           <SelectItem value="active">Active</SelectItem>
// // // //           <SelectItem value="inactive">Inactive</SelectItem>
// // // //           <SelectItem value="maintenance">Maintenance</SelectItem>
// // // //         </SelectContent>
// // // //       </Select>
// // // //       <Input
// // // //         name="assignedworker"
// // // //         placeholder="Assigned Worker"
// // // //         value={formData.assignedworker}
// // // //         onChange={handleChange}
// // // //         required
// // // //       />
// // // //       <Input
// // // //         type="date"
// // // //         name="lastinspection"
// // // //         placeholder="Last Inspection"
// // // //         value={formData.lastinspection}
// // // //         onChange={handleChange}
// // // //         required
// // // //       />
// // // //       <Textarea
// // // //         name="description"
// // // //         placeholder="Description"
// // // //         value={formData.description}
// // // //         onChange={handleChange}
// // // //         required
// // // //       />
// // // //       <Button type="submit" className="w-full">
// // // //         Save
// // // //       </Button>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default Fields;
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Label } from "@/components/ui/label";
// // // import { toast } from "@/components/ui/use-toast";
// // // import { Plus, Edit2, Trash2 } from "lucide-react";

// // // interface Field {
// // //   id: string;
// // //   name: string;
// // //   location: string;
// // //   area: string;
// // //   status: string;
// // //   assignedworker: string;
// // //   lastinspection: string;
// // //   description: string;
// // // }

// // // const Fields: React.FC = () => {
// // //   const [fields, setFields] = useState<Field[]>([]);
// // //   const [isDialogOpen, setIsDialogOpen] = useState(false);
// // //   const [editingField, setEditingField] = useState<Field | null>(null);

// // //   // ✅ Fetch fields from backend
// // //   useEffect(() => {
// // //     const fetchFields = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:5000/api/fields");
// // //         setFields(res.data);
// // //       } catch (err) {
// // //         console.error(err);
// // //         toast({ title: "Error fetching fields", variant: "destructive" });
// // //       }
// // //     };
// // //     fetchFields();
// // //   }, []);

// // //   // ✅ Save new or edited field
// // //   const handleSaveField = async (fieldData: Omit<Field, "id">) => {
// // //     if (editingField) {
// // //       // Update existing
// // //       try {
// // //         const res = await axios.put(
// // //           `http://localhost:5000/api/fields/${editingField.id}`,
// // //           fieldData
// // //         );
// // //         setFields(fields.map((f) => (f.id === editingField.id ? res.data : f)));
// // //         toast({ title: "Field updated", description: "Field updated successfully" });
// // //       } catch (err) {
// // //         console.error(err);
// // //         toast({ title: "Error updating field", variant: "destructive" });
// // //       }
// // //     } else {
// // //       // Create new
// // //       try {
// // //         const res = await axios.post("http://localhost:5000/api/fields", fieldData);
// // //         setFields([...fields, res.data]);
// // //         toast({ title: "Field added", description: "New field added successfully" });
// // //       } catch (err) {
// // //         console.error(err);
// // //         toast({ title: "Error adding field", variant: "destructive" });
// // //       }
// // //     }
// // //     setIsDialogOpen(false);
// // //     setEditingField(null);
// // //   };

// // //   // ✅ Delete field
// // //   const handleDelete = async (fieldId: string) => {
// // //     try {
// // //       await axios.delete(`http://localhost:5000/api/fields/${fieldId}`);
// // //       setFields(fields.filter((field) => field.id !== fieldId));
// // //       toast({ title: "Field deleted", description: "Field removed successfully" });
// // //     } catch (err) {
// // //       console.error(err);
// // //       toast({ title: "Error deleting field", variant: "destructive" });
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-bold">Fields Management</h1>
// // //         <Button
// // //           onClick={() => {
// // //             setEditingField(null);
// // //             setIsDialogOpen(true);
// // //           }}
// // //         >
// // //           <Plus className="h-4 w-4 mr-2" /> New Field
// // //         </Button>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {fields.map((field) => (
// // //           <Card key={field.id} className="shadow-md">
// // //             <CardHeader>
// // //               <CardTitle>{field.name}</CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <p><strong>Location:</strong> {field.location}</p>
// // //               <p><strong>Area:</strong> {field.area}</p>
// // //               <p><strong>Status:</strong> {field.status}</p>
// // //               <p><strong>Assigned Worker:</strong> {field.assignedworker}</p>
// // //               <p><strong>Last Inspection:</strong> {field.lastinspection}</p>
// // //               <p><strong>Description:</strong> {field.description}</p>
// // //               <div className="flex justify-end space-x-2 mt-4">
// // //                 <Button
// // //                   variant="outline"
// // //                   size="icon"
// // //                   onClick={() => {
// // //                     setEditingField(field);
// // //                     setIsDialogOpen(true);
// // //                   }}
// // //                 >
// // //                   <Edit2 className="h-4 w-4" />
// // //                 </Button>
// // //                 <Button variant="destructive" size="icon" onClick={() => handleDelete(field.id)}>
// // //                   <Trash2 className="h-4 w-4" />
// // //                 </Button>
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>

// // //       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
// // //         <DialogContent>
// // //           <DialogHeader>
// // //             <DialogTitle>{editingField ? "Edit Field" : "New Field"}</DialogTitle>
// // //           </DialogHeader>
// // //           <FieldForm field={editingField} onSave={handleSaveField} />
// // //         </DialogContent>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // // ✅ Form component with labels
// // // const FieldForm: React.FC<{
// // //   field: Field | null;
// // //   onSave: (data: Omit<Field, "id">) => void;
// // // }> = ({ field, onSave }) => {
// // //   const [formData, setFormData] = useState<Omit<Field, "id">>({
// // //     name: "",
// // //     location: "",
// // //     area: "",
// // //     status: "active",
// // //     assignedworker: "",
// // //     lastinspection: "",
// // //     description: "",
// // //   });

// // //   useEffect(() => {
// // //     if (field) {
// // //       setFormData({
// // //         name: field.name,
// // //         location: field.location,
// // //         area: field.area,
// // //         status: field.status,
// // //         assignedworker: field.assignedworker,
// // //         lastinspection: field.lastinspection,
// // //         description: field.description,
// // //       });
// // //     }
// // //   }, [field]);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   return (
// // //     <form
// // //       onSubmit={(e) => {
// // //         e.preventDefault();
// // //         onSave(formData);
// // //       }}
// // //       className="space-y-4"
// // //     >
// // //       <div>
// // //         <Label htmlFor="name">Field Name</Label>
// // //         <Input id="name" name="name" placeholder="Field Name" value={formData.name} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="location">Location</Label>
// // //         <Input id="location" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="area">Area</Label>
// // //         <Input id="area" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label>Status</Label>
// // //         <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
// // //           <SelectTrigger>
// // //             <SelectValue placeholder="Select Status" />
// // //           </SelectTrigger>
// // //           <SelectContent>
// // //             <SelectItem value="active">Active</SelectItem>
// // //             <SelectItem value="inactive">Inactive</SelectItem>
// // //             <SelectItem value="maintenance">Maintenance</SelectItem>
// // //           </SelectContent>
// // //         </Select>
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="assignedworker">Assigned Worker</Label>
// // //         <Input id="assignedworker" name="assignedworker" placeholder="Assigned Worker" value={formData.assignedworker} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="lastinspection">Last Inspection</Label>
// // //         <Input type="date" id="lastinspection" name="lastinspection" value={formData.lastinspection} onChange={handleChange} required />
// // //       </div>

// // //       <div>
// // //         <Label htmlFor="description">Description</Label>
// // //         <Textarea id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
// // //       </div>

// // //       <Button type="submit" className="w-full">Save</Button>
// // //     </form>
// // //   );
// // // };

// // // export default Fields;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { toast } from "@/components/ui/use-toast";
// // import { Plus, Edit2, Trash2 } from "lucide-react";

// // interface Field {
// //   id: string;
// //   name: string;
// //   location: string;
// //   area: string;
// //   status: string;
// //   assignedworker: string;
// //   lastinspection: string;
// //   description: string;
// // }

// // const Fields: React.FC = () => {
// //   const [fields, setFields] = useState<Field[]>([]);
// //   const [isDialogOpen, setIsDialogOpen] = useState(false);
// //   const [editingField, setEditingField] = useState<Field | null>(null);

// //   // Fetch fields from backend
// //   useEffect(() => {
// //     const fetchFields = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/api/fields");
// //         setFields(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         toast({ title: "Error fetching fields", variant: "destructive" });
// //       }
// //     };
// //     fetchFields();
// //   }, []);

// //   // Save new or edited field
// //   const handleSaveField = async (fieldData: Omit<Field, "id">) => {
// //     if (editingField) {
// //       try {
// //         const res = await axios.put(`http://localhost:5000/api/fields/${editingField.id}`, fieldData);
// //         setFields(fields.map((f) => (f.id === editingField.id ? res.data : f)));
// //         toast({ title: "Field updated", description: "Field updated successfully" });
// //       } catch (err) {
// //         console.error(err);
// //         toast({ title: "Error updating field", variant: "destructive" });
// //       }
// //     } else {
// //       try {
// //         const res = await axios.post("http://localhost:5000/api/fields", fieldData);
// //         setFields([...fields, res.data]);
// //         toast({ title: "Field added", description: "New field added successfully" });
// //       } catch (err) {
// //         console.error(err);
// //         toast({ title: "Error adding field", variant: "destructive" });
// //       }
// //     }
// //     setIsDialogOpen(false);
// //     setEditingField(null);
// //   };

// //   // Delete field
// //   const handleDelete = async (fieldId: string) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/api/fields/${fieldId}`);
// //       setFields(fields.filter((field) => field.id !== fieldId));
// //       toast({ title: "Field deleted", description: "Field removed successfully" });
// //     } catch (err) {
// //       console.error(err);
// //       toast({ title: "Error deleting field", variant: "destructive" });
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold">Fields Management</h1>
// //         <Button
// //           onClick={() => {
// //             setEditingField(null);
// //             setIsDialogOpen(true);
// //           }}
// //         >
// //           <Plus className="h-4 w-4 mr-2" /> New Field
// //         </Button>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {fields.map((field) => (
// //           <Card key={field.id} className="shadow-md">
// //             <CardHeader>
// //               <CardTitle>{field.name}</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //              <p><strong>Location:</strong> {field.location || "N/A"}</p>
// //   <p><strong>Area:</strong> {field.area || "N/A"}</p>
// //   <p><strong>Status:</strong> {field.status || "N/A"}</p>
// //   <p><strong>Assigned Worker:</strong> {field.assignedworker || "Not assigned"}</p>
// //   <p><strong>Last Inspection:</strong> {field.lastinspection || "Not inspected"}</p>
// //   <p><strong>Description:</strong> {field.description || "N/A"}</p>
// //               <div className="flex justify-end space-x-2 mt-4">
// //                 <Button
// //                   variant="outline"
// //                   size="icon"
// //                   onClick={() => {
// //                     setEditingField(field);
// //                     setIsDialogOpen(true);
// //                   }}
// //                 >
// //                   <Edit2 className="h-4 w-4" />
// //                 </Button>
// //                 <Button variant="destructive" size="icon" onClick={() => handleDelete(field.id)}>
// //                   <Trash2 className="h-4 w-4" />
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>

// //       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
// //         <DialogContent>
// //           <DialogHeader>
// //             <DialogTitle>{editingField ? "Edit Field" : "New Field"}</DialogTitle>
// //             <DialogDescription>
// //               {editingField ? "Update the field information below." : "Fill out the form to create a new field."}
// //             </DialogDescription>
// //           </DialogHeader>
// //           <FieldForm field={editingField} onSave={handleSaveField} />
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // // Form component
// // const FieldForm: React.FC<{
// //   field: Field | null;
// //   onSave: (data: Omit<Field, "id">) => void;
// // }> = ({ field, onSave }) => {
// //   const [formData, setFormData] = useState<Omit<Field, "id">>({
// //     name: "",
// //     location: "",
// //     area: "",
// //     status: "active",
// //     assignedworker: "",
// //     lastinspection: "",
// //     description: "",
// //   });

// //   useEffect(() => {
// //     if (field) {
// //       setFormData({
// //         name: field.name,
// //         location: field.location,
// //         area: field.area,
// //         status: field.status,
// //         assignedworker: field.assignedworker,
// //         lastinspection: field.lastinspection,
// //         description: field.description,
// //       });
// //     }
// //   }, [field]);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <form
// //       onSubmit={(e) => {
// //         e.preventDefault();
// //         onSave(formData);
// //       }}
// //       className="space-y-4"
// //     >
// //       <Input name="name" placeholder="Field Name" value={formData.name} onChange={handleChange} required />
// //       <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
// //       <Input name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
// //       <Select
// //         value={formData.status}
// //         onValueChange={(value) => setFormData({ ...formData, status: value })}
// //       >
// //         <SelectTrigger>
// //           <SelectValue placeholder="Select Status" />
// //         </SelectTrigger>
// //         <SelectContent>
// //           <SelectItem value="active">Active</SelectItem>
// //           <SelectItem value="inactive">Inactive</SelectItem>
// //           <SelectItem value="maintenance">Maintenance</SelectItem>
// //         </SelectContent>
// //       </Select>
// //       <Input
// //         name="assignedworker"
// //         placeholder="Assigned Worker"
// //         value={formData.assignedworker}
// //         onChange={handleChange}
// //         required
// //       />
// //       <Input
// //         type="date"
// //         name="lastinspection"
// //         placeholder="Last Inspection"
// //         value={formData.lastinspection}
// //         onChange={handleChange}
// //         required
// //       />
// //       <Textarea
// //         name="description"
// //         placeholder="Description"
// //         value={formData.description}
// //         onChange={handleChange}
// //         required
// //       />
// //       <Button type="submit" className="w-full">Save</Button>
// //     </form>
// //   );
// // };

// // export default Fields;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { toast } from "@/components/ui/use-toast";
// import { Plus, Edit2, Trash2 } from "lucide-react";

// interface Field {
//   id: string;
//   name: string;
//   location: string;
//   area: string;
//   status: string;
//   assignedworker: string;
//   lastinspection: string;
//   description: string;
// }

// const Fields: React.FC = () => {
//   const [fields, setFields] = useState<Field[]>([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingField, setEditingField] = useState<Field | null>(null);

//   // Fetch fields
//   useEffect(() => {
//     const fetchFields = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/fields");
//         setFields(res.data);
//       } catch (err) {
//         console.error(err);
//         toast({ title: "Error fetching fields", variant: "destructive" });
//       }
//     };
//     fetchFields();
//   }, []);

//   // Save field
//   const handleSaveField = async (fieldData: Omit<Field, "id">) => {
//     if (editingField) {
//       try {
//         const res = await axios.put(`http://localhost:5000/api/fields/${editingField.id}`, fieldData);
//         setFields(fields.map((f) => (f.id === editingField.id ? res.data : f)));
//         toast({ title: "Field updated", description: "Field updated successfully" });
//       } catch (err) {
//         console.error(err);
//         toast({ title: "Error updating field", variant: "destructive" });
//       }
//     } else {
//       try {
//         const res = await axios.post("http://localhost:5000/api/fields", fieldData);
//         setFields([...fields, res.data]);
//         toast({ title: "Field added", description: "New field added successfully" });
//       } catch (err) {
//         console.error(err);
//         toast({ title: "Error adding field", variant: "destructive" });
//       }
//     }
//     setIsDialogOpen(false);
//     setEditingField(null);
//   };

//   // Delete field
//   const handleDelete = async (fieldId: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/fields/${fieldId}`);
//       setFields(fields.filter((field) => field.id !== fieldId));
//       toast({ title: "Field deleted", description: "Field removed successfully" });
//     } catch (err) {
//       console.error(err);
//       toast({ title: "Error deleting field", variant: "destructive" });
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Fields Management</h1>
//         <Button
//           onClick={() => {
//             setEditingField(null);
//             setIsDialogOpen(true);
//           }}
//         >
//           <Plus className="h-4 w-4 mr-2" /> New Field
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {fields.map((field) => (
//           <Card key={field.id} className="shadow-md">
//             <CardHeader>
//               <CardTitle>{field.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p><strong>Location:</strong> {field.location || "N/A"}</p>
//               <p><strong>Area:</strong> {field.area || "N/A"}</p>
//               <p><strong>Status:</strong> {field.status || "N/A"}</p>
//               <p><strong>Assigned Worker:</strong> {field.assignedworker || "Not assigned"}</p>
//               <p><strong>Last Inspection:</strong> {field.lastinspection || "Not inspected"}</p>
//               <p><strong>Description:</strong> {field.description || "N/A"}</p>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => {
//                     setEditingField(field);
//                     setIsDialogOpen(true);
//                   }}
//                 >
//                   <Edit2 className="h-4 w-4" />
//                 </Button>
//                 <Button variant="destructive" size="icon" onClick={() => handleDelete(field.id)}>
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>{editingField ? "Edit Field" : "New Field"}</DialogTitle>
//             <DialogDescription>
//               {editingField ? "Update the field information below." : "Fill out the form to create a new field."}
//             </DialogDescription>
//           </DialogHeader>
//           <FieldForm field={editingField} onSave={handleSaveField} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// // Form component with labels
// const FieldForm: React.FC<{
//   field: Field | null;
//   onSave: (data: Omit<Field, "id">) => void;
// }> = ({ field, onSave }) => {
//   const [formData, setFormData] = useState<Omit<Field, "id">>({
//     name: "",
//     location: "",
//     area: "",
//     status: "active",
//     assignedworker: "",
//     lastinspection: "",
//     description: "",
//   });

//   useEffect(() => {
//     if (field) {
//       setFormData({
//         name: field.name,
//         location: field.location,
//         area: field.area,
//         status: field.status,
//         assignedworker: field.assignedworker,
//         lastinspection: field.lastinspection,
//         description: field.description,
//       });
//     }
//   }, [field]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSave(formData);
//       }}
//       className="space-y-4"
//     >
//       <div>
//         <label htmlFor="name" className="block mb-1 font-medium">Field Name</label>
//         <Input id="name" name="name" placeholder="Field Name" value={formData.name} onChange={handleChange} required />
//       </div>

//       <div>
//         <label htmlFor="location" className="block mb-1 font-medium">Location</label>
//         <Input id="location" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
//       </div>

//       <div>
//         <label htmlFor="area" className="block mb-1 font-medium">Area</label>
//         <Input id="area" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
//       </div>

//       <div>
//         <label htmlFor="status" className="block mb-1 font-medium">Status</label>
//         <Select
//           value={formData.status}
//           onValueChange={(value) => setFormData({ ...formData, status: value })}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select Status" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="active">Active</SelectItem>
//             <SelectItem value="inactive">Inactive</SelectItem>
//             <SelectItem value="maintenance">Maintenance</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <label htmlFor="assignedworker" className="block mb-1 font-medium">Assigned Worker</label>
//         <Input id="assignedworker" name="assignedworker" placeholder="Assigned Worker" value={formData.assignedworker} onChange={handleChange} required />
//       </div>

//       <div>
//         <label htmlFor="lastinspection" className="block mb-1 font-medium">Last Inspection</label>
//         <Input id="lastinspection" type="date" name="lastinspection" placeholder="Last Inspection" value={formData.lastinspection} onChange={handleChange} required />
//       </div>

//       <div>
//         <label htmlFor="description" className="block mb-1 font-medium">Description</label>
//         <Textarea id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//       </div>

//       <Button type="submit" className="w-full">Save</Button>
//     </form>
//   );
// };

// export default Fields;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Plus, Edit2, Trash2 } from "lucide-react";

interface Field {
  id: string;
  name: string;
  location: string;
  area: string;
  status: string;
  assignedworker: string;
  lastinspection: string;
  description: string;
}

const Fields: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingField, setEditingField] = useState<Field | null>(null);

  // Fetch fields
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/fields");
        // Map backend response keys to frontend interface
        const mappedFields = res.data.map((f: any) => ({
          id: f.id,
          name: f.name,
          location: f.location,
          area: f.area,
          status: f.status,
          assignedworker: f.assigned_worker || "",
          lastinspection: f.last_inspection || "",
          description: f.description,
        }));
        setFields(mappedFields);
      } catch (err) {
        console.error(err);
        toast({ title: "Error fetching fields", variant: "destructive" });
      }
    };
    fetchFields();
  }, []);

  // Save field
  const handleSaveField = async (fieldData: Omit<Field, "id">) => {
    if (editingField) {
      try {
        const res = await axios.put(
          `http://localhost:5000/api/fields/${editingField.id}`,
          {
            ...fieldData,
            assigned_worker: fieldData.assignedworker,
            last_inspection: fieldData.lastinspection,
          }
        );
        setFields(fields.map((f) => (f.id === editingField.id ? { ...res.data, assignedworker: res.data.assigned_worker, lastinspection: res.data.last_inspection } : f)));
        toast({ title: "Field updated", description: "Field updated successfully" });
      } catch (err) {
        console.error(err);
        toast({ title: "Error updating field", variant: "destructive" });
      }
    } else {
      try {
        const res = await axios.post("http://localhost:5000/api/fields", {
          ...fieldData,
          assigned_worker: fieldData.assignedworker,
          last_inspection: fieldData.lastinspection,
        });
        const newField = {
          ...res.data,
          assignedworker: res.data.assigned_worker,
          lastinspection: res.data.last_inspection,
        };
        setFields([...fields, newField]);
        toast({ title: "Field added", description: "New field added successfully" });
      } catch (err) {
        console.error(err);
        toast({ title: "Error adding field", variant: "destructive" });
      }
    }
    setIsDialogOpen(false);
    setEditingField(null);
  };

  // Delete field
  const handleDelete = async (fieldId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/fields/${fieldId}`);
      setFields(fields.filter((field) => field.id !== fieldId));
      toast({ title: "Field deleted", description: "Field removed successfully" });
    } catch (err) {
      console.error(err);
      toast({ title: "Error deleting field", variant: "destructive" });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fields Management</h1>
        <Button
          onClick={() => {
            setEditingField(null);
            setIsDialogOpen(true);
          }}
        >
          <Plus className="h-4 w-4 mr-2" /> New Field
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field) => (
          <Card key={field.id} className="shadow-md">
            <CardHeader>
              <CardTitle>{field.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Location:</strong> {field.location || "N/A"}</p>
              <p><strong>Area:</strong> {field.area || "N/A"}</p>
              <p><strong>Status:</strong> {field.status || "N/A"}</p>
              <p><strong>Assigned Worker:</strong> {field.assignedworker || "Not assigned"}</p>
              <p><strong>Last Inspection:</strong> {field.lastinspection || "Not inspected"}</p>
              <p><strong>Description:</strong> {field.description || "N/A"}</p>
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setEditingField(field);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(field.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingField ? "Edit Field" : "New Field"}</DialogTitle>
            <DialogDescription>
              {editingField ? "Update the field information below." : "Fill out the form to create a new field."}
            </DialogDescription>
          </DialogHeader>
          <FieldForm field={editingField} onSave={handleSaveField} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Form component with labels
const FieldForm: React.FC<{
  field: Field | null;
  onSave: (data: Omit<Field, "id">) => void;
}> = ({ field, onSave }) => {
  const [formData, setFormData] = useState<Omit<Field, "id">>({
    name: "",
    location: "",
    area: "",
    status: "active",
    assignedworker: "",
    lastinspection: "",
    description: "",
  });

  useEffect(() => {
    if (field) {
      setFormData({
        name: field.name,
        location: field.location,
        area: field.area,
        status: field.status,
        assignedworker: field.assignedworker,
        lastinspection: field.lastinspection,
        description: field.description,
      });
    }
  }, [field]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Field Name</label>
        <Input id="name" name="name" placeholder="Field Name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="location" className="block mb-1 font-medium">Location</label>
        <Input id="location" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="area" className="block mb-1 font-medium">Area</label>
        <Input id="area" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="status" className="block mb-1 font-medium">Status</label>
        <Select
          value={formData.status}
          onValueChange={(value) => setFormData({ ...formData, status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="assignedworker" className="block mb-1 font-medium">Assigned Worker</label>
        <Input id="assignedworker" name="assignedworker" placeholder="Assigned Worker" value={formData.assignedworker} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="lastinspection" className="block mb-1 font-medium">Last Inspection</label>
        <Input id="lastinspection" type="date" name="lastinspection" value={formData.lastinspection} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="description" className="block mb-1 font-medium">Description</label>
        <Textarea id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      </div>

      <Button type="submit" className="w-full">Save</Button>
    </form>
  );
};

export default Fields;
