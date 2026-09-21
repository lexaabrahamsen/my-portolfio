import { ProjectDetail } from '@/components/site/project-detail';

export function Blueprint() {
  return (
    <ProjectDetail
      title="Blueprint"
      category="Meeting and Event Application"
      images={['/BP1.jpeg', '/BP2.png', '/BP3.png']}
      description={
        <p>
          Apogy Events, one app for all events. Meeting and event application that enhances
          attendee engagement. As the UI/UX Designer I focused on the experience for the user in
          attendance. My role was to create an experience where the attendees were organized
          stimulated, and motivated. I created a design that would enhance events and meetings of
          any size across a wide range of industries such as corporate, small business, academic,
          and non-profit. Apogy Events needed to have the ability to customize content, measure
          engagement, inspire collaboration and tailor the experience for each participant.
        </p>
      }
    />
  );
}
