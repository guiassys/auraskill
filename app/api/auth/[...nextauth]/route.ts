import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string,
      httpOptions: {
        timeout: 10000,
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // Persiste o id_token e o provedor no token da sessão
        token.id_token = account.id_token;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      // Envia o id_token para o cliente
      if (session) {
        session.id_token = token.id_token as string;
        session.provider = token.provider as string;
      }
      return session;
    },
  },
})

export { handler as GET, handler as POST }
