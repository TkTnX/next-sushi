import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/Prisma/prisma-client";
import { compare } from "bcrypt";
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const findUser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!findUser) {
          throw new Error("Пользователь не найден");
        }

        const isPasswordCorrect = await compare(
          credentials.password,
          findUser.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Неверный пароль или почта");
        }

        return {
          id: findUser.id,
          name: findUser.fullName,
          email: findUser.email,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token }) {
      if (!token) {
        return null;
      }

      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email!,
        },
      });

      if (!findUser) {
        throw new Error("Пользователь не найден");
      } else {
        token.id = findUser.id;
        token.email = findUser.email;
        token.role = findUser.role;
        token.fullName = findUser.fullName;
      }

      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session
    }
  },
});

export { handler as GET, handler as POST };
