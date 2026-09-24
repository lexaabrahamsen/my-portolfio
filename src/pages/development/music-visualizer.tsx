import { ProjectDetail } from '@/components/site/project-detail';

export function MusicVisualizer() {
  return (
    <ProjectDetail
      title="Music Visualizer"
      category="JavaScript / HTML5 Canvas"
      techStack={['React', 'JavaScript', 'Web Audio API', 'HTML5 Canvas']}
      demoUrl="https://lw-music-visualizer.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/music-visualizer"
      images={['/MusicVizualizerDevProjectThumbnail.jpg']}
      description={
        <p>
          A music visualizer that turns live frequency data from the Web Audio API into two
          different audio-reactive scenes: a rotating radial burst of glowing particles, and a
          wireframe sphere whose vertices spike outward with the beat. <br />
          Both scenes are driven by the same AnalyserNode frequency data, with live controls for
          sensitivity, particle size, and three color themes (rainbow, aqua, sunset) that update
          the animation in real time without interrupting playback. Click "Start" to begin
          playback and visualization; click again to stop.
        </p>
      }
    />
  );
}
