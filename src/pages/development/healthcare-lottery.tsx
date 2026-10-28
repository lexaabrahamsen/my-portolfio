import { ProjectDetail } from '@/components/site/project-detail';

export function HealthcareLottery() {
  return (
    <ProjectDetail
      title="Healthcare Lottery"
      category="React / TypeScript / Data Visualization"
      techStack={[
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui (Radix)',
        'Pure TypeScript calculation engine',
      ]}
      demoUrl="https://healthcare-lottery.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/healthcare-lottery"
      images={['/HealthcareLotteryTile.jpg']}
      description={
        <p>
          An interactive comparison of what one household pays for health care in a year in the
          US versus Germany, the UK, Switzerland, Canada, and the Netherlands. Set an income and
          family size, then step through four scenarios: the cost of coverage alone, a healthy
          year, having a baby, and a serious illness. Each view can show what you pay or the full
          cost including your employer&apos;s share, and the settings are saved in a shareable
          link. <br />
          Under the UI is a dependency-free TypeScript engine with one model per country. Every
          line item records its formula and inputs, each tied to a cited source or a labeled
          assumption, and tests check that every input resolves to a source and that the totals
          add up.
        </p>
      }
    />
  );
}
