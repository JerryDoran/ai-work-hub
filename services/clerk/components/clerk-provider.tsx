'use client';

import { Suspense } from 'react';
import { useIsDarkMode } from '@/hooks/use-is-dark-mode';
import { ClerkProvider as OriginalClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useIsDarkMode();
  return (
    <Suspense>
      <OriginalClerkProvider
        appearance={isDarkMode ? { baseTheme: [dark] } : undefined}
      >
        {children}
      </OriginalClerkProvider>
    </Suspense>
  );
}
