"use client"

import { useState } from "react"
import { Eye, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ORDERS } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  // Filtrer les commandes en fonction de la recherche et du statut
  const filteredOrders = ORDERS.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter ? order.status === statusFilter : true
    return matchesSearch && matchesStatus
  })

  // Obtenir les statuts uniques
  const statuses = Array.from(new Set(ORDERS.map((order) => order.status)))

  // Simuler la mise à jour du statut d'une commande
  const handleUpdateStatus = (id: string, newStatus: string) => {
    // Dans une application réelle, vous appelleriez une API ici
    toast.success(`Statut de la commande ${id} mis à jour: ${newStatus}`)
  }

  // Fonction pour obtenir la couleur du badge en fonction du statut
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "shipped":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "processing":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200"
      case "pending":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // Fonction pour traduire le statut en français
  const translateStatus = (status: string) => {
    switch (status) {
      case "delivered":
        return "Livré"
      case "shipped":
        return "Expédié"
      case "processing":
        return "En traitement"
      case "pending":
        return "En attente"
      case "cancelled":
        return "Annulé"
      default:
        return status
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestion des commandes</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Rechercher une commande..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={statusFilter === null ? "default" : "outline"}
            className={statusFilter === null ? "bg-amber-700 hover:bg-amber-800" : ""}
            onClick={() => setStatusFilter(null)}
          >
            Tous
          </Button>
          {statuses.map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              className={statusFilter === status ? "bg-amber-700 hover:bg-amber-800" : ""}
              onClick={() => setStatusFilter(status)}
            >
              {translateStatus(status)}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Commande</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customerName}</p>
                    <p className="text-xs text-gray-500">{order.customerEmail}</p>
                  </div>
                </TableCell>
                <TableCell>
                  {order.createdAt.toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadgeVariant(order.status)}>
                    {translateStatus(order.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">{order.total.toLocaleString("fr-FR")} FCFA</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-2">
                    <Select onValueChange={(value) => handleUpdateStatus(order.id, value)} defaultValue={order.status}>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">En attente</SelectItem>
                        <SelectItem value="processing">En traitement</SelectItem>
                        <SelectItem value="shipped">Expédié</SelectItem>
                        <SelectItem value="delivered">Livré</SelectItem>
                        <SelectItem value="cancelled">Annulé</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
