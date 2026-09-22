import { Hero } from '@/components/site/hero';
import { ManifestoSection } from '@/components/site/manifesto-section';
import { SelectedWorksSection } from '@/components/site/selected-works-section';
import { DevelopmentWorkSection } from '@/components/site/development-work-section';
import { DesignWorkSection } from '@/components/site/design-work-section';

export function Home() {
  return (
    <div>
      <Hero />
      <ManifestoSection />
      <SelectedWorksSection />
      <DevelopmentWorkSection />
      <DesignWorkSection />
    </div>
  );
}
