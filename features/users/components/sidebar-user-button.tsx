import { Suspense } from 'react';
import SidebarUserButtonClient from './sidebar-user-button-client';
import { getCurrentUser } from '@/services/clerk/lib/get-current-auth';
import { SignOutButton } from '@/services/clerk/components/auth-buttons';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { LogOutIcon } from 'lucide-react';

export default function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
}

async function SidebarUserSuspense() {
  const { user } = await getCurrentUser({ allData: true });

  if (user == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon className='size-4' />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    );
  }

  return <SidebarUserButtonClient user={user} />;
}
