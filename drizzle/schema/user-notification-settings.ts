import { boolean, pgTable, varchar } from 'drizzle-orm/pg-core';
import { UserTable } from './user';
import { createdAt, updatedAt } from '../schema-helpers';

export const UserNotificationSettingsTable = pgTable(
  'user_notification_settings',
  {
    userId: varchar()
      .primaryKey()
      .references(() => UserTable.id),

    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
  }
);
