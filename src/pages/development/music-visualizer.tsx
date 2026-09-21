import { ProjectDetail } from '@/components/site/project-detail';

export function MusicVisualizer() {
  return (
    <ProjectDetail
      title="Music Visualizer"
      category="JavaScript / HTML5 Canvas"
      demoUrl="https://lw-music-visualizer.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/music-visualizer"
      images={['/MusicVizualizerDevProjectThumbnail.jpg']}
      description={
        <p>
          This React project is a music visualizer that lets users play and visualize audio
          files using the Web Audio API. It dynamically displays colorful rectangles representing
          different frequencies in the song. <br />
          Key Features/Details/Deeper Dive: this project showcases Frequency Data Visualization
          by using Web Audio API's AnalyserNode for dynamic frequency representation on an HTML5
          canvas. Dynamic Color Mapping: Color of rectangles reflects frequency amplitude for a
          vibrant visual experience. Code Structure: Manages audio context, source, and analyser
          with useRef. togglePlay controls playback and visualization. updateFrames captures and
          updates frequency data. Cleanup Logic: Ensures proper closure of audio context and
          source when the component unmounts. Usage: Click "Start" for audio playback and dynamic
          visualization; click again to stop.
        </p>
      }
    />
  );
}
