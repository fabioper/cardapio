import { APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import process from 'process'
import { unmarshall } from '@aws-sdk/util-dynamodb'

const db = new DynamoDBClient()

const PRODUCTS_TABLE_NAME = process.env.PRODUCTS_TABLE_NAME

export const handler = async (): Promise<APIGatewayProxyResult> => {
  const scanCommand = new ScanCommand({ TableName: PRODUCTS_TABLE_NAME })

  const products = await db.send(scanCommand)

  return {
    statusCode: 200,
    body: JSON.stringify(products.Items?.map(item => unmarshall(item))),
  }
}
