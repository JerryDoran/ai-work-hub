import AppSidebarClient from '@/components/app-sidebar-client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { SignedOut } from '@/services/clerk/components/sign-in-status';
import { Link, LogIn } from 'lucide-react';

export default function Home() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row items-center'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>AI Work Hub</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className='cursor-pointer'>
                      <Link href='/sign-in'>
                        <LogIn className='mr-2 size-4' />
                        <span className=''>Login</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton></SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>kjdfklsdjfkladsjklfjsd</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
