"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { Sidebar, SidebarMenuItem } from "@/widgets/sidebar/ui/sidebar";



export interface DashboardLayoutProps {
  children: React.ReactNode;
  menu: SidebarMenuItem[];
}

export function DashboardLayout({ children, menu }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-gray-100 overflow-x-hidden">
      {/* Sidebar Desktop */}
      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-30">
        <Sidebar menu={menu} />
      </div>

      {/* Sidebar Drawer Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="relative w-64 animate-slide-in-left">
            <Sidebar menu={menu} />
            <Button size="icon" variant="ghost" className="absolute top-4 right-4 text-gray-400 hover:text-red-500" onClick={() => setSidebarOpen(false)}>
              <span className="text-2xl">×</span>
            </Button>
          </div>
          <div className="flex-1 bg-black/30" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main content area: header + content, with sidebar space reserved */}
      <div className="flex-1 flex flex-col min-h-screen w-full transition-all duration-200 lg:ml-64">
        {/* Header sticky arriba */}
        <header className="h-16 bg-white shadow flex items-center px-2 md:px-6 border-b justify-between w-full sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </Button>
          </div>
          {/* Aquí puedes agregar acciones rápidas, notificaciones, etc. */}
        </header>
        {/* Contenido principal scrollable debajo del header */}
        <main className="flex-1 p-1 md:p-4 bg-gray-100 w-full max-w-full overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
