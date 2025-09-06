'use client';

import Link from 'next/link';

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  SignedIn,
  SignedOut,
} from '@/services/clerk/components/sign-in-status';
import { usePathname } from 'next/navigation';

type SidebarNavMenuGroupProps = {
  items: {
    href: string;
    icon: React.ReactNode;
    label: string;
    authStatus?: 'signedIn' | 'signedOut';
  }[];
  className?: string;
};

export default function SidebarNavMenuGroup({
  items,
  className,
}: SidebarNavMenuGroupProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup className={className}>
      <SidebarMenu>
        {items.map((item, index) => {
          const html = (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className='cursor-pointer'
              >
                <Link href={item.href} className='flex items-center gap-3'>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );

          if (item.authStatus === 'signedOut') {
            return <SignedOut key={item.href}>{html}</SignedOut>;
          }

          if (item.authStatus === 'signedIn') {
            return <SignedIn key={item.href}>{html}</SignedIn>;
          }

          return html;
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
