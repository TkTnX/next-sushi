import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/Prisma/prisma-client";
import { compare, hashSync } from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: "USER",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
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
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }

        if (!user.email) {
          return false;
        }

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email: user.email },
              {
                provider: account?.provider,
                providerId: account?.providerAccountId,
              },
            ],
          },
        });

        if (findUser) {
          await prisma.user.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });

          return true;
        }

        await prisma.user.create({
          data: {
            email: user.email,
            fullName: user.name || "User #" + user.id,
            password: hashSync(Math.random().toString(36).slice(-8), 10),
            verificated: new Date(),
            provider: account?.provider,
            providerId: account?.providerAccountId,
            role: "USER",
          },
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token }) {
      if (!token) {
        throw new Error("Токен не найден");
      }

      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email!,
        },
      });

      if (!findUser) {
        throw new Error("Пользователь не найден");
      } else {
        token.id = String(findUser.id);
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

      return session;
    },
  },
};
