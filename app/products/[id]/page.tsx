"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Minus, Plus, Share2, ShoppingCart, Star, ChevronRight, Check, Info } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ProductGallery } from "@/components/product-gallery"
import { SimilarProducts } from "@/components/similar-products"
import { useCart } from "@/contexts/cart-context"
import { getProductById, getSimilarProducts } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.value || "")
  const [selectedColorName, setSelectedColorName] = useState(product?.colors?.[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const { addItem } = useCart()

  // Pour gérer l'animation de scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [params.id])

  // Si le produit n'existe pas
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center py-20 bg-white rounded-xl shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                <Info className="h-10 w-10 text-amber-700" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link href="/products">
              <Button className="bg-amber-700 hover:bg-amber-800 px-6 py-6 text-base shadow-md transition-all duration-300 hover:shadow-lg">
                Voir tous les produits
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const similarProducts = getSimilarProducts(product.id, product.category)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
    
    toast.success(`${product.name} ajouté au panier`, {
      description: `${quantity} article${quantity > 1 ? 's' : ''} ajouté${quantity > 1 ? 's' : ''} à votre panier`,
      duration: 3000,
      action: {
        label: "Voir le panier",
        onClick: () => window.location.href = "/cart"
      }
    })
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist)
    toast.success(
      isInWishlist ? "Retiré des favoris" : "Ajouté aux favoris", 
      { 
        icon: isInWishlist ? "🗑️" : "❤️" 
      }
    )
  }

  const handleColorChange = (color: { name: any; value: any }) => {
    setSelectedColor(color.value)
    setSelectedColorName(color.name)
  }

  // Calculer le prix total basé sur la quantité
  const totalPrice = product.price * quantity

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-8 text-gray-500">
          <Link href="/" className="hover:text-amber-700">Accueil</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/products" className="hover:text-amber-700">Produits</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href={`/products/categories/${product.category}`} className="hover:text-amber-700">{product.category}</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-800 font-medium truncate max-w-xs">{product.name}</span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Galerie d'images */}
            <div className="lg:border-r border-gray-100">
              <ProductGallery images={product.images || [product.image]} />
            </div>

            {/* Informations produit */}
            <div className="p-6 lg:p-10">
              {product.inStock === false && (
                <Badge className="bg-red-500 mb-4">Rupture de stock</Badge>
              )}
              {product.isNew && (
                <Badge className="bg-green-500 mb-4">Nouveau</Badge>
              )}

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < (product.rating || 5) ? "fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-gray-500">({product.reviewCount || 12} avis)</span>
              </div>

              <div className="flex items-center mb-6">
                <p className="text-2xl lg:text-3xl font-bold text-amber-800">{product.price.toLocaleString("fr-FR")} FCFA</p>
                {product.oldPrice && (
                  <p className="ml-3 text-gray-400 line-through">{product.oldPrice.toLocaleString("fr-FR")} FCFA</p>
                )}
              </div>

              <div className="mb-6 text-gray-700 border-b border-gray-100 pb-6">
                <p>{product.description}</p>
              </div>

              {/* Sélection de couleur */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">Couleur</h3>
                    <span className="text-sm text-amber-700">{selectedColorName}</span>
                  </div>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.value}
                        className={`w-10 h-10 rounded-full relative ${
                          selectedColor === color.value ? "ring-2 ring-amber-700 ring-offset-2" : "ring-1 ring-gray-200"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleColorChange(color)}
                        title={color.name}
                        aria-label={`Couleur ${color.name}`}
                      >
                        {selectedColor === color.value && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check className="h-5 w-5 text-white drop-shadow" />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sélection de taille */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">Taille</h3>
                    <button className="text-sm text-amber-700 hover:underline">Guide des tailles</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`min-w-12 px-4 py-2 border rounded-lg transition-all duration-200 ${
                          selectedSize === size
                            ? "border-amber-700 bg-amber-50 text-amber-700 font-medium shadow-sm"
                            : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantité */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Quantité</h3>
                  <span className={`text-sm ${product.stock < 5 ? "text-red-500" : "text-green-600"}`}>
                    {product.stock} {product.stock > 1 ? "articles disponibles" : "article disponible"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-none border-r border-gray-300"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-none border-l border-gray-300"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Total: <span className="text-amber-800 font-bold">{totalPrice.toLocaleString("fr-FR")} FCFA</span></p>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 bg-amber-700 hover:bg-amber-800 py-6 text-base font-medium shadow-md transition-all duration-300 hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ajouter au panier
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex-1 py-6 text-base font-medium transition-all duration-300 ${
                    isInWishlist 
                      ? "bg-red-50 text-red-700 border-red-300 hover:bg-red-100" 
                      : "border-amber-700 text-amber-700 hover:bg-amber-50"
                  }`}
                  onClick={toggleWishlist}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
                  {isInWishlist ? "Retirer des favoris" : "Ajouter aux favoris"}
                </Button>
              </div>

              {/* Infos livraison */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-amber-700" />
                  </div>
                  <span className="font-medium">Livraison disponible à Dakar</span>
                </div>
                <p className="text-sm text-gray-600 pl-11">Livraison en 3-5 jours ouvrables</p>
              </div>

              {/* Partage */}
              <div className="flex items-center text-gray-500 hover:text-amber-700 cursor-pointer group">
                <Share2 className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">Partager ce produit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets d'informations supplémentaires */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full h-auto border-b border-gray-200 bg-gray-50 p-0 overflow-x-auto flex">
              <TabsTrigger 
                value="description" 
                className="py-4 px-6 text-base data-[state=active]:border-b-2 data-[state=active]:border-amber-700 data-[state=active]:shadow-none rounded-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="details" 
                className="py-4 px-6 text-base data-[state=active]:border-b-2 data-[state=active]:border-amber-700 data-[state=active]:shadow-none rounded-none"
              >
                Caractéristiques
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="py-4 px-6 text-base data-[state=active]:border-b-2 data-[state=active]:border-amber-700 data-[state=active]:shadow-none rounded-none"
              >
                Avis clients
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-8 px-6 lg:p-8 mt-0">
              <div className="prose max-w-none">
                <p className="mb-4 text-gray-700 leading-relaxed">{product.description}</p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Nos boubous sont confectionnés par des artisans qualifiés qui perpétuent des techniques
                  traditionnelles transmises de génération en génération. Chaque pièce est unique et témoigne du riche
                  patrimoine culturel africain.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le tissu utilisé est soigneusement sélectionné pour sa qualité et sa durabilité. Les broderies sont
                  réalisées à la main, ce qui garantit la finesse et la précision des motifs.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="py-8 px-6 lg:p-8 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Caractéristiques</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Matière</span>
                      <span className="font-medium">Coton / Bazin</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Origine</span>
                      <span className="font-medium">Afrique de l'Ouest</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium">{product.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Entretien</span>
                      <span className="font-medium">Lavage à la main recommandé</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Livraison et retours</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-amber-100 pb-2">
                      <span className="text-gray-600">Délai de livraison</span>
                      <span className="font-medium">3-5 jours ouvrables</span>
                    </li>
                    <li className="flex justify-between border-b border-amber-100 pb-2">
                      <span className="text-gray-600">Frais de livraison</span>
                      <span className="font-medium">5 000 FCFA</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Politique de retour</span>
                      <span className="font-medium">Retours acceptés sous 14 jours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-8 px-6 lg:p-8 mt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Avis clients (12)</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-amber-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">4.2/5 (12 avis)</span>
                    </div>
                  </div>
                  <Button className="bg-amber-700 hover:bg-amber-800 shadow-sm">
                    Laisser un avis
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Avis client 1 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold mr-3">MS</div>
                        <div>
                          <h4 className="font-medium">Mamadou S.</h4>
                          <div className="flex text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Il y a 2 semaines</span>
                    </div>
                    <p className="text-gray-700 mt-3">
                      Excellent produit ! La qualité du tissu est remarquable et les finitions sont parfaites. Je le
                      recommande vivement.
                    </p>
                  </div>

                  {/* Avis client 2 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold mr-3">AD</div>
                        <div>
                          <h4 className="font-medium">Aminata D.</h4>
                          <div className="flex text-amber-500">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Il y a 1 mois</span>
                    </div>
                    <p className="text-gray-700 mt-3">
                      Très beau boubou, les couleurs sont fidèles aux photos. Seul bémol, la livraison a pris un peu
                      plus de temps que prévu.
                    </p>
                  </div>

                  {/* Voir plus d'avis */}
                  <div className="text-center pt-4">
                    <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 px-6">
                      Voir plus d'avis
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Produits similaires */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vous pourriez aussi aimer</h2>
            <SimilarProducts products={similarProducts} />
          </div>
        )}
      </main>
    </div>
  )
}