import { Hero } from '@/components/site/hero';
import { DevelopmentWorkSection } from '@/components/site/development-work-section';
import { DesignWorkSection } from '@/components/site/design-work-section';

export function Home() {
  return (
    <div>
      <Hero />
      <DevelopmentWorkSection />
      <DesignWorkSection />
    </div>
  );
}
