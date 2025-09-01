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
  { id: 1, title: "Dashboard", url: "/", icon: Home },
  { id: 2, title: "Field Management", url: "/fields", icon: MapPin },
  // { id: 3, title: "Scheduling", url: "/scheduling", icon: Calendar },
  // { id: 4, title: "Equipment", url: "/equipment", icon: Wrench },
  // { id: 5, title: "Reports", url: "/reports", icon: BarChart3 },
  // { id: 6, title: "Documents", url: "/documents", icon: FileText },
  { id: 7, title: "Add Workforce", url: "/fieldwork", icon: Users },
  { id: 8, title: "Assets", url: "/assets", icon: Users },
  { id: 9, title: "New Service Contract", url: "/newservicecontract", icon: Users },
  { id: 10, title: "Worker List", url: "/workerlist", icon: Users },
  { id: 11, title: "Account", url: "/account", icon: Users },
  { id: 12, title: "Contact", url: "/contact", icon: Users },
  { id: 13, title: "Workorder", url: "/workorder", icon: Users },
  { id: 14, title: "User", url: "/user", icon: Users },

];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent className="flex flex-col h-full">
        {/* Logo Section */}
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

        {/* Main Menu */}
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
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

        {/* Fixed Settings Menu at Bottom */}
        <div className="mt-auto p-3 border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink 
                  to="/settings"
                  className={({ isActive }) =>
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-muted/50"
                  }
                >
                  <Settings className="mr-2 h-4 w-4" />
                  {!isCollapsed && <span>Settings</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
