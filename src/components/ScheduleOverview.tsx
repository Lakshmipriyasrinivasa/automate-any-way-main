import React, { useState, useMemo } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Card } from "@/components/ui/card";

const localizer = momentLocalizer(moment);

// Sample data
const items = [
  {
    id: 1,
    title: "Visit - Client A",
    type: "Visit",
    status: "Scheduled",
    employee: "Raj",
    start: new Date(2025, 7, 5, 9, 0),
    end: new Date(2025, 7, 5, 11, 0)
  },
  {
    id: 2,
    title: "Task - Inventory",
    type: "Task",
    status: "In Progress",
    employee: "Priya",
    start: new Date(2025, 7, 6, 13, 0),
    end: new Date(2025, 7, 6, 14, 0)
  },
  {
    id: 3,
    title: "Reminder - Follow-up",
    type: "Reminder",
    status: "Unscheduled",
    employee: "Raj",
    start: null,
    end: null
  }
];

const employees = ["All", "Raj", "Priya"];
const types = ["All", "Visit", "Task", "Event", "Reminder", "Request"];
const statuses = ["All", "Scheduled", "In Progress", "Unscheduled", "Overdue"];
const views: Views[] = ["month", "week", "day"];

const colorMap: Record<string, string> = {
  Visit: "green",
  Task: "blue",
  Event: "gold",
  Request: "orange",
  Reminder: "red"
};

const ScheduleOverview: React.FC = () => {
  const [view, setView] = useState<Views>("month");
  const [filterEmp, setFilterEmp] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Only show scheduled items with start/end dates
  const filtered = useMemo(() => {
    return items
      .filter(it =>
        (filterEmp === "All" || it.employee === filterEmp) &&
        (filterType === "All" || it.type === filterType) &&
        (filterStatus === "All" || it.status === filterStatus)
      )
      .filter(it => it.status !== "Unscheduled" && it.start && it.end);
  }, [filterEmp, filterType, filterStatus]);

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <Select value={filterEmp} onValueChange={setFilterEmp}>
          <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            {employees.map(e => <SelectItem key={e} value={e}>{e}</SelectItem>)}
          </SelectContent>
        </Select>

        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>

        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">More Actions</Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 p-2">
            <Button variant="ghost" onClick={() => alert("Add Job")}>Add Job</Button>
            <Button variant="ghost" onClick={() => alert("Add Request")}>Add Request</Button>
            <Button variant="ghost" onClick={() => alert("Add Task")}>Add Task</Button>
            <Button variant="ghost" onClick={() => alert("Add Event")}>Add Event</Button>
          </PopoverContent>
        </Popover>
      </div>

      {/* Calendar */}
      <Calendar
        localizer={localizer}
        events={filtered}
        views={views}
        view={view}
        onView={(v) => setView(v as Views)}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        min={new Date(2025, 7, 5, 8, 0)}
        max={new Date(2025, 7, 5, 18, 0)}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: colorMap[event.type] || "gray",
            color: "white"
          }
        })}
        onSelectEvent={(e) => alert(e.title)}
      />

      {/* Unscheduled */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Unscheduled</h3>
        {items.filter(it => it.status === "Unscheduled").map(it => (
          <Card key={it.id} className="p-2 mb-2">
            <div className="font-medium">{it.title}</div>
            <div className="text-sm text-muted-foreground">
              {it.type} • {it.employee || "Unassigned"}
            </div>
            {(it.start && it.end) && (
              <div className="text-sm text-muted-foreground">
                {moment(it.start).format("MMM D, YYYY, h:mm A")} - {moment(it.end).format("h:mm A")}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScheduleOverview;
