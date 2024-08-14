import {
  categories,
  exceptions,
  ingredients,
  products,
  types,
} from "./constants";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.category.createMany({
    data: categories,
  });

  await prisma.type.createMany({
    data: types,
  });

  await prisma.exception.createMany({
    data: exceptions,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  for (const product of products) {
    await prisma.product.create({
      data: {
        ...product,
        exceptions: {
          create: {
            exception: {
              connect: {id: Math.floor(Math.random() * 3) + 1}
            }
          },
        },
      },
    });
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Exception" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
