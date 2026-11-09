import { useEffect, useState } from 'react';
import './index.css';
import { HomePage } from './components/HomePage';
import { ClinicalServicesPage } from './components/ClinicalServicesPage';
import RehabProgramsPage from './components/RehabProgramsPage';
import OurStoryPage from './components/OurStoryPage';

const DESKTOP_PROMPT_ANSWERED_KEY = 'desktopPromptAnswered';

function App() {
  const currentPath = window.location.pathname;
  const isHomePage = currentPath === '/' || currentPath === '/home';
  const [showMobilePrompt, setShowMobilePrompt] = useState(
    () => (
      isHomePage
      && window.matchMedia('(max-width: 760px)').matches
      && window.sessionStorage.getItem(DESKTOP_PROMPT_ANSWERED_KEY) !== 'true'
    ),
  );

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/home');
    }
  }, []);

  useEffect(() => {
    if (!showMobilePrompt) return;

    document.body.classList.add('mobile-view-prompt-open');
    return () => document.body.classList.remove('mobile-view-prompt-open');
  }, [showMobilePrompt]);

  const dismissMobilePrompt = () => {
    window.sessionStorage.setItem(DESKTOP_PROMPT_ANSWERED_KEY, 'true');
    setShowMobilePrompt(false);
  };

  let page = <HomePage />;
  if (currentPath === '/clinical-services') page = <ClinicalServicesPage />;
  else if (currentPath === '/rehab-programs') page = <RehabProgramsPage />;
  else if (currentPath === '/our-story') page = <OurStoryPage />;

  return (
    <>
      {page}
      <MobileViewPrompt
        visible={showMobilePrompt}
        onDismiss={dismissMobilePrompt}
      />
    </>
  );
}

interface MobileViewPromptProps {
  visible: boolean;
  onDismiss: () => void;
}

function MobileViewPrompt({ visible, onDismiss }: MobileViewPromptProps) {
  if (!visible) return null;

  return (
    <div className="mobile-view-prompt-backdrop">
      <section
        className="mobile-view-prompt"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-view-prompt-title"
        aria-describedby="mobile-view-prompt-message"
      >
        <h2 id="mobile-view-prompt-title">For the best experience</h2>
        <p id="mobile-view-prompt-message">
          For the optimal viewing experience, please open this website in desktop mode.
        </p>
        <div className="mobile-view-prompt-actions">
          <button type="button" className="mobile-view-prompt-ok" onClick={onDismiss}>
            OK
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
