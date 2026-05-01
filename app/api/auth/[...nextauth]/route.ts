import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string,
      httpOptions: {
        timeout: 10000, // Aumenta o timeout para 10 segundos
      }
    }),
  ],
})

export { handler as GET, handler as POST }
