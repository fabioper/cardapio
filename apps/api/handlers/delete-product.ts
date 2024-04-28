import { DeleteItemCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb'
import process from 'process'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { marshall } from '@aws-sdk/util-dynamodb'

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

  const command = new DeleteItemCommand({
    TableName: PRODUCTS_TABLE_NAME,
    Key: marshall({ id }),
  })

  await db.send(command)

  return { statusCode: 204, body: '' }
}
