import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  varchar,
} from 'drizzle-orm/pg-core';
import { OrganizationTable } from './organizations';
import { UserTable } from './user';
import { createdAt, updatedAt } from '../schema-helpers';

export const OrganizationUserSettingsTable = pgTable(
  'organization_user_settings',
  {
    userId: varchar()
      .references(() => UserTable.id)
      .notNull(),
    organizationId: varchar()
      .notNull()
      .references(() => OrganizationTable.id),
    newApplicationEmailNotifications: boolean().notNull().default(false),
    minimumRating: integer(),
    createdAt,
    updatedAt,
  },
  (table) => [primaryKey({ columns: [table.userId, table.organizationId] })]
);
