import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // On récupère une catégorie existante
  const category = await prisma.category.findFirst()
  if (!category) {
    throw new Error("❌ Aucune catégorie trouvée. Créez-en une avant d'ajouter des produits.")
  }

  for (let i = 0; i < 10; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        discountedPrice: Math.random() > 0.5 ? parseFloat(faker.commerce.price()) : null,
        categoryId: category.id,
        subcategoryId: null, // Ou à remplacer si tu veux tester
        brand: faker.company.name(),
        images: [faker.image.url()],
        stock: faker.number.int({ min: 0, max: 200 }),
        sku: faker.string.alphanumeric(10).toUpperCase(),
        wishedByIds: [],
        reviews: faker.number.int({ min: 0, max: 1000 }),
        featured: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        updatedAt: new Date()
      },
    })
  }

  console.log('✅ 10 produits fictifs créés avec succès.')
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
