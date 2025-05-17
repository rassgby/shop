import prisma from '../../lib/prisma'

export default async function handler(req: any, res: { json: (arg0: ({ category: { name: string; id: string; description: string | null; featured: boolean; createdAt: Date; slug: string; image: string | null } } & { name: string; id: string; description: string; price: number; discountedPrice: number | null; categoryId: string; subcategoryId: string | null; brand: string | null; images: string[]; stock: number; sku: string; wishedByIds: string[]; ratings: number | null; reviews: number | null; featured: boolean; createdAt: Date; updatedAt: Date })[]) => void }) {
  const products = await prisma.product.findMany({
    include: { category: true }
  })
  res.json(products)
}