import { ProjectDetail } from '@/components/site/project-detail';

export function Humanityco() {
  return (
    <ProjectDetail
      title="Hu-manity.co"
      category="Data privacy platform"
      images={['/HU3.png', '/HU2.png', '/HU1.png']}
      description={
        <p>
          Lead Experience Designer for Hu-manity.co's mobile App for iPhone and Android built on
          blockchain that enables you to join the global movement to claim your 31st Human Right —
          the right to claim your personal data as your property and have a seat at the table when
          your personal data is used by corporations, and other 3rd parties.
        </p>
      }
    />
  );
}
