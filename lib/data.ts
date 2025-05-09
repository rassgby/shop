// Types pour les données
export interface Product {
  isNew: any
  rating: number
  reviewCount: number
  oldPrice: any
  inStock: boolean
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  sizes?: string[]
  colors?: { name: string; value: string }[]
  stock: number
  featured?: boolean
  images?: string[]
  createdAt: Date
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: { productId: string; quantity: number; price: number; name: string }[]
  createdAt: Date
  shippingAddress: {
    address: string
    city: string
    region: string
    postalCode?: string
  }
  paymentMethod: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  ordersCount: number
  totalSpent: number
  createdAt: Date
}

// Données simulées pour les produits
export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Boubou Traditionnel Homme",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
    description:
      "Ce boubou traditionnel pour homme est confectionné à partir de coton de haute qualité. Parfait pour les cérémonies et événements spéciaux, il allie confort et élégance. Les broderies fines et détaillées mettent en valeur l'artisanat africain.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blanc", value: "#FFFFFF" },
      { name: "Bleu", value: "#1E40AF" },
      { name: "Or", value: "#B7791F" },
    ],
    stock: 15,
    featured: true,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    name: "Boubou Brodé Femme",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
    description:
      "Ce magnifique boubou brodé pour femme est réalisé avec un tissu bazin riche. Les broderies élaborées et les perles cousues à la main en font une pièce unique. Idéal pour les mariages et grandes occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Rose", value: "#F472B6" },
      { name: "Violet", value: "#7C3AED" },
      { name: "Doré", value: "#D97706" },
    ],
    stock: 10,
    featured: true,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-02-20"),
  },
  {
    id: "3",
    name: "Ensemble Grand Boubou",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
    description:
      "Cet ensemble grand boubou comprend une tunique ample, un pantalon assorti et un chapeau traditionnel. Confectionné en basin riche avec des broderies sophistiquées, il est parfait pour les grandes cérémonies.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Blanc", value: "#FFFFFF" },
      { name: "Bleu royal", value: "#1E3A8A" },
      { name: "Bordeaux", value: "#9F1239" },
    ],
    stock: 8,
    featured: true,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-03-10"),
  },
  {
    id: "4",
    name: "Boubou Bazin Riche",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
    description:
      "Ce boubou en bazin riche est le summum de l'élégance africaine. Le tissu de haute qualité est teint et damassé selon des techniques traditionnelles. Les broderies dorées ajoutent une touche de luxe à cette tenue d'exception.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Turquoise", value: "#0D9488" },
      { name: "Jaune or", value: "#FBBF24" },
      { name: "Vert émeraude", value: "#047857" },
    ],
    stock: 5,
    featured: true,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-04-05"),
  },
  {
    id: "5",
    name: "Boubou Sénégalais",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
    description:
      "Le boubou sénégalais traditionnel est reconnu pour son élégance simple et raffinée. Cette pièce est confectionnée en coton de qualité avec des broderies subtiles au col et aux manches. Parfait pour les cérémonies comme pour un usage quotidien élégant.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blanc cassé", value: "#F5F5DC" },
      { name: "Bleu ciel", value: "#0EA5E9" },
      { name: "Beige", value: "#D4A76A" },
    ],
    stock: 12,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-05-12"),
  },
  {
    id: "6",
    name: "Boubou Mariage",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
    description:
      "Ce boubou de mariage est une création exceptionnelle destinée aux grandes occasions. Confectionné en basin super riche avec des broderies complexes et des applications de perles et sequins, il fera sensation lors des cérémonies les plus prestigieuses.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanc", value: "#FFFFFF" },
      { name: "Crème", value: "#FAEBD7" },
      { name: "Or", value: "#FFD700" },
    ],
    stock: 7,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-06-18"),
  },
  {
    id: "7",
    name: "Boubou Moderne",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
    description:
      "Ce boubou moderne combine tradition et design contemporain. Avec sa coupe légèrement ajustée et ses motifs géométriques, il plaira aux hommes qui souhaitent affirmer leur style tout en respectant les codes vestimentaires traditionnels.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Gris anthracite", value: "#374151" },
      { name: "Bleu marine", value: "#1E3A8A" },
      { name: "Noir", value: "#000000" },
    ],
    stock: 20,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-07-22"),
  },
  {
    id: "8",
    name: "Boubou Cérémonie",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
    description:
      "Ce boubou de cérémonie pour femme est une pièce majestueuse qui ne passera pas inaperçue. Le tissu damassé de haute qualité est rehaussé de broderies sophistiquées et d'applications de dentelle. Parfait pour les grandes occasions et célébrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Corail", value: "#F87171" },
      { name: "Vert olive", value: "#65A30D" },
      { name: "Mauve", value: "#A78BFA" },
    ],
    stock: 9,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    createdAt: new Date("2023-08-30"),
  },
]

// Données simulées pour les commandes
export const ORDERS: Order[] = [
  {
    id: "ORD-001",
    customerName: "Amadou Diallo",
    customerEmail: "amadou.diallo@example.com",
    status: "delivered",
    total: 75000,
    items: [
      { productId: "1", quantity: 1, price: 25000, name: "Boubou Traditionnel Homme" },
      { productId: "3", quantity: 1, price: 45000, name: "Ensemble Grand Boubou" },
    ],
    createdAt: new Date("2023-09-15"),
    shippingAddress: {
      address: "123 Rue Principale",
      city: "Dakar",
      region: "Dakar",
      postalCode: "10000",
    },
    paymentMethod: "Carte bancaire",
  },
  {
    id: "ORD-002",
    customerName: "Fatou Ndiaye",
    customerEmail: "fatou.ndiaye@example.com",
    status: "shipped",
    total: 30000,
    items: [{ productId: "2", quantity: 1, price: 30000, name: "Boubou Brodé Femme" }],
    createdAt: new Date("2023-09-18"),
    shippingAddress: {
      address: "45 Avenue de la République",
      city: "Abidjan",
      region: "Lagunes",
    },
    paymentMethod: "Mobile Money",
  },
  {
    id: "ORD-003",
    customerName: "Ibrahim Touré",
    customerEmail: "ibrahim.toure@example.com",
    status: "processing",
    total: 50000,
    items: [{ productId: "4", quantity: 1, price: 50000, name: "Boubou Bazin Riche" }],
    createdAt: new Date("2023-09-20"),
    shippingAddress: {
      address: "78 Rue des Artisans",
      city: "Bamako",
      region: "Bamako",
    },
    paymentMethod: "Paiement à la livraison",
  },
  {
    id: "ORD-004",
    customerName: "Aïcha Bah",
    customerEmail: "aicha.bah@example.com",
    status: "pending",
    total: 60000,
    items: [{ productId: "6", quantity: 1, price: 60000, name: "Boubou Mariage" }],
    createdAt: new Date("2023-09-22"),
    shippingAddress: {
      address: "15 Boulevard Central",
      city: "Conakry",
      region: "Conakry",
    },
    paymentMethod: "Carte bancaire",
  },
  {
    id: "ORD-005",
    customerName: "Moussa Sow",
    customerEmail: "moussa.sow@example.com",
    status: "delivered",
    total: 35000,
    items: [{ productId: "5", quantity: 1, price: 35000, name: "Boubou Sénégalais" }],
    createdAt: new Date("2023-09-10"),
    shippingAddress: {
      address: "32 Avenue de l'Indépendance",
      city: "Saint-Louis",
      region: "Saint-Louis",
      postalCode: "30000",
    },
    paymentMethod: "Mobile Money",
  },
  {
    id: "ORD-006",
    customerName: "Mariama Camara",
    customerEmail: "mariama.camara@example.com",
    status: "cancelled",
    total: 40000,
    items: [{ productId: "8", quantity: 1, price: 40000, name: "Boubou Cérémonie" }],
    createdAt: new Date("2023-09-05"),
    shippingAddress: {
      address: "56 Rue des Fleurs",
      city: "Ouagadougou",
      region: "Centre",
    },
    paymentMethod: "Carte bancaire",
  },
]

// Données simulées pour les clients
export const CUSTOMERS: Customer[] = [
  {
    id: "CUST-001",
    name: "Amadou Diallo",
    email: "amadou.diallo@example.com",
    phone: "+221 77 123 45 67",
    ordersCount: 3,
    totalSpent: 120000,
    createdAt: new Date("2023-01-10"),
  },
  {
    id: "CUST-002",
    name: "Fatou Ndiaye",
    email: "fatou.ndiaye@example.com",
    phone: "+225 07 234 56 78",
    ordersCount: 1,
    totalSpent: 30000,
    createdAt: new Date("2023-02-15"),
  },
  {
    id: "CUST-003",
    name: "Ibrahim Touré",
    email: "ibrahim.toure@example.com",
    phone: "+223 65 345 67 89",
    ordersCount: 2,
    totalSpent: 85000,
    createdAt: new Date("2023-03-20"),
  },
  {
    id: "CUST-004",
    name: "Aïcha Bah",
    email: "aicha.bah@example.com",
    phone: "+224 62 456 78 90",
    ordersCount: 1,
    totalSpent: 60000,
    createdAt: new Date("2023-04-25"),
  },
  {
    id: "CUST-005",
    name: "Moussa Sow",
    email: "moussa.sow@example.com",
    phone: "+221 76 567 89 01",
    ordersCount: 2,
    totalSpent: 63000,
    createdAt: new Date("2023-05-30"),
  },
  {
    id: "CUST-006",
    name: "Mariama Camara",
    email: "mariama.camara@example.com",
    phone: "+226 70 678 90 12",
    ordersCount: 1,
    totalSpent: 40000,
    createdAt: new Date("2023-06-05"),
  },
]

// Statistiques pour le tableau de bord
export const DASHBOARD_STATS = {
  totalSales: 398000,
  totalOrders: 10,
  totalCustomers: 6,
  averageOrderValue: 39800,
  recentSales: [
    { date: "Aujourd'hui", amount: 75000 },
    { date: "Hier", amount: 30000 },
    { date: "Il y a 2 jours", amount: 50000 },
    { date: "Il y a 3 jours", amount: 60000 },
    { date: "Il y a 4 jours", amount: 35000 },
    { date: "Il y a 5 jours", amount: 40000 },
  ],
  topProducts: [
    { id: "3", name: "Ensemble Grand Boubou", sales: 3, revenue: 135000 },
    { id: "6", name: "Boubou Mariage", sales: 2, revenue: 120000 },
    { id: "4", name: "Boubou Bazin Riche", sales: 2, revenue: 100000 },
    { id: "2", name: "Boubou Brodé Femme", sales: 3, revenue: 90000 },
    { id: "1", name: "Boubou Traditionnel Homme", sales: 3, revenue: 75000 },
  ],
}

// Fonction pour obtenir un produit par ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id)
}

// Fonction pour obtenir des produits similaires
export function getSimilarProducts(productId: string, category: string, limit = 4): Product[] {
  return PRODUCTS.filter((product) => product.id !== productId && product.category === category).slice(0, limit)
}

// Fonction pour obtenir les produits en vedette
export function getFeaturedProducts(limit = 4): Product[] {
  return PRODUCTS.filter((product) => product.featured).slice(0, limit)
}

// Fonction pour obtenir les produits par catégorie
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((product) => product.category === category)
}

// Fonction pour obtenir une commande par ID
export function getOrderById(id: string): Order | undefined {
  return ORDERS.find((order) => order.id === id)
}

// Fonction pour obtenir un client par ID
export function getCustomerById(id: string): Customer | undefined {
  return CUSTOMERS.find((customer) => customer.id === id)
}

// Fonction pour obtenir les commandes récentes
export function getRecentOrders(limit = 5): Order[] {
  return [...ORDERS].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit)
}

// Fonction pour obtenir les clients récents
export function getRecentCustomers(limit = 5): Customer[] {
  return [...CUSTOMERS].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, limit)
}
