import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as process from 'process'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'
import { z } from 'zod'

const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.object({ url: z.string(), alt: z.string().optional() }),
  combo: z.boolean().optional(),
})

type UpdateProductDto = z.infer<typeof productSchema> & { id: string }

const PRODUCTS_TABLE_NAME = process.env.PRODUCTS_TABLE_NAME

const db = new DynamoDBClient({})

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const productId = event.pathParameters?.['productId']

  if (!productId) {
    return { statusCode: 400, body: 'No Product ID provided' }
  }

  const newProduct = productSchema.safeParse(JSON.parse(event.body || ''))

  if (newProduct.error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        errors: newProduct.error.issues.reduce(
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

  const product: UpdateProductDto = { id: productId, ...newProduct.data }

  const command = new PutItemCommand({
    TableName: PRODUCTS_TABLE_NAME,
    Item: marshall(product),
  })

  await db.send(command)
  return { statusCode: 200, body: JSON.stringify(product) }
}
