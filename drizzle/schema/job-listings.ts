import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  varchar,
} from 'drizzle-orm/pg-core';
import { createdAt, id, updatedAt } from '../schema-helpers';
import { OrganizationTable } from './organizations';

// Wage intervals enum
export const wageIntervals = ['hourly', 'yearly'] as const;
export type WageInterval = (typeof wageIntervals)[number];
export const wageIntervalEnum = pgEnum(
  'job_listings_wage_interval',
  wageIntervals
);

// Location requirements enum
export const locationRequirements = ['in-office', 'hybrid', 'remote'] as const;
export type LocationRequirement = (typeof locationRequirements)[number];
export const locationRequirementEnum = pgEnum(
  'job_listings_location_requirement',
  locationRequirements
);

// Experience level enum
export const experienceLevels = ['junior', 'mid-level', 'senior'] as const;
export type ExperienceLevel = (typeof experienceLevels)[number];
export const experienceLevelEnum = pgEnum(
  'job_listings_experience_level',
  experienceLevels
);

// Status enum
export const jobListingStatuses = ['draft', 'published', 'delisted'] as const;
export type JobListingStatus = (typeof jobListingStatuses)[number];
export const jobListingStatusEnum = pgEnum(
  'job_listings_status',
  jobListingStatuses
);

// Job listing type enum
export const jobListingTypes = [
  'internship',
  'part-time',
  'full-time',
] as const;
export type JobListingType = (typeof jobListingTypes)[number];
export const jobListingTypeEnum = pgEnum('job_listings_type', jobListingTypes);

export const JobListingTable = pgTable('job_listings', {
  id: id,
  organizationId: varchar()
    .references(() => OrganizationTable.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar().notNull(),
  description: text().notNull(),
  wage: integer(),
  wageInterval: wageIntervalEnum(),
  stateAbbreviation: varchar(),
  city: varchar(),
  isFeatured: boolean().notNull().default(false),
  locationRequirement: locationRequirementEnum().notNull(),
  experienceLevel: experienceLevelEnum().notNull(),
  status: jobListingStatusEnum().notNull().default('draft'),
  type: jobListingTypeEnum().notNull(),
  createdAt,
  updatedAt,
});
