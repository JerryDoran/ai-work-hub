import AppSidebarClient from '@/components/sidebar/app-sidebar-client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { SignedIn } from '@/services/clerk/components/sign-in-status';

type AppSidebarProps = {
  content: React.ReactNode;
  footerButton: React.ReactNode;
  children: React.ReactNode;
};

export default function AppSidebar({
  content,
  footerButton,
  children,
}: AppSidebarProps) {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row items-center'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>AI Work Hub</span>
          </SidebarHeader>
          <SidebarContent>{content}</SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>{footerButton}</SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className='flex-1'>{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
