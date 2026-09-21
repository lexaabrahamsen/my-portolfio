import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/lib/theme-provider';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { Home } from '@/pages/home';
import { Contact } from '@/pages/contact';
import { MusicVisualizer } from '@/pages/development/music-visualizer';
import { CreditCard } from '@/pages/development/credit-card';
import { Portfolio } from '@/pages/development/portfolio';
import { Blueprint } from '@/pages/design/blueprint';
import { Humanityco } from '@/pages/design/humanityco';
import { LMS } from '@/pages/design/lms';
import { WebsiteWork } from '@/pages/design/website-work';
import { Willspace } from '@/pages/design/willspace';
import { WillspaceMarketing } from '@/pages/design/willspace-marketing';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              {/* Development Work */}
              <Route path="/credit-card-form" element={<CreditCard />} />
              <Route path="/music-visualizer" element={<MusicVisualizer />} />
              <Route path="/portfolio" element={<Portfolio />} />

              {/* Design Work */}
              <Route path="/humanityco" element={<Humanityco />} />
              <Route path="/willspace" element={<Willspace />} />
              <Route path="/blueprint" element={<Blueprint />} />
              <Route path="/willspace-marketing" element={<WillspaceMarketing />} />
              <Route path="/website-work" element={<WebsiteWork />} />
              <Route path="/learning-management-system" element={<LMS />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
