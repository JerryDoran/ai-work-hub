import { getGlobalTag, getIdTag } from '@/lib/data-cache';
import { revalidateTag } from 'next/cache';

export function getUserNotificationSettingsGlobalTag() {
  return getGlobalTag('userNotificationSettings');
}

export function getUserNotificationSettingsIdTag(userId: string) {
  return getIdTag('userNotificationSettings', userId);
}

// This will get called everytime a user is created, updated or deleted
export function revalidateUserNotificationSettingsCache(userId: string) {
  revalidateTag(getUserNotificationSettingsGlobalTag());
  revalidateTag(getUserNotificationSettingsIdTag(userId));
}
