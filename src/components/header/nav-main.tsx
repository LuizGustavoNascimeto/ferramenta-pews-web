import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

export const NavMain = () => {
  const items = [
    {
      title: "Painel",
      url: "/painel",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "/cadastrarPaciente",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/entrar",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/Pacientes",
      icon: Search,
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
