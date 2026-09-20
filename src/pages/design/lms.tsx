import { ProjectDetail } from '@/components/site/project-detail';

export function LMS() {
  return (
    <ProjectDetail
      title="Learning Management System"
      category="LMS system"
      images={['/LMS1.png', '/LMS2.png', '/LMS3.png', '/LMS4.png']}
      description={
        <p>
          I was responsible for the User Interface for this design. The user experience was
          focused around providing a single framework with flexible, customized content for the
          learners. The crucial component was crafting an individual education plan for every
          learner by combining data and building context sensitive, adaptive recommendations.
          This would allow you to optimize your organization's performance, close competency gaps
          and enhance the skills and knowledge of your workforce.
        </p>
      }
    />
  );
}
