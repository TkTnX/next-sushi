import {
  categories,
  exceptions,
  ingredients,
  products,
  promocodes,
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
              connect: { id: Math.floor(Math.random() * 3) + 1 },
            },
          },
        },
        ingredients: {
          connect: Array.from(
            { length: Math.floor(Math.random() * 8) + 1 },
            () => ({ id: Math.floor(Math.random() * 8) + 1 })
          ),
        },
      },
    });
  }

  await prisma.user.create({
    data: {
      fullName: "timurAdmin",
      email: "admin",
      password: "admin",
      role: "ADMIN",
      verificated: new Date(),
    },
  });

  await prisma.cart.create({
    data: {
      userId: 1,
      totalPrice: 0,
      token: "admin",
    }
  })

  await prisma.cartItem.createMany({
    data: [
      {
        cartId: 1,
        productId: 1,
        quantity: 1,
      },
      {
        cartId: 1,
        productId: 2,
        quantity: 3,
      },
    ]
  })

  await prisma.promocode.createMany({
    data: promocodes,
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Exception" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Promocode" RESTART IDENTITY CASCADE`;

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
