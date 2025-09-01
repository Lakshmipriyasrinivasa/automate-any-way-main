// // // // // import React, { useState } from "react";
// // // // // import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// // // // // import moment from "moment";
// // // // // import "react-big-calendar/lib/css/react-big-calendar.css";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import {
// // // // //   Select,
// // // // //   SelectContent,
// // // // //   SelectItem,
// // // // //   SelectTrigger,
// // // // //   SelectValue,
// // // // // } from "@/components/ui/select";
// // // // // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// // // // // import { Input } from "@/components/ui/input";

// // // // // const localizer = momentLocalizer(moment);

// // // // // const SchedulePage: React.FC = () => {
// // // // //   const [events, setEvents] = useState([
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "Site Visit - Worker A",
// // // // //       start: new Date(),
// // // // //       end: new Date(moment().add(2, "hours").toDate()),
// // // // //       type: "Visit",
// // // // //       status: "Scheduled",
// // // // //       employee: "Worker A",
// // // // //     },
// // // // //   ]);

// // // // //   const [open, setOpen] = useState(false);
// // // // //   const [newEvent, setNewEvent] = useState({
// // // // //     title: "",
// // // // //     start: new Date(),
// // // // //     end: new Date(),
// // // // //   });

// // // // //   const addEvent = () => {
// // // // //     setEvents([
// // // // //       ...events,
// // // // //       { ...newEvent, id: events.length + 1, type: "Task", status: "Scheduled", employee: "Worker B" },
// // // // //     ]);
// // // // //     setOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 grid grid-cols-12 gap-4">
// // // // //       {/* Filters */}
// // // // //       <Card className="col-span-12 p-4">
// // // // //         <div className="flex gap-4">
// // // // //           <Select>
// // // // //             <SelectTrigger className="w-[200px]">
// // // // //               <SelectValue placeholder="Filter by Employee" />
// // // // //             </SelectTrigger>
// // // // //             <SelectContent>
// // // // //               <SelectItem value="all">All</SelectItem>
// // // // //               <SelectItem value="workerA">Worker A</SelectItem>
// // // // //               <SelectItem value="workerB">Worker B</SelectItem>
// // // // //             </SelectContent>
// // // // //           </Select>

// // // // //           <Select>
// // // // //             <SelectTrigger className="w-[200px]">
// // // // //               <SelectValue placeholder="Filter by Type" />
// // // // //             </SelectTrigger>
// // // // //             <SelectContent>
// // // // //               <SelectItem value="all">All</SelectItem>
// // // // //               <SelectItem value="visit">Visit</SelectItem>
// // // // //               <SelectItem value="task">Task</SelectItem>
// // // // //               <SelectItem value="event">Event</SelectItem>
// // // // //             </SelectContent>
// // // // //           </Select>

// // // // //           <Select>
// // // // //             <SelectTrigger className="w-[200px]">
// // // // //               <SelectValue placeholder="Filter by Status" />
// // // // //             </SelectTrigger>
// // // // //             <SelectContent>
// // // // //               <SelectItem value="all">All</SelectItem>
// // // // //               <SelectItem value="scheduled">Scheduled</SelectItem>
// // // // //               <SelectItem value="unscheduled">Unscheduled</SelectItem>
// // // // //               <SelectItem value="inprogress">In Progress</SelectItem>
// // // // //             </SelectContent>
// // // // //           </Select>

// // // // //           <Button onClick={() => setOpen(true)} className="ml-auto">
// // // // //             + Add Schedule
// // // // //           </Button>
// // // // //         </div>
// // // // //       </Card>

// // // // //       {/* Calendar */}
// // // // //       <Card className="col-span-8">
// // // // //         <CardContent>
// // // // //           <Calendar
// // // // //             localizer={localizer}
// // // // //             events={events}
// // // // //             startAccessor="start"
// // // // //             endAccessor="end"
// // // // //             style={{ height: 500 }}
// // // // //             defaultView={Views.WEEK}
// // // // //           />
// // // // //         </CardContent>
// // // // //       </Card>

// // // // //       {/* Schedule Table */}
// // // // //       <Card className="col-span-4">
// // // // //         <CardContent>
// // // // //           <h2 className="text-lg font-semibold mb-2">Scheduled Tasks</h2>
// // // // //           <ul className="space-y-2">
// // // // //             {events.map((e) => (
// // // // //               <li key={e.id} className="p-2 border rounded-md">
// // // // //                 <p className="font-medium">{e.title}</p>
// // // // //                 <p className="text-sm text-gray-500">
// // // // //                   {moment(e.start).format("MMM D, h:mm A")} -{" "}
// // // // //                   {moment(e.end).format("h:mm A")}
// // // // //                 </p>
// // // // //                 <p className="text-xs text-gray-400">{e.type} • {e.status}</p>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </CardContent>
// // // // //       </Card>

// // // // //       {/* Add Event Dialog */}
// // // // //       <Dialog open={open} onOpenChange={setOpen}>
// // // // //         <DialogContent>
// // // // //           <DialogHeader>
// // // // //             <DialogTitle>Add New Schedule</DialogTitle>
// // // // //           </DialogHeader>
// // // // //           <div className="space-y-3">
// // // // //             <Input
// // // // //               placeholder="Title"
// // // // //               value={newEvent.title}
// // // // //               onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
// // // // //             />
// // // // //             <Button onClick={addEvent}>Save</Button>
// // // // //           </div>
// // // // //         </DialogContent>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SchedulePage;

// // // // SchedulePage.tsx
// // // import React, { useEffect, useState } from "react";
// // // import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// // // import moment from "moment";
// // // import "react-big-calendar/lib/css/react-big-calendar.css";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   Select,
// // //   SelectContent,
// // //   SelectItem,
// // //   SelectTrigger,
// // //   SelectValue,
// // // } from "@/components/ui/select";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // // } from "@/components/ui/dialog";
// // // import { Input } from "@/components/ui/input";

// // // const localizer = momentLocalizer(moment);

// // // interface Event {
// // //   id: string;
// // //   title: string;
// // //   start: Date;
// // //   end: Date;
// // //   type: string;
// // //   status: string;
// // //   employee: string;
// // // }

// // // const SchedulePage: React.FC = () => {
// // //   const [events, setEvents] = useState<Event[]>([]);
// // // const [users, setUsers] = useState<any[]>([]);
// // //   const [types, setTypes] = useState<any[]>([]);
// // //   const [statuses, setStatuses] = useState<any[]>([]);

// // //   const [selectedEmployee, setSelectedEmployee] = useState<string>("all");
// // //   const [selectedType, setSelectedType] = useState<string>("all");
// // //   const [selectedStatus, setSelectedStatus] = useState<string>("all");

// // //   const [open, setOpen] = useState(false);
// // //   const [newEvent, setNewEvent] = useState<any>({
// // //     title: "",
// // //     start: new Date(),
// // //     end: new Date(),
// // //     type: "",
// // //     status: "",
// // //     employee: "",
// // //   });

// // //  useEffect(() => {
// // //   fetch("http://localhost:5000/api/users")
// // //     .then((res) => res.json())
// // //     .then(setUsers);

// // //   fetch("http://localhost:5000/api/work_order_types")
// // //     .then((res) => res.json())
// // //     .then(setTypes)
// // //     .catch((err) => console.error(err));

// // //   fetch("http://localhost:5000/api/work_order_status")
// // //     .then((res) => res.json())
// // //     .then(setStatuses)
// // //     .catch((err) => console.error(err));
// // // }, []);


// // //   const addEvent = async () => {
// // //     const body = {
// // //       title: newEvent.title,
// // //       start_time: newEvent.start,
// // //       end_time: newEvent.end,
// // //       type: newEvent.type,
// // //       status: newEvent.status,
// // //       employee: newEvent.employee,
// // //     };

// // //     const res = await fetch("http://localhost:5000/api/schedule", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify(body),
// // //     });

// // //     if (res.ok) {
// // //       const saved = await res.json();
// // //       setEvents([
// // //         ...events,
// // //         {
// // //           ...saved,
// // //           start: new Date(saved.start_time),
// // //           end: new Date(saved.end_time),
// // //         },
// // //       ]);
// // //       setOpen(false);
// // //       setNewEvent({
// // //         title: "",
// // //         start: new Date(),
// // //         end: new Date(),
// // //         type: "",
// // //         status: "",
// // //         Users: "",
// // //       });
// // //     }
// // //   };

// // //   // Apply filters
// // //   const filteredEvents = events.filter((e) => {
// // //     return (
// // //       (selectedUser=== "all" || e.employee === selectedEmployee) &&
// // //       (selectedType === "all" || e.type === selectedType) &&
// // //       (selectedStatus === "all" || e.status === selectedStatus)
// // //     );
// // //   });

// // //   return (
// // //     <div className="p-6 grid grid-cols-12 gap-4">
// // //       {/* Filters */}
// // //       <Card className="col-span-12 p-4">
// // //         <div className="flex gap-4">
// // //           <Select onValueChange={setUsers} defaultValue="all">
// // //             <SelectTrigger className="w-[200px]">
// // //               <SelectValue placeholder="Filter by Employee" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All</SelectItem>
// // //               {Users.map((emp) => (
// // //                 <SelectItem key={emp.id} value={emp.username}>
// // //                   {emp.username}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>

// // //           <Select onValueChange={setSelectedType} defaultValue="all">
// // //             <SelectTrigger className="w-[200px]">
// // //               <SelectValue placeholder="Filter by Type" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All</SelectItem>
// // //               {types.map((t) => (
// // //                 <SelectItem key={t.id} value={t.name}>
// // //                   {t.name}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>

// // //           <Select onValueChange={setSelectedStatus} defaultValue="all">
// // //             <SelectTrigger className="w-[200px]">
// // //               <SelectValue placeholder="Filter by Status" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All</SelectItem>
// // //               {statuses.map((s) => (
// // //                 <SelectItem key={s.id} value={s.name}>
// // //                   {s.name}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>

// // //           <Button onClick={() => setOpen(true)} className="ml-auto">
// // //             + Add Schedule
// // //           </Button>
// // //         </div>
// // //       </Card>

// // //       {/* Calendar */}
// // //       <Card className="col-span-8">
// // //         <CardContent>
// // //           <Calendar
// // //             localizer={localizer}
// // //             events={filteredEvents}
// // //             startAccessor="start"
// // //             endAccessor="end"
// // //             style={{ height: 500 }}
// // //             defaultView={Views.WEEK}
// // //           />
// // //         </CardContent>
// // //       </Card>

// // //       {/* Schedule Table */}
// // //       <Card className="col-span-4">
// // //         <CardContent>
// // //           <h2 className="text-lg font-semibold mb-2">Scheduled Tasks</h2>
// // //           <ul className="space-y-2">
// // //             {filteredEvents.map((e) => (
// // //               <li key={e.id} className="p-2 border rounded-md">
// // //                 <p className="font-medium">{e.title}</p>
// // //                 <p className="text-sm text-gray-500">
// // //                   {moment(e.start).format("MMM D, h:mm A")} -{" "}
// // //                   {moment(e.end).format("h:mm A")}
// // //                 </p>
// // //                 <p className="text-xs text-gray-400">
// // //                   {e.type} • {e.status} • {e.employee}
// // //                 </p>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </CardContent>
// // //       </Card>

// // //       {/* Add Event Dialog */}
// // //       <Dialog open={open} onOpenChange={setOpen}>
// // //         <DialogContent>
// // //           <DialogHeader>
// // //             <DialogTitle>Add New Schedule</DialogTitle>
// // //           </DialogHeader>
// // //           <div className="space-y-3">
// // //             <Input
// // //               placeholder="Title"
// // //               value={newEvent.title}
// // //               onChange={(e) =>
// // //                 setNewEvent({ ...newEvent, title: e.target.value })
// // //               }
// // //             />

// // //             {/* Employee */}
// // //             <Select
// // //               value={newEvent.employee}
// // //               onValueChange={(v) => setNewEvent({ ...newEvent, employee: v })}
// // //             >
// // //               <SelectTrigger>
// // //                 <SelectValue placeholder="Select Employee" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 {employees.map((emp) => (
// // //                   <SelectItem key={emp.id} value={emp.username}>
// // //                     {emp.username}
// // //                   </SelectItem>
// // //                 ))}
// // //               </SelectContent>
// // //             </Select>

// // //             {/* Type */}
// // //             <Select
// // //               value={newEvent.type}
// // //               onValueChange={(v) => setNewEvent({ ...newEvent, type: v })}
// // //             >
// // //               <SelectTrigger>
// // //                 <SelectValue placeholder="Select Type" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 {types.map((t) => (
// // //                   <SelectItem key={t.id} value={t.name}>
// // //                     {t.name}
// // //                   </SelectItem>
// // //                 ))}
// // //               </SelectContent>
// // //             </Select>

// // //             {/* Status */}
// // //             <Select
// // //               value={newEvent.status}
// // //               onValueChange={(v) => setNewEvent({ ...newEvent, status: v })}
// // //             >
// // //               <SelectTrigger>
// // //                 <SelectValue placeholder="Select Status" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 {statuses.map((s) => (
// // //                   <SelectItem key={s.id} value={s.name}>
// // //                     {s.name}
// // //                   </SelectItem>
// // //                 ))}
// // //               </SelectContent>
// // //             </Select>

// // //             <Button onClick={addEvent}>Save</Button>
// // //           </div>
// // //         </DialogContent>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default SchedulePage;

// // import React, { useEffect, useState } from "react";
// // import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// // import moment from "moment";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";

// // const localizer = momentLocalizer(moment);

// // interface Event {
// //   id: string;
// //   title: string;
// //   start: Date;
// //   end: Date;
// //   type: string;
// //   status: string;
// //   employee: string;
// // }

// // const SchedulePage: React.FC = () => {
// //   const [events, setEvents] = useState<Event[]>([]);
// //   const [users, setUsers] = useState<any[]>([]);
// //   const [types, setTypes] = useState<any[]>([]);
// //   const [statuses, setStatuses] = useState<any[]>([]);

// //   const [selectedUser, setSelectedUser] = useState<string>("all");
// //   const [selectedType, setSelectedType] = useState<string>("all");
// //   const [selectedStatus, setSelectedStatus] = useState<string>("all");

// //   const [open, setOpen] = useState(false);
// //   const [newEvent, setNewEvent] = useState<any>({
// //     title: "",
// //     start: new Date(),
// //     end: new Date(),
// //     type: "",
// //     status: "",
// //     employee: "",
// //   });

// //   // Fetch all data safely
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [usersRes, typesRes, statusesRes, eventsRes] = await Promise.all([
// //           fetch("http://localhost:5000/api/users"),
// //           fetch("http://localhost:5000/api/work_order_types"),
// //           fetch("http://localhost:5000/api/work_order_status"),
// //           fetch("http://localhost:5000/api/schedule"),
// //         ]);

// //         const usersData = await usersRes.json();
// //         setUsers(Array.isArray(usersData) ? usersData : []);

// //         const typesData = await typesRes.json();
// //         setTypes(Array.isArray(typesData) ? typesData : []);

// //         const statusesData = await statusesRes.json();
// //         setStatuses(Array.isArray(statusesData) ? statusesData : []);

// //         const eventsData = await eventsRes.json();
// //         setEvents(
// //           Array.isArray(eventsData)
// //             ? eventsData.map((e) => ({
// //                 ...e,
// //                 start: new Date(e.start_time),
// //                 end: new Date(e.end_time),
// //               }))
// //             : []
// //         );
// //       } catch (err) {
// //         console.error("Failed to fetch data:", err);
// //         setUsers([]);
// //         setTypes([]);
// //         setStatuses([]);
// //         setEvents([]);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Add new event
// //   const addEvent = async () => {
// //     try {
// //       const body = {
// //         title: newEvent.title,
// //         start_time: newEvent.start,
// //         end_time: newEvent.end,
// //         type: newEvent.type,
// //         status: newEvent.status,
// //         employee: newEvent.employee,
// //       };
// //       const res = await fetch("http://localhost:5000/api/schedule", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(body),
// //       });
// //       if (!res.ok) throw new Error("Failed to save event");
// //       const saved = await res.json();
// //       setEvents([
// //         ...events,
// //         {
// //           ...saved,
// //           start: new Date(saved.start_time),
// //           end: new Date(saved.end_time),
// //         },
// //       ]);
// //       setOpen(false);
// //       setNewEvent({
// //         title: "",
// //         start: new Date(),
// //         end: new Date(),
// //         type: "",
// //         status: "",
// //         employee: "",
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // Apply filters safely
// //   const filteredEvents = events.filter((e) => {
// //     return (
// //       (selectedUser === "all" || e.employee === selectedUser) &&
// //       (selectedType === "all" || e.type === selectedType) &&
// //       (selectedStatus === "all" || e.status === selectedStatus)
// //     );
// //   });

// //   return (
// //     <div className="p-6 grid grid-cols-12 gap-4">
// //       {/* Filters */}
// //       <Card className="col-span-12 p-4">
// //         <div className="flex gap-4">
// //           <Select onValueChange={setSelectedUser} defaultValue="all">
// //             <SelectTrigger className="w-[200px]">
// //               <SelectValue placeholder="Filter by Employee" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All</SelectItem>
// //               {(Array.isArray(users) ? users : []).map((u) => (
// //                 <SelectItem key={u.id} value={u.username}>
// //                   {u.username}
// //                 </SelectItem>
// //               ))}
// //             </SelectContent>
// //           </Select>

// //           <Select onValueChange={setSelectedType} defaultValue="all">
// //             <SelectTrigger className="w-[200px]">
// //               <SelectValue placeholder="Filter by Type" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All</SelectItem>
// //               {(Array.isArray(types) ? types : []).map((t) => (
// //                 <SelectItem key={t.id} value={t.name}>
// //                   {t.name}
// //                 </SelectItem>
// //               ))}
// //             </SelectContent>
// //           </Select>

// //           <Select onValueChange={setSelectedStatus} defaultValue="all">
// //             <SelectTrigger className="w-[200px]">
// //               <SelectValue placeholder="Filter by Status" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All</SelectItem>
// //               {(Array.isArray(statuses) ? statuses : []).map((s) => (
// //                 <SelectItem key={s.id} value={s.name}>
// //                   {s.name}
// //                 </SelectItem>
// //               ))}
// //             </SelectContent>
// //           </Select>

// //           <Button onClick={() => setOpen(true)} className="ml-auto">
// //             + Add Schedule
// //           </Button>
// //         </div>
// //       </Card>

// //       {/* Calendar */}
// //       <Card className="col-span-8">
// //         <CardContent>
// //           <Calendar
// //             localizer={localizer}
// //             events={filteredEvents}
// //             startAccessor="start"
// //             endAccessor="end"
// //             style={{ height: 500 }}
// //             defaultView={Views.WEEK}
// //           />
// //         </CardContent>
// //       </Card>

// //       {/* Schedule Table */}
// //       <Card className="col-span-4">
// //         <CardContent>
// //           <h2 className="text-lg font-semibold mb-2">Scheduled Tasks</h2>
// //           <ul className="space-y-2">
// //             {filteredEvents.map((e) => (
// //               <li key={e.id} className="p-2 border rounded-md">
// //                 <p className="font-medium">{e.title}</p>
// //                 <p className="text-sm text-gray-500">
// //                   {moment(e.start).format("MMM D, h:mm A")} -{" "}
// //                   {moment(e.end).format("h:mm A")}
// //                 </p>
// //                 <p className="text-xs text-gray-400">
// //                   {e.type} • {e.status} • {e.employee}
// //                 </p>
// //               </li>
// //             ))}
// //           </ul>
// //         </CardContent>
// //       </Card>

// //       {/* Add Event Dialog */}
// //       <Dialog open={open} onOpenChange={setOpen}>
// //         <DialogContent>
// //           <DialogHeader>
// //             <DialogTitle>Add New Schedule</DialogTitle>
// //           </DialogHeader>
// //           <div className="space-y-3">
// //             <Input
// //               placeholder="Title"
// //               value={newEvent.title}
// //               onChange={(e) =>
// //                 setNewEvent({ ...newEvent, title: e.target.value })
// //               }
// //             />

// //             {/* Employee */}
// //             <Select
// //               value={newEvent.employee}
// //               onValueChange={(v) => setNewEvent({ ...newEvent, employee: v })}
// //             >
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Select Employee" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {(Array.isArray(users) ? users : []).map((u) => (
// //                   <SelectItem key={u.id} value={u.username}>
// //                     {u.username}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>

// //             {/* Type */}
// //             <Select
// //               value={newEvent.type}
// //               onValueChange={(v) => setNewEvent({ ...newEvent, type: v })}
// //             >
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Select Type" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {(Array.isArray(types) ? types : []).map((t) => (
// //                   <SelectItem key={t.id} value={t.name}>
// //                     {t.name}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>

// //             {/* Status */}
// //             <Select
// //               value={newEvent.status}
// //               onValueChange={(v) => setNewEvent({ ...newEvent, status: v })}
// //             >
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Select Status" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {(Array.isArray(statuses) ? statuses : []).map((s) => (
// //                   <SelectItem key={s.id} value={s.name}>
// //                     {s.name}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>

// //             <Button onClick={addEvent}>Save</Button>
// //           </div>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default SchedulePage;
// import React, { useEffect, useState } from "react";
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";

// const localizer = momentLocalizer(moment);

// interface Event {
//   id: string;
//   title: string;
//   start: Date;
//   end: Date;
//   type: string;
//   status: string;
//   employee: string;
// }

// const STATUS_OPTIONS = ["Scheduled", "In Progress", "Unscheduled"];

// const SchedulePage: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [users, setUsers] = useState<any[]>([]);
//   const [types, setTypes] = useState<any[]>([]);

//   const [selectedUser, setSelectedUser] = useState<string>("all");
//   const [selectedType, setSelectedType] = useState<string>("all");
//   const [selectedStatus, setSelectedStatus] = useState<string>("all");

//   const [open, setOpen] = useState(false);
//   const [newEvent, setNewEvent] = useState<any>({
//     title: "",
//     start: new Date(),
//     end: new Date(),
//     type: "",
//     status: "Scheduled",
//     employee: "",
//   });

//   // Fetch Users and Types only
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [usersRes, typesRes, eventsRes] = await Promise.all([
//           fetch("http://localhost:5000/api/users"),
//           fetch("http://localhost:5000/api/work_order_types"),
//           fetch("http://localhost:5000/api/schedule"),
//         ]);

//         const usersData = await usersRes.json();
//         setUsers(Array.isArray(usersData) ? usersData : []);

//         const typesData = await typesRes.json();
//         setTypes(Array.isArray(typesData) ? typesData : []);

//         const eventsData = await eventsRes.json();
//         setEvents(
//           Array.isArray(eventsData)
//             ? eventsData.map((e) => ({
//                 ...e,
//                 start: new Date(e.start_time),
//                 end: new Date(e.end_time),
//               }))
//             : []
//         );
//       } catch (err) {
//         console.error("Failed to fetch data:", err);
//         setUsers([]);
//         setTypes([]);
//         setEvents([]);
//       }
//     };

//     fetchData();
//   }, []);

//   const addEvent = async () => {
//     try {
//       const body = {
//         title: newEvent.title,
//         start_time: newEvent.start,
//         end_time: newEvent.end,
//         type: newEvent.type,
//         status: newEvent.status,
//         employee: newEvent.employee,
//       };
//       const res = await fetch("http://localhost:5000/api/schedule", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       if (!res.ok) throw new Error("Failed to save event");
//       const saved = await res.json();
//       setEvents([
//         ...events,
//         {
//           ...saved,
//           start: new Date(saved.start_time),
//           end: new Date(saved.end_time),
//         },
//       ]);
//       setOpen(false);
//       setNewEvent({
//         title: "",
//         start: new Date(),
//         end: new Date(),
//         type: "",
//         status: "Scheduled",
//         employee: "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const filteredEvents = events.filter((e) => {
//     return (
//       (selectedUser === "all" || e.employee === selectedUser) &&
//       (selectedType === "all" || e.type === selectedType) &&
//       (selectedStatus === "all" || e.status === selectedStatus)
//     );
//   });

//   return (
//     <div className="p-6 grid grid-cols-12 gap-4">
//       {/* Filters */}
//       <Card className="col-span-12 p-4">
//         <div className="flex gap-4">
//           <Select onValueChange={setSelectedUser} defaultValue="all">
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Employee" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               {(Array.isArray(users) ? users : []).map((u) => (
//                 <SelectItem key={u.id} value={u.username}>
//                   {u.username}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select onValueChange={setSelectedType} defaultValue="all">
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               {(Array.isArray(types) ? types : []).map((t) => (
//                 <SelectItem key={t.id} value={t.name}>
//                   {t.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select onValueChange={setSelectedStatus} defaultValue="all">
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               {STATUS_OPTIONS.map((s) => (
//                 <SelectItem key={s} value={s}>
//                   {s}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Button onClick={() => setOpen(true)} className="ml-auto">
//             + Add Schedule
//           </Button>
//         </div>
//       </Card>

//       {/* Calendar */}
//       <Card className="col-span-8">
//         <CardContent>
//           <Calendar
//             localizer={localizer}
//             events={filteredEvents}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500 }}
//             defaultView={Views.WEEK}
//           />
//         </CardContent>
//       </Card>

//       {/* Schedule Table */}
//       <Card className="col-span-4">
//         <CardContent>
//           <h2 className="text-lg font-semibold mb-2">Scheduled Tasks</h2>
//           <ul className="space-y-2">
//             {filteredEvents.map((e) => (
//               <li key={e.id} className="p-2 border rounded-md">
//                 <p className="font-medium">{e.title}</p>
//                 <p className="text-sm text-gray-500">
//                   {moment(e.start).format("MMM D, h:mm A")} -{" "}
//                   {moment(e.end).format("h:mm A")}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   {e.type} • {e.status} • {e.employee}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Add Event Dialog */}
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Add New Schedule</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-3">
//             <Input
//               placeholder="Title"
//               value={newEvent.title}
//               onChange={(e) =>
//                 setNewEvent({ ...newEvent, title: e.target.value })
//               }
//             />

//             {/* Start Date */}
//             <Input
//               type="datetime-local"
//               value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
//               onChange={(e) =>
//                 setNewEvent({ ...newEvent, start: new Date(e.target.value) })
//               }
//             />

//             {/* End Date */}
//             <Input
//               type="datetime-local"
//               value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
//               onChange={(e) =>
//                 setNewEvent({ ...newEvent, end: new Date(e.target.value) })
//               }
//             />

//             {/* Employee */}
//             <Select
//               value={newEvent.employee}
//               onValueChange={(v) => setNewEvent({ ...newEvent, employee: v })}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Employee" />
//               </SelectTrigger>
//               <SelectContent>
//                 {(Array.isArray(users) ? users : []).map((u) => (
//                   <SelectItem key={u.id} value={u.username}>
//                     {u.username}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Type */}
//             <Select
//               value={newEvent.type}
//               onValueChange={(v) => setNewEvent({ ...newEvent, type: v })}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {(Array.isArray(types) ? types : []).map((t) => (
//                   <SelectItem key={t.id} value={t.name}>
//                     {t.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Status */}
//             <Select
//               value={newEvent.status}
//               onValueChange={(v) => setNewEvent({ ...newEvent, status: v })}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Status" />
//               </SelectTrigger>
//               <SelectContent>
//                 {STATUS_OPTIONS.map((s) => (
//                   <SelectItem key={s} value={s}>
//                     {s}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Button onClick={addEvent}>Save</Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default SchedulePage;
import React from 'react'

const ScheduleOverview = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default ScheduleOverview
