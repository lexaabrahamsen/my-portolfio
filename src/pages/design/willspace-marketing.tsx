import { ProjectDetail } from '@/components/site/project-detail';

export function WillspaceMarketing() {
  return (
    <ProjectDetail
      title="Willspace"
      category="Lifestyle and fitness application"
      images={['/WSM1.jpeg']}
      description={
        <p>
          WILLSPACE, a revolutionary fitness atelier, hired me to design a presentation a
          perspective client could walk away with. It was designed to be precise and minimalist.
        </p>
      }
    />
  );
}
