import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { createdAt, updatedAt } from '../schema-helpers';

export const OrganizationTable = pgTable('organizations', {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
});
