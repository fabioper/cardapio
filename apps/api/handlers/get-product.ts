import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'
import process from 'process'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb'

const db = new DynamoDBClient()

const PRODUCTS_TABLE_NAME = process.env.PRODUCTS_TABLE_NAME

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.['productId']

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'No Product ID provided' }),
    }
  }

  const command = new GetItemCommand({
    TableName: PRODUCTS_TABLE_NAME,
    Key: marshall({ id }),
  })

  const product = await db.send(command)

  if (!product.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Product not found' }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(unmarshall(product.Item)),
  }
}
