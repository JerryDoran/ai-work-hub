import AppSidebarClient from '@/components/app-sidebar-client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row items-center'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>AI Work Hub</span>
          </SidebarHeader>
          <SidebarContent>sidebar content</SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className='cursor-pointer'>
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>kjdfklsdjfkladsjklfjsd</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
