import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import * as schema from './schema'
import { data } from '@/data/sample'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
    })
    await client.connect()
    const db = drizzle(client)

    await db.delete(schema.products)

    const resProducts = await db
      .insert(schema.products)
      .values(data.products)
      .returning()
    console.log({ resProducts })
    await client.end()
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
