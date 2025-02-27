import { Calendar, Home, Inbox, Search, Settings, Plus, List } from "lucide-react";
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
      title: "Novo Paciente",
      url: "/cadastrarPaciente",
      icon: Plus,
    },
    {
      title: "Lista de Pacientes",
      url: "/Pacientes",
      icon: List,
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
