import { ProjectDetail } from '@/components/site/project-detail';

export function IceAccountabilityDashboard() {
  return (
    <ProjectDetail
      title="ICE Accountability Dashboard"
      category="React / TypeScript / Data Visualization"
      techStack={[
        'React',
        'TypeScript',
        'Supabase (Postgres)',
        'TanStack Query & Table',
        'Leaflet + OpenStreetMap',
        'Recharts',
        'Chakra UI',
        'GitHub Actions',
      ]}
      demoUrl="https://ice-accountability-dashboard.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/ice-accountability-dashboard"
      images={['/IceAccountabilityDashboardTile.jpg']}
      description={
        <p>
          A public-interest dashboard built from official sources: every ICE detention facility on
          an interactive map, every death in ICE custody since FY2021 with year-by-year charts and
          a searchable table, and the companies named by boycott campaigns over their ICE
          contracts. <br />
          A Node scraper parses ICE's own pages, geocodes facility addresses with OpenStreetMap,
          and upserts everything into Supabase on a daily GitHub Actions schedule, so the site
          stays current without redeploying.
        </p>
      }
    />
  );
}
