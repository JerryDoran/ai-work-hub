import { Suspense } from 'react';
import {
  getCurrentOrganization,
  getCurrentUser,
} from '@/services/clerk/lib/get-current-auth';
import { SignOutButton } from '@/services/clerk/components/auth-buttons';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { LogOutIcon } from 'lucide-react';
import SidebarOrganizationButtonClient from './sidebar-organization-button-client';

export default function SidebarOrganizationButton() {
  return (
    <Suspense>
      <SidebarOrganizationSuspense />
    </Suspense>
  );
}

async function SidebarOrganizationSuspense() {
  const [{ user }, { organization }] = await Promise.all([
    getCurrentUser({ allData: true }),
    getCurrentOrganization({ allData: true }),
  ]);

  if (user == null || organization == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon className='size-4' />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    );
  }

  return (
    <SidebarOrganizationButtonClient user={user} organization={organization} />
  );
}
