import fastify from 'fastify'
import cors from '@fastify/cors'
import { clientRoutes } from './routes/clients'

const app = fastify()

app.register(clientRoutes)
app.register(cors, {
  origin: true,
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Servidor rodando na porta 3333')
  })
