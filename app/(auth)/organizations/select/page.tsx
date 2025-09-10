import { OrganizationList } from '@clerk/nextjs';
import { Suspense } from 'react';

type OrganizationSelectPageProps = {
  searchParams: Promise<{ redirect?: string }>;
};

export default function OrganizationSelectPage(
  props: OrganizationSelectPageProps
) {
  return (
    <Suspense>
      <SuspendedPage {...props} />
    </Suspense>
  );
}

async function SuspendedPage({ searchParams }: OrganizationSelectPageProps) {
  const { redirect } = await searchParams;
  const redirectUrl = redirect ?? '/employer';

  return (
    <OrganizationList
      hidePersonal
      hideSlug
      skipInvitationScreen
      afterSelectOrganizationUrl={redirectUrl}
      afterCreateOrganizationUrl={redirectUrl}
    />
  );
}
