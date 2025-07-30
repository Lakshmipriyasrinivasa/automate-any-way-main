import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Phone, Mail, MapPin, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Worker {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive" | "on-leave";
  assignedField: string;
  experience: string;
}

const Workers = () => {
  const { toast } = useToast();
  const [workers, setWorkers] = useState<Worker[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@fieldpro.com",
      phone: "+1 (555) 123-4567",
      role: "Field Supervisor",
      status: "active",
      assignedField: "North District Field A",
      experience: "5 years"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@fieldpro.com", 
      phone: "+1 (555) 234-5678",
      role: "Equipment Specialist",
      status: "active",
      assignedField: "Central Hub Field B",
      experience: "3 years"
    },
    {
      id: "3",
      name: "Mike Wilson",
      email: "mike.wilson@fieldpro.com",
      phone: "+1 (555) 345-6789",
      role: "Field Technician",
      status: "on-leave",
      assignedField: "South District Field C",
      experience: "7 years"
    }
  ]);

  const [editingWorker, setEditingWorker] = useState<Worker | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "on-leave":
        return <Badge className="bg-warning/10 text-warning border-warning/20">On Leave</Badge>;
      case "inactive":
        return <Badge variant="secondary" className="bg-muted">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSaveWorker = (workerData: Partial<Worker>) => {
    if (editingWorker) {
      setWorkers(workers.map(worker => 
        worker.id === editingWorker.id 
          ? { ...worker, ...workerData }
          : worker
      ));
      toast({
        title: "Worker updated",
        description: "Worker information has been successfully updated.",
      });
    } else {
      const newWorker: Worker = {
        id: (workers.length + 1).toString(),
        name: workerData.name || "",
        email: workerData.email || "",
        phone: workerData.phone || "",
        role: workerData.role || "",
        status: (workerData.status as "active" | "inactive" | "on-leave") || "active",
        assignedField: workerData.assignedField || "",
        experience: workerData.experience || ""
      };
      setWorkers([...workers, newWorker]);
      toast({
        title: "Worker added",
        description: "New worker has been successfully added.",
      });
    }
    setEditingWorker(null);
    setIsDialogOpen(false);
  };

  const handleDeleteWorker = (workerId: string) => {
    setWorkers(workers.filter(worker => worker.id !== workerId));
    toast({
      title: "Worker removed",
      description: "Worker has been successfully removed.",
      variant: "destructive"
    });
  };

  const WorkerForm = ({ worker }: { worker?: Worker }) => {
    const [formData, setFormData] = useState({
      name: worker?.name || "",
      email: worker?.email || "",
      phone: worker?.phone || "",
      role: worker?.role || "",
      status: (worker?.status || "active") as "active" | "inactive" | "on-leave",
      assignedField: worker?.assignedField || "",
      experience: worker?.experience || ""
    });

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter full name"
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Field Supervisor">Field Supervisor</SelectItem>
                <SelectItem value="Field Technician">Field Technician</SelectItem>
                <SelectItem value="Equipment Specialist">Equipment Specialist</SelectItem>
                <SelectItem value="Quality Inspector">Quality Inspector</SelectItem>
                <SelectItem value="Team Lead">Team Lead</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="worker@fieldpro.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value: "active" | "inactive" | "on-leave") => setFormData({ ...formData, status: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="experience">Experience</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="e.g., 5 years"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="assignedField">Assigned Field</Label>
          <Input
            id="assignedField"
            value={formData.assignedField}
            onChange={(e) => setFormData({ ...formData, assignedField: e.target.value })}
            placeholder="Field assignment"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleSaveWorker(formData)}>
            {worker ? "Update Worker" : "Add Worker"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Field Workers</h1>
          <p className="text-muted-foreground">Manage your field workforce</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingWorker(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Worker
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingWorker ? "Edit Worker" : "Add New Worker"}
              </DialogTitle>
            </DialogHeader>
            <WorkerForm worker={editingWorker || undefined} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <Card key={worker.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{worker.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{worker.role}</p>
                </div>
                {getStatusBadge(worker.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{worker.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{worker.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-3 w-3 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{worker.assignedField}</span>
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-muted-foreground">Experience: </span>
                <span className="font-medium">{worker.experience}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setEditingWorker(worker);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDeleteWorker(worker.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workers;