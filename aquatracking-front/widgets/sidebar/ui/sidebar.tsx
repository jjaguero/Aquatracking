import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaSignOutAlt } from "react-icons/fa";

export interface SidebarMenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface SidebarProps {
  menu: SidebarMenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menu }) => (
  <aside className="w-64 bg-white shadow-md flex-col border-r h-full flex">
    <div className="h-24 flex items-center justify-center border-b">
      <img src="/aquatrackingpng.png" alt="AquaTracking Logo" className="h-16 w-auto" />
    </div>
    <nav className="flex-1 px-4 py-6 space-y-1">
      {menu.map((item, idx) => (
        <a
          key={item.href}
          href={item.href}
          className={`flex items-center gap-2 py-2 px-3 rounded-lg font-medium text-gray-800 hover:bg-blue-50 transition ${item.active ? "bg-blue-50" : ""}`}
        >
          {item.icon}
          {item.label}
        </a>
      ))}
    </nav>
    <div className="border-t p-4 flex items-center gap-3">
      <Avatar>
        <img src="/aquatrackingpng.png" alt="User" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <div className="font-semibold text-sm text-gray-800">Usuario</div>
        <div className="text-xs text-gray-500">admin@aquatracking.com</div>
      </div>
      <Button size="icon" variant="ghost" className="text-gray-400 hover:text-red-500">
        <FaSignOutAlt />
      </Button>
    </div>
  </aside>
);
