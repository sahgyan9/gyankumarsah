import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Certificates from './pages/Certificates';
import ShaktiPhoton from './pages/ShaktiPhoton';
import Research from './pages/Research';
import Philosophy from './pages/Philosophy';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/shakti-photon" element={<ShaktiPhoton />} />
              <Route path="/research" element={<Research />} />
              <Route path="/philosophy" element={<Philosophy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
