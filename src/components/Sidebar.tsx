import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  MapPin, 
  Users, 
  Calendar, 
  Settings, 
  FileText,
  BarChart3,
  Wrench,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "fields", label: "Field Management", icon: MapPin },
    { id: "workers", label: "Field Workers", icon: Users },
    { id: "scheduling", label: "Scheduling", icon: Calendar },
    { id: "equipment", label: "Equipment", icon: Wrench },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className={cn("pb-12 w-64 border-r border-border bg-card", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center mb-6 px-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">FieldPro</h2>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          </div>
          
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeItem === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    activeItem === item.id && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;