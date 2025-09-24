import React from "react";
import { cn } from "@/shared/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("h-full w-64 bg-white border-r hidden md:flex flex-col", className)}>
  <div className="h-16 flex items-center justify-center font-bold text-xl border-b !text-gray-800">Aquatracking</div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-2 px-3 rounded hover:bg-gray-200 !text-gray-800 font-semibold"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
