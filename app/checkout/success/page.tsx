"use client"

import Link from "next/link"
import { CheckCircle, Home, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function CheckoutSuccessPage() {
  // Générer un numéro de commande aléatoire
  const orderNumber = `CMD-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Commande confirmée !</h1>
            <p className="text-gray-600">Merci pour votre achat. Votre commande a été traitée avec succès.</p>
          </div>

          <div className="border rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Détails de la commande</h2>
              <span className="text-amber-700 font-medium">#{orderNumber}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Package className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Statut de la commande</h3>
                  <p className="text-gray-600">En cours de traitement</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-600 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-medium">Date estimée de livraison</h3>
                  <p className="text-gray-600">
                    {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-600 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-medium">Confirmation par email</h3>
                  <p className="text-gray-600">Un email de confirmation a été envoyé à votre adresse email.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Vous avez des questions sur votre commande ? N'hésitez pas à nous contacter.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800">
                  <Home className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full sm:w-auto">
                  Continuer vos achats
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
