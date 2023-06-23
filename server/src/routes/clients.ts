import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function clientRoutes(app: FastifyInstance) {
  // Listar todos os clientes
  app.get('/client', async () => {
    const response = await prisma.client.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return response
  })

  // Listar um único cliente
  app.get('/client/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const response = await prisma.client.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return response
  })

  // Criar Cliente
  app.post('/client', async (request) => {
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

    const response = await prisma.client.create({
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

  // Editar Cliente
  app.put('/client/:id', async (request) => {
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
}
