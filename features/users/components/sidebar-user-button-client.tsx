'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { SignOutButton } from '@/services/clerk/components/auth-buttons';
import { useClerk } from '@clerk/nextjs';
import { ChevronsUpDown, LogOutIcon, Settings, UserIcon } from 'lucide-react';
import Link from 'next/link';

type User = {
  name: string;
  imageUrl?: string;
  email: string;
};

export default function SidebarUserButtonClient({ user }: { user: User }) {
  const { isMobile, setOpenMobile } = useSidebar();
  const { openUserProfile } = useClerk();

  return (
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
      <DropdownMenuContent
        sideOffset={4}
        align='end'
        side={isMobile ? 'bottom' : 'right'}
        className='min-w-64 max-w-80'
      >
        <DropdownMenuLabel className='font-normal p-1'>
          <UserInfo {...user} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            openUserProfile();
            setOpenMobile(false);
          }}
        >
          <UserIcon className='size-4' /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/user-settings/notifications'>
            <Settings className='size-4' /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem>
            <LogOutIcon className='size-4 text-red-600' />{' '}
            <span className='text-red-600'>Sign Out</span>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function UserInfo({ imageUrl, email, name }: User) {
  const nameInitials = name
    .split(' ')
    .splice(0, 2)
    .map((str) => str[0])
    .join('');
  return (
    <div className='flex items-center gap-2 overflow-hidden'>
      <Avatar className='rounded-lg size-8'>
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className='bg-primary uppercase text-primary-foreground'>
          {nameInitials}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden'>
        <span className='text-sm truncate font-semibold'>{name}</span>
        <span className='text-xs text-muted-foreground truncate'>{email}</span>
      </div>
    </div>
  );
}
