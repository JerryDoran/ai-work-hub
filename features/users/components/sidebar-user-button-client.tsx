'use client';

import { Avatar } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronsUpDown } from 'lucide-react';

type User = {
  name: string;
  imageUrl?: string;
  email: string;
};

export default function SidebarUserButtonClient({ user }: { user: User }) {
  const { isMobile } = useIsMobile();

  return (
    <SidebarMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size='lg'
            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
          >
            <UserInfo {...user} />
            <ChevronsUpDown className='ml-auto size-4' />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>Hey</DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenu>
  );
}

function UserInfo(user: User) {
  return (
    <div className=''>
      <Avatar className='size-8' />
    </div>
  );
}
