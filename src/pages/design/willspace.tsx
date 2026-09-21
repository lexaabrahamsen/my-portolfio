import { ProjectDetail } from '@/components/site/project-detail';

export function Willspace() {
  return (
    <ProjectDetail
      title="WillSpace"
      category="Fitness application"
      images={['/WS1.png', '/WS2.jpeg', '/WS3.jpeg', '/WS4.jpeg', '/WS5.png']}
      description={
        <p>
          WILLSPACE, a revolutionary fitness atelier hired SMM to build a health and wellness
          application. My role as UI Designer on this project was to work with owner Will Torres
          to design a fitness trainer tool aimed at simplifying client progress tracking. The
          application allows for trainers and administrators to create unique exercises and
          upload reference videos, create and track clients through a scheduling tool, assign the
          aforementioned exercises to programs and then give these programs to their clients for
          use.
        </p>
      }
    />
  );
}
