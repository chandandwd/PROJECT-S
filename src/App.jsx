import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import FloatingHearts from './components/FloatingHearts';
import FloatingPetals from './components/FloatingPetals';
import MusicPlayer from './components/MusicPlayer';

import WelcomePage from './pages/WelcomePage';
import SorryPage from './pages/SorryPage';
import ReasonsPage from './pages/ReasonsPage';
import CarePage from './pages/CarePage';
import LettersPage from './pages/LettersPage';
import PromisesPage from './pages/PromisesPage';
import FinalPage from './pages/FinalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Background decorations */}
      <FloatingHearts />
      <FloatingPetals count={6} />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main style={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/sorry" element={<SorryPage />} />
            <Route path="/reasons" element={<ReasonsPage />} />
            <Route path="/care" element={<CarePage />} />
            <Route path="/letters" element={<LettersPage />} />
            <Route path="/promises" element={<PromisesPage />} />
            <Route path="/final" element={<FinalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Music player */}
      <MusicPlayer />
    </>
  );
}

export default App;
