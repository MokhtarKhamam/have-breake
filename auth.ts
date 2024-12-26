import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/db";
import jwt from "jsonwebtoken";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
    } & DefaultSession["user"];
  }

}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (typeof token.token === 'string') {
        session.user.token = token.token;
      }
      return session;
    },

    async jwt({ token, user }) {
      const jwtToken = jwt.sign({ id: user?.id }, "shhhhh");
      token.token = jwtToken;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
