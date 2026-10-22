import { ProjectDetail } from '@/components/site/project-detail';

export function EmissionsLeaderboard() {
  return (
    <ProjectDetail
      title="Carbon Majors Leaderboard"
      category="Astro / React / Data Visualization"
      techStack={[
        'Astro',
        'React',
        'TypeScript',
        'Mantine',
        'TanStack Table',
        'D3 (d3-geo) + TopoJSON',
        'Node data pipeline',
      ]}
      demoUrl="https://emissions-leaderboard.vercel.app/"
      githubUrl="https://github.com/lexaabrahamsen/emissions-leaderboard"
      images={['/EmissionsLeaderboardTile.jpg']}
      description={
        <p>
          A civic-tech data visualization of who is behind global emissions. It ranks 178 oil,
          gas, coal, and cement producers from 1854 to 2024, showing that just 24 of them account
          for half of the world&apos;s fossil fuel and cement emissions. The leaderboard filters by
          year, commodity, and ownership, switches between single-year and cumulative totals, and
          shows each producer&apos;s trend; every producer has its own history page, and a world
          map compares countries by total and per-person CO₂. <br />
          A dependency-free TypeScript pipeline turns Carbon Majors and Our World in Data CSVs into
          small JSON files at build time, so the site is fully static with no backend.
        </p>
      }
    />
  );
}
