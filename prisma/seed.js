import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Création de 3 catégories si aucune existe
  const categoriesCount = await prisma.category.count();
  if (categoriesCount === 0) {
    const categoriesData = ["Smartphones", "Laptops", "Accessories"].map(
      (name) => ({
        name,
        slug: name.toLowerCase(),
        featured: false,
        createdAt: new Date(),
      })
    );
    await prisma.category.createMany({ data: categoriesData });
    console.log("✅ Catégories créées.");
  }

  // Récupérer la première catégorie pour l'utiliser
  const category = await prisma.category.findFirst();

  // Créer 10 produits liés à cette catégorie
  for (let i = 0; i < 10; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        discountedPrice:
          Math.random() > 0.5 ? parseFloat(faker.commerce.price()) : null,
        categoryId: category.id,
        subcategoryId: null,
        brand: faker.company.name(),
        images: [faker.image.url()],
        stock: faker.number.int({ min: 0, max: 200 }),
        sku: faker.string.alphanumeric(10).toUpperCase(),
        wishedByIds: [],
        ratings: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
        reviews: faker.number.int({ min: 0, max: 1000 }),
        featured: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        updatedAt: new Date(),
      },
    });
  }

  console.log("✅ 10 produits fictifs créés avec succès.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
