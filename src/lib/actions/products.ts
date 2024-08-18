'use server'

import { desc } from 'drizzle-orm'

import db from '@/db/drizzle'
import { products } from '@/db/schema'

export async function getLatestProducts() {
  const data = await db
    .select()
    .from(products)
    .orderBy(desc(products.createdAt))
    .limit(4)
    .execute()

  return data
}
