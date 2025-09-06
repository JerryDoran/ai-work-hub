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
  email: string;
};

type Organization = {
  name: string;
  imageUrl?: string | null;
};

export default function SidebarOrganizationButtonClient({
  user,
  organization,
}: {
  user: User;
  organization: Organization;
}) {
  const { isMobile, setOpenMobile } = useSidebar();
  const { openUserProfile } = useClerk();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size='lg'
          className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
        >
          <OrganizationInfo user={user} organization={organization} />
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
          <OrganizationInfo user={user} organization={organization} />
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

function OrganizationInfo({
  organization,
  user,
}: {
  organization: Organization;
  user: User;
}) {
  const nameInitials = organization.name
    .split(' ')
    .splice(0, 2)
    .map((str) => str[0])
    .join('');
  return (
    <div className='flex items-center gap-2 overflow-hidden'>
      <Avatar className='rounded-lg size-8'>
        <AvatarImage
          src={organization.imageUrl ?? undefined}
          alt={organization.name}
        />
        <AvatarFallback className='bg-primary uppercase text-primary-foreground'>
          {nameInitials}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden'>
        <span className='text-sm truncate font-semibold'>
          {organization.name}
        </span>
        <span className='text-xs text-muted-foreground truncate'>
          {user.email}
        </span>
      </div>
    </div>
  );
}
