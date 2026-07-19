// Asegúrate de que los nombres de los archivos coincidan con los que tienes en tu carpeta
import { Navbar } from './components/landing/Navbar'; // Puede que el tuyo se llame Navbar.tsx
import { Hero } from './components/landing/Hero';
import { TrustBadges } from './components/landing/TrustBadges';
import { Services } from './components/landing/Services'; // Este es el componente de los 3 pilares
import { Projects } from './components/landing/Projects';
import { Contact } from './components/landing/Contact';
import { Footer } from './components/landing/Footer';
import { WhatsAppFAB } from './components/landing/WhatsAppFAB';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Aquí entra tu menú de navegación superior con los links a la U virtual */}
      <Navbar /> 
      
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        
        {/* Aquí entran tus 3 pilares de servicios */}
        <Services /> 
        
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App