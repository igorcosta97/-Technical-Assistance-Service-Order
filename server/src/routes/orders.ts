import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function orderRoutes(app: FastifyInstance) {
  // Todas as ordens
  app.get('/order', async () => {
    const response = await prisma.order.findMany({
      orderBy: {
        ordemNumber: 'desc',
      },
    })
    return response
  })

  // Ordem única

  app.get('/order/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
    const { id } = paramsSchema.parse(request.params)
    const response = await prisma.order.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return response
  })

  // Criar Cliente
  app.post('/order', async (request) => {
    const bodySchema = z.object({
      description: z.string(),
      status: z.string(),
      clientId: z.string().uuid(),
    })

    const { description, status, clientId } = bodySchema.parse(request.body)

    const response = await prisma.order.create({
      data: {
        ordemNumber: 2,
        description,
        status,
        clientId,
      },
    })
    return response
  })

  // Editar Cliente
  /* app.put('/order/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      address: z.string(),
      district: z.string(),
      city: z.string(),
      phoneNumber: z.string(),
      cellNumber: z.string(),
    })

    const { name, email, address, district, city, phoneNumber, cellNumber } =
      bodySchema.parse(request.body)

    const response = await prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        address,
        district,
        city,
        phoneNumber,
        cellNumber,
      },
    })
    return response
  })

  // Deletar Cliente
  app.delete('/client/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const response = await prisma.client.delete({
      where: {
        id,
      },
    })
    return response
  }) 
  */
}
