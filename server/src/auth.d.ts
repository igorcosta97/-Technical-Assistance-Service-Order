import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { id: number } // payload type is used for signing and verifying
    user: {
      name: string
      sub: string
    }
  }
}
