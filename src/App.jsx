import { Hero } from './components/landing/Hero';
import { TrustBadges } from './components/landing/TrustBadges';
// import { Services } from './components/landing/Services'; // Descomenta esta línea si tienes el componente de los 3 pilares guardado así
import { Projects } from './components/landing/Projects';
import { Contact } from './components/landing/Contact';
import { Footer } from './components/landing/Footer';
import { WhatsAppFAB } from './components/landing/WhatsAppFAB';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Si tienes un componente Header/Navbar, impórtalo y colócalo aquí arriba */}
      
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        
        {/* <Services /> Descomenta esta línea para mostrar los servicios */}
        
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App