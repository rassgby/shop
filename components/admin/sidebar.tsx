"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, LayoutDashboard, LogOut, Settings, ShoppingCart, Users } from "lucide-react"

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}

function SidebarLink({ href, icon, label, isActive }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
        isActive ? "bg-amber-100 text-amber-900" : "text-gray-500 hover:text-amber-900 hover:bg-amber-50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold text-lg text-amber-900">
          <LayoutDashboard className="h-6 w-6" />
          <span>LUXE</span>
        </Link>
      </div>

      <div className="flex-1 px-3 py-2 space-y-1">
        <SidebarLink
          href="/admin"
          icon={<BarChart3 className="h-5 w-5" />}
          label="Tableau de bord"
          isActive={pathname === "/admin"}
        />
        <SidebarLink
          href="/admin/products"
          icon={<Box className="h-5 w-5" />}
          label="Produits"
          isActive={pathname === "/admin/products"}
        />
        <SidebarLink
          href="/admin/orders"
          icon={<ShoppingCart className="h-5 w-5" />}
          label="Commandes"
          isActive={pathname === "/admin/orders"}
        />
        <SidebarLink
          href="/admin/customers"
          icon={<Users className="h-5 w-5" />}
          label="Clients"
          isActive={pathname === "/admin/customers"}
        />
        {/* <SidebarLink
          href="/admin/settings"
          icon={<Settings className="h-5 w-5" />}
          label="Paramètres"
          isActive={pathname === "/admin/settings"}
        /> */}
      </div>

      <div className="p-4 mt-auto border-t">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-semibold">
            A
          </div>
          <div>
            <p className="font-medium">Admin</p>
            <p className="text-xs text-gray-500">admin@africaboubou.com</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-900 px-3 py-2 rounded-lg hover:bg-amber-50 flex-1"
          >
            <Home className="h-4 w-4" />
            <span>Site</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-900 px-3 py-2 rounded-lg hover:bg-amber-50 flex-1"
          >
            <LogOut className="h-4 w-4" />
            <span>Déconnexion</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
