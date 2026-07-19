import Projects from './components/landing/Projects';
import Contact from './components/landing/Contact';
// Si tienes un archivo de estilos general, lo mantenemos importado
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Aquí estamos llamando a tus componentes reales */}
      <Projects />
      <Contact />
    </div>
  )
}

export default App