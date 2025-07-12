import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { createdAt, updatedAt } from '../schema-helpers';

export const UserTable = pgTable('users', {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});
