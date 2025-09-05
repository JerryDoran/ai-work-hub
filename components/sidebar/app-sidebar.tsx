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
import SidebarUserButton from '@/features/users/components/sidebar-user-button';
import { SignedIn } from '@/services/clerk/components/sign-in-status';

export default function AppSidebar({ content }: { content: React.ReactNode }) {
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
                <SidebarMenuItem>
                  <SidebarUserButton />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className='flex-1'>kjdfklsdjfkladsjklfjsd</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
