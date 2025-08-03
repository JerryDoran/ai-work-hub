import { auth } from '@clerk/nextjs/server';
import { Suspense } from 'react';
import SidebarUserButtonClient from './sidebar-user-button-client';

export default function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
}

async function SidebarUserSuspense() {
  const { userId } = auth();

  return (
    <SidebarUserButtonClient
      user={{ email: 'mario@test.com', name: 'Mario Kart', imageUrl: '' }}
    />
  );
}
