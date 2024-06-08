import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { z } from 'zod'
import { v4 as uuid } from 'uuid'
import process from 'process'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'

export enum PaymentMethod {
  Pix = 'pix',
  Card = 'card',
  Cash = 'cash',
}

const addOrderSchema = z.object({
  customer: z.object({
    name: z.string(),
    phone: z.string(),
  }),
  payment: z.object({
    method: z.nativeEnum(PaymentMethod),
  }),
  items: z.array(
    z.object({
      quantity: z.number(),
      productId: z.string(),
      complement: z.string().optional(),
    }),
  ),
})

type AddOrderDto = z.infer<typeof addOrderSchema> & {
  id: string
  createdAt: string
}

const ORDERS_TABLE_NAME = process.env.ORDERS_TABLE_NAME

const db = new DynamoDBClient({})

export async function handler(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  const newOrder = addOrderSchema.safeParse(JSON.parse(event.body || ''))

  if (newOrder.error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        errors: newOrder.error.issues.reduce(
          (errors, zodError) => {
            const [errorProperty] = zodError.path
            errors[errorProperty] = zodError.message
            return errors
          },
          {} as Record<string, string>,
        ),
      }),
    }
  }

  const order: AddOrderDto = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    ...newOrder.data,
  }

  await db.send(
    new PutItemCommand({
      TableName: ORDERS_TABLE_NAME,
      Item: marshall(order),
    }),
  )

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
    body: JSON.stringify(order),
  }
}
