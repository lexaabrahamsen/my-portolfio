import { ProjectDetail } from '@/components/site/project-detail';

export function Portfolio() {
  return (
    <ProjectDetail
      title="Portfolio Website"
      category="Tailwind CSS / React / TypeScript / shadcn/ui / Vite"
      githubUrl="https://github.com/lexaabrahamsen/my-portolfio"
      images={['/Portfolio1.jpg', '/Portfolio2.jpg']}
      description={
        <p>
          This portfolio website showcases my skills, projects, and is a reflection of my journey
          as a developer and a creative professional.
          <br />
          <br />
          I wrote this project in React with TypeScript to enhance code quality and provide a
          statically-typed development experience. Utilized TypeScript's type-checking features
          to catch potential errors during development.
          <br />
          <br />
          Tailwind CSS and shadcn/ui power the styling, built on top of Vite for a fast dev
          experience and optimized production builds.
          <br />
          <br />
          This site is hosted on Netlify for seamless deployment and continuous integration,
          leveraging Netlify's automated build and deployment features for an efficient
          development workflow.
          <br />
          <br />
          Integrated a Dark Mode feature using a ThemeProvider and React context. Enables users to
          toggle between light and dark themes, enhancing accessibility and accommodating user
          preferences.
        </p>
      }
    />
  );
}
