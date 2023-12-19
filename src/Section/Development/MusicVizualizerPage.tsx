import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

interface MusicVizualizerPageProps {}

const MusicVizualizerPage: React.FC<MusicVizualizerPageProps> = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12"
      style={{ backgroundColor: darkMode ? '#1f2937' : 'white' }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p
            className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Music Visualizer
          </p>
          <div style={{ paddingTop: '15px' }}>
            <p
              className="text-base font-outfit font-light leading-7 uppercase"
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              Web Audio API / REACT / HTML5 Canvas
            </p>
          </div>
          <p
            className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            This React project implements a simple music visualizer that allows
            users to play and visualize an audio file. The visualizer uses the
            Web Audio API to analyze the frequency data of the audio, creating a
            dynamic and colorful display of vertical rectangles that represent
            different frequencies in the song. Key Features: Play and Stop
            Button: Users can toggle the playback of the audio using a
            "Start/Stop" button. The button dynamically changes its label based
            on the current playback state. Frequency Data Visualization: The
            project utilizes the Web Audio API's AnalyserNode to capture
            frequency data from the audio. This data is then translated into a
            visual representation on an HTML5 canvas, where each vertical
            rectangle corresponds to a different frequency. Dynamic Color
            Mapping: The color of each rectangle is determined by the amplitude
            of the corresponding frequency, creating a vibrant and dynamic
            visual experience. Code Structure: The React component manages the
            audio context, source, and analyser using useRef to persist values
            across renders. The togglePlay function controls the playback of the
            audio and initiates the visualization. The updateFrames function
            continuously captures frequency data, updates state, and redraws the
            visual representation on the canvas. Cleanup logic ensures that the
            audio context and source are properly closed when the component is
            unmounted. Usage: To use the visualizer, the user clicks the "Start"
            button, initiating the playback of the audio and the dynamic
            visualization. Clicking the button again stops the audio and
            visualizer. This project offers an interactive and engaging way to
            experience music through a simple yet effective visual
            representation.
          </p>
          <a
            href="https://elegant-trifle-0a151d.netlify.app/"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
            className="inline-flex items-center px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-black text-black hover:border-black hover:bg-transparent hover:text-black hover:opacity-50 hover:shadow-none active:bg-black active:text-white active:hover:bg-transparent active:hover:text-black"
          >
            View demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            src="../MusicVizualizerDetail1.jpg"
            className="w-full rounded-lg mb-8"
          />
          <img
            src="../MusicVizualizerDetail2.jpg"
            className="w-full rounded-lg mb-8"
          />
          <img
            src="../MusicVizualizerDetail3.jpg"
            className="w-full rounded-lg mb-8"
          />
          <img
            src="../MusicVizualizerDetail4.jpg"
            className="w-full rounded-lg mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicVizualizerPage;
