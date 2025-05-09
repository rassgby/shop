"use client"

import { BarChart, DollarSign, ShoppingCart, Users } from "lucide-react"
import { StatsCard } from "@/components/admin/stats-card"
import { DASHBOARD_STATS, ORDERS, PRODUCTS } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboard() {
  const { totalSales, totalOrders, totalCustomers, averageOrderValue, recentSales, topProducts } = DASHBOARD_STATS

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Exporter</Button>
          <Button className="bg-amber-700 hover:bg-amber-800">Nouveau produit</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Ventes totales"
          value={`${totalSales.toLocaleString("fr-FR")} FCFA`}
          description="Chiffre d'affaires total"
          icon={DollarSign}
          trend="up"
          trendValue="12%"
        />
        <StatsCard
          title="Commandes"
          value={totalOrders}
          description="Nombre total de commandes"
          icon={ShoppingCart}
          trend="up"
          trendValue="8%"
        />
        <StatsCard
          title="Clients"
          value={totalCustomers}
          description="Clients enregistrés"
          icon={Users}
          trend="up"
          trendValue="5%"
        />
        <StatsCard
          title="Panier moyen"
          value={`${averageOrderValue.toLocaleString("fr-FR")} FCFA`}
          description="Valeur moyenne des commandes"
          icon={BarChart}
          trend="up"
          trendValue="3%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique des ventes récentes */}
        <Card>
          <CardHeader>
            <CardTitle>Ventes récentes</CardTitle>
            <CardDescription>Évolution des ventes sur les 7 derniers jours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end gap-2">
              {recentSales.map((sale, index) => (
                <div key={index} className="relative flex-1 group">
                  <div
                    className="absolute bottom-0 w-full bg-amber-600 rounded-t-sm group-hover:bg-amber-700 transition-all"
                    style={{ height: `${(sale.amount / 75000) * 100}%` }}
                  ></div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {sale.amount.toLocaleString("fr-FR")} FCFA
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              {recentSales.map((sale, index) => (
                <div key={index} className="text-center">
                  {sale.date}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Produits les plus vendus */}
        <Card>
          <CardHeader>
            <CardTitle>Produits les plus vendus</CardTitle>
            <CardDescription>Top 5 des produits par chiffre d'affaires</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => {
                const productDetails = PRODUCTS.find((p) => p.id === product.id)
                return (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={productDetails?.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sales} ventes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{product.revenue.toLocaleString("fr-FR")} FCFA</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commandes récentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Commandes récentes</CardTitle>
              <CardDescription>Les 5 dernières commandes</CardDescription>
            </div>
            <Link href="/admin/orders">
              <Button variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                Voir tout
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ORDERS.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        order.status === "delivered"
                          ? "bg-green-500"
                          : order.status === "processing" || order.status === "shipped"
                            ? "bg-amber-500"
                            : order.status === "cancelled"
                              ? "bg-red-500"
                              : "bg-gray-500"
                      }`}
                    ></div>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.customerName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{order.total.toLocaleString("fr-FR")} FCFA</p>
                    <p className="text-xs text-gray-500">
                      {order.createdAt.toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventaire faible */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Inventaire faible</CardTitle>
              <CardDescription>Produits avec un stock limité</CardDescription>
            </div>
            <Link href="/admin/products">
              <Button variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                Voir tout
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {PRODUCTS.filter((product) => product.stock < 10)
                .slice(0, 5)
                .map((product) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          product.stock < 5 ? "text-red-600" : product.stock < 10 ? "text-amber-600" : "text-gray-900"
                        }`}
                      >
                        {product.stock} en stock
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
