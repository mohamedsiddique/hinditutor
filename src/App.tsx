import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import KidsProgram from './pages/KidsProgram';
import PersonalCoaching from './pages/PersonalCoaching';
import About from './pages/About';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kids" element={<KidsProgram />} />
              <Route path="/personal-coaching" element={<PersonalCoaching />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;