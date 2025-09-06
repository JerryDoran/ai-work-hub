import { getGlobalTag, getIdTag } from '@/lib/data-cache';
import { revalidateTag } from 'next/cache';

export function getOrganizationGlobalTag() {
  return getGlobalTag('organizations');
}

export function getOrganizationIdTag(id: string) {
  return getIdTag('organizations', id);
}

// This will get called everytime a organization is created, updated or deleted
export function revalidateOrganizationCache(id: string) {
  revalidateTag(getOrganizationGlobalTag());
  revalidateTag(getOrganizationIdTag(id));
}
