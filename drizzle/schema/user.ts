import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { createdAt, updatedAt } from '../schema-helpers';
import { relations } from 'drizzle-orm';
import { UserNotificationSettingsTable } from './user-notification-settings';
import { UserResumeTable } from './user-resume';
import { OrganizationUserSettingsTable } from './org-user-settings';

export const UserTable = pgTable('users', {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});

export const userRelations = relations(UserTable, ({ one, many }) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable),
}));
