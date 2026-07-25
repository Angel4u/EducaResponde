import { useState } from 'react'; // IMPORTANTE: Importar useState
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { TrustBadges } from './components/landing/TrustBadges';
import { Services } from './components/landing/Services';
import { Projects } from './components/landing/Projects';
import { Methodology } from './components/landing/Methodology';
import { About } from './components/landing/About';            
import { Contact } from './components/landing/Contact';
import { Footer } from './components/landing/Footer';
import { WhatsAppFAB } from './components/landing/WhatsAppFAB';

// IMPORTAR LA NUEVA VISTA
import { CursosView } from './components/landing/CursosView';

function App() {
  // Estado para controlar la vista actual: 'landing' o 'cursos'
  const [view, setView] = useState('landing');

  return (
    <div className="flex min-h-screen flex-col">
      {/* Pasar el estado y la función para cambiarlo al Navbar */}
      <Navbar setView={setView} currentView={view} /> 
      
      <main className="flex-1">
        {/* Renderizado condicional basado en el estado 'view' */}
        {view === 'landing' && (
          <>
            <Hero />
            <TrustBadges />
            <Services /> 
            <Projects />
            <Methodology />
            <About />
            <Contact />
          </>
        )}

        {view === 'cursos' && (
          <CursosView />
        )}
      </main>
      
      <Footer />
      <WhatsAppFAB />

    </div>
  )
}

export default App