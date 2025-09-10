import { Suspense } from 'react';
import AppSidebar from '@/components/sidebar/app-sidebar';
import SidebarNavMenuGroup from '@/components/sidebar/sidebar-nav-menu-group';
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import SidebarOrganizationButton from '@/features/organizations/components/sidebar-organization-button';
import { ClipboardList, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { getCurrentOrganization } from '@/services/clerk/lib/get-current-auth';
import { redirect } from 'next/navigation';

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <LayoutSuspense>{children}</LayoutSuspense>
    </Suspense>
  );
}

async function LayoutSuspense({ children }: { children: React.ReactNode }) {
  const { orgId } = await getCurrentOrganization();

  if (orgId == null) return redirect('/organizations/select');
  return (
    <AppSidebar
      content={
        <>
          <SidebarGroup>
            <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
            <SidebarGroupAction asChild title='Add Job Listing'>
              <Link href='/employer/job-listings/new'>
                <PlusIcon />
                <span className='sr-only'>Add Job Listing</span>
              </Link>
            </SidebarGroupAction>
          </SidebarGroup>
          <SidebarNavMenuGroup
            className='mt-auto'
            items={[
              {
                href: '/',
                icon: <ClipboardList />,
                label: 'Job Board',
              },
            ]}
          />
        </>
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  );
}
