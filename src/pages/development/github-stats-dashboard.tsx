import { ProjectDetail } from '@/components/site/project-detail';

export function GithubStatsDashboard() {
  return (
    <ProjectDetail
      title="GitHub Stats Dashboard"
      category="React / TypeScript / Data Visualization"
      techStack={['React', 'TypeScript', 'Material UI', 'TanStack Query', 'GitHub REST API']}
      githubUrl="https://github.com/lexaabrahamsen/github-stats-dashboard"
      images={['/GithubStatsDashboardThumbnail.jpg']}
      description={
        <p>
          A dashboard that turns any GitHub username into a visual profile. Search for a user to
          see their avatar, follower and following counts, a pie chart of the languages across
          their repositories, a bar chart of their largest repos, and a grid of their top
          repositories with stars, forks, and size. <br />
          Data comes straight from the GitHub REST API, with TanStack Query handling caching and
          loading states, and each profile lives at a shareable URL.
        </p>
      }
    />
  );
}
