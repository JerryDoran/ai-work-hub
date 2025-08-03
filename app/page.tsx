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
import SidebarUserButton from '@/features/users/components/sidebar-user-button';
import {
  SignedIn,
  SignedOut,
} from '@/services/clerk/components/sign-in-status';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

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
