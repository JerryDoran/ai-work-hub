import AppSidebar from '@/components/sidebar/app-sidebar';
import SidebarUserButton from '@/features/users/components/sidebar-user-button';
import SidebarNavMenuGroup from '@/components/sidebar/sidebar-nav-menu-group';
import {
  BrainCircuit,
  ClipboardList,
  LayoutDashboard,
  LogIn,
} from 'lucide-react';

export default function JobSeekerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppSidebar
      content={
        <SidebarNavMenuGroup
          className='mt-auto'
          items={[
            {
              href: '/',
              icon: <ClipboardList />,
              label: 'Job Board',
            },
            {
              href: '/ai-search',
              icon: <BrainCircuit />,
              label: 'AI Job Search',
            },
            {
              href: '/employer',
              icon: <LayoutDashboard />,
              label: 'Employer Dashboard',
              authStatus: 'signedIn',
            },
            {
              href: '/sign-in',
              icon: <LogIn />,
              label: 'Sign In',
              authStatus: 'signedOut',
            },
          ]}
        />
      }
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  );
}
