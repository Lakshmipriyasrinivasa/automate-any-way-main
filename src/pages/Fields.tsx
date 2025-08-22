import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, MapPin, Calendar, User, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Field {
  id: string;
  name: string;
  location: string;
  area: string;
  status: "active" | "inactive" | "maintenance";
  assignedWorker: string;
  lastInspection: string;
  description: string;
}

const Fields = () => {
  const { toast } = useToast();
  const [fields, setFields] = useState<Field[]>([
    {
      id: "1",
      name: "North District Field A",
      location: "North District, Section 1",
      area: "25.5 acres",
      status: "active",
      assignedWorker: "John Smith",
      lastInspection: "2024-01-15",
      description: "Primary agricultural field for crop rotation"
    },
    {
      id: "2",
      name: "Central Hub Field B",
      location: "Central Hub, Section 3",
      area: "18.2 acres",
      status: "maintenance",
      assignedWorker: "Sarah Johnson",
      lastInspection: "2024-01-10",
      description: "Equipment storage and maintenance area"
    },
    {
      id: "3",
      name: "South District Field C",
      location: "South District, Section 2",
      area: "32.1 acres",
      status: "active",
      assignedWorker: "Mike Wilson",
      lastInspection: "2024-01-20",
      description: "High-yield production field"
    }
  ]);

  const [editingField, setEditingField] = useState<Field | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "maintenance":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Maintenance</Badge>;
      case "inactive":
        return <Badge variant="secondary" className="bg-muted">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSaveField = (fieldData: Partial<Field>) => {
    if (editingField) {
      // Update existing field
      setFields(fields.map(field => 
        field.id === editingField.id 
          ? { ...field, ...fieldData }
          : field
      ));
      toast({
        title: "Field updated",
        description: "Field information has been successfully updated.",
      });
    } else {
      // Add new field
      const newField: Field = {
        id: (fields.length + 1).toString(),
        name: fieldData.name || "",
        location: fieldData.location || "",
        area: fieldData.area || "",
        status: (fieldData.status as "active" | "inactive" | "maintenance") || "active",
        assignedWorker: fieldData.assignedWorker || "",
        lastInspection: fieldData.lastInspection || new Date().toISOString().split('T')[0],
        description: fieldData.description || ""
      };
      setFields([...fields, newField]);
      toast({
        title: "Field created",
        description: "New field has been successfully added.",
      });
    }
    setEditingField(null);
    setIsDialogOpen(false);
  };

  const handleDeleteField = (fieldId: string) => {
    setFields(fields.filter(field => field.id !== fieldId));
    toast({
      title: "Field deleted",
      description: "Field has been successfully removed.",
      variant: "destructive"
    });
  };

  const FieldForm = ({ field }: { field?: Field }) => {
    const [formData, setFormData] = useState({
      name: field?.name || "",
      location: field?.location || "",
      area: field?.area || "",
      status: (field?.status || "active") as "active" | "inactive" | "maintenance",
      assignedWorker: field?.assignedWorker || "",
      lastInspection: field?.lastInspection || "",
      description: field?.description || ""
    });

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Field Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter field name"
            />
          </div>
          <div>
            <Label htmlFor="area">Area</Label>
            <Input
              id="area"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="e.g., 25.5 acres"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Enter field location"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value: "active" | "inactive" | "maintenance") => setFormData({ ...formData, status: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="assignedWorker">Assigned Worker</Label>
            <Input
              id="assignedWorker"
              value={formData.assignedWorker}
              onChange={(e) => setFormData({ ...formData, assignedWorker: e.target.value })}
              placeholder="Worker name"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="lastInspection">Last Inspection</Label>
          <Input
            id="lastInspection"
            type="date"
            value={formData.lastInspection}
            onChange={(e) => setFormData({ ...formData, lastInspection: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Field description and notes"
            rows={3}
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleSaveField(formData)}>
            {field ? "Update Field" : "Create Field"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Field Management</h1>
          <p className="text-muted-foreground">Manage and monitor your field operations</p>
              <span style={{ color: '#666' }}>Recently Viewed ▼</span>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingField(null)}>
              <Plus className="h-4 w-4 mr-2" />
              New Field
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingField ? "Edit Field" : "Create New Field"}
              </DialogTitle>
            </DialogHeader>
            <FieldForm field={editingField || undefined} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {fields.map((field) => (
          <Card key={field.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{field.name}</CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {field.location}
                  </p>
                </div>
                {getStatusBadge(field.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Area:</span>
                  <p className="font-medium">{field.area}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Worker:</span>
                  <p className="font-medium flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {field.assignedWorker}
                  </p>
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-muted-foreground">Last Inspection:</span>
                <p className="font-medium flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {field.lastInspection}
                </p>
              </div>

              <p className="text-sm text-muted-foreground">{field.description}</p>

              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setEditingField(field);
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
                  onClick={() => handleDeleteField(field.id)}
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

export default Fields;