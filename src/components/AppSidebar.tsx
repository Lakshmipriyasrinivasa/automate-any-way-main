import { 
  Home, 
  MapPin, 
  Users, 
  Calendar, 
  Settings, 
  FileText,
  BarChart3,
  Wrench
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Field Management", url: "/fields", icon: MapPin },
  { title: "Field Workers", url: "/workers", icon: Users },
  { title: "Scheduling", url: "/scheduling", icon: Calendar },
  { title: "Equipment", url: "/equipment", icon: Wrench },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Add Workforce", url: "/fieldwork", icon: Users },
  { title: "Assets", url: "/assets", icon: Users },
  { title: "New Serivce Contract", url: "/newservicecontract", icon: Users },


];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  // const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <div className="px-3 py-2">
          <div className="flex items-center mb-6 px-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">FieldPro</h2>
                <p className="text-xs text-muted-foreground">Management System</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "hover:bg-muted/50"
                      }
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}