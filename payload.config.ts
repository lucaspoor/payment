import { postgresAdapter } from '@payloadcms/db-postgres'
import { Categories } from 'collections/Categories'
import { Media } from 'collections/Media'
import { Products } from 'collections/Products'
import { buildConfig } from 'payload'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'supersecret',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

   collections: [
    Products,
    Categories,
    Media,
  ],
})