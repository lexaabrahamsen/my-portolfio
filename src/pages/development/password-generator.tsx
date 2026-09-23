import { ProjectDetail } from '@/components/site/project-detail';

export function PasswordGenerator() {
  return (
    <ProjectDetail
      title="Password Generator"
      category="Vue.js / JavaScript"
      techStack={['Vue.js', 'JavaScript', 'CSS']}
      demoUrl="https://lexa-password-generator.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/vue-password-generator"
      images={['/PasswordGeneratorThumbnail.jpg']}
      description={
        <p>
          A Vue.js app for generating secure, customizable passwords. Users can toggle lowercase,
          uppercase, numbers, and symbols, and adjust password length with a slider to generate a
          password that fits the requirements of any site or system.
        </p>
      }
    />
  );
}
