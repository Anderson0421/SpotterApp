import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '@/docss/components/styles.css';

function Document() {
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    // Si la sección actual no es "Inicio", desplaza el contenido hacia arriba
    if (currentSection !== 'inicio') {
      window.scrollTo(0, 0);
    }
  }, [currentSection]);

  return (
    <div className="max-w-4xl mx-auto p-8 lg:p-12 flex flex-col lg:flex-row">
      <div className="lg:w-1/4 fixed top-20 overflow-y-auto h-screen left-0">
      <div className="flex flex-col space-y-8 lg:space-y-16 ml-8" >
      <Link 
    to="inicio"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setCurrentSection('inicio')}
    className={`link ${currentSection === 'inicio' ? 'active-link' : ''}`}
  >
            Inicio
          </Link>
          <Link
            to="seccion-1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setCurrentSection('seccion-1')}
            className={`link ${currentSection === 'seccion-1' ? 'active-link' : ''}`}
          >
            Sección 1: Configuración inicial
          </Link>
          <Link
            to="seccion-2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setCurrentSection('seccion-2')}
            className={`link ${currentSection === 'seccion-2' ? 'active-link' : ''}`}
          >
            Sección 2: Funcionalidades principales
          </Link>
          <Link
            to="seccion-3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setCurrentSection('seccion-3')}
            className={`link ${currentSection === 'seccion-3' ? 'active-link' : ''}`}
          >
            Sección 3: Preguntas frecuentes
          </Link>
        </div>
      </div>

      <div className="lg:w-3/4">
        <div id="inicio" className={currentSection === 'inicio' ? 'fadeIn' : 'fadeOut'}>
          <div className="p-8 lg:p-12 my-8 lg:my-16 bg-black rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8">Inicio</h2>
            <p style={{ fontSize: '24px' }}> {/* Ajusta el tamaño del texto según sea necesario */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor turpis id odio maximus, id gravida eros fringilla. 
              In lacinia posuere est, et aliquet justo vehicula a. Maecenas sit amet metus at nisi posuere aliquam. 
              Phasellus feugiat libero eu justo dictum, ut ultrices odio eleifend. Cras sit amet est ut erat vestibulum sollicitudin vel ac justo. 
              Vestibulum luctus libero non enim bibendum, nec convallis libero laoreet. Nullam in leo nec magna eleifend ultrices.
              Nulla facilisi. Donec nec consectetur libero, non tristique elit. Integer posuere enim id mauris vehicula faucibus. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vitae turpis nec enim ultricies dictum. 
              Nulla consectetur euismod lorem, a suscipit purus feugiat ut. 
            </p>
            {/* Agrega más texto según sea necesario */}
          </div>
        </div>
        <div id="seccion-1" className={currentSection === 'seccion-1' ? 'fadeIn' : 'fadeOut'}>
          <div className="p-8 lg:p-12 my-8 lg:my-16 bg-black rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8">Sección 1: Configuración inicial</h2>
            <p style={{ fontSize: '24px' }}> {/* Ajusta el tamaño del texto según sea necesario */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor turpis id odio maximus, id gravida eros fringilla. 
              In lacinia posuere est, et aliquet justo vehicula a. Maecenas sit amet metus at nisi posuere aliquam. 
              Phasellus feugiat libero eu justo dictum, ut ultrices odio eleifend. Cras sit amet est ut erat vestibulum sollicitudin vel ac justo. 
              Vestibulum luctus libero non enim bibendum, nec convallis libero laoreet. Nullam in leo nec magna eleifend ultrices.
              Nulla facilisi. Donec nec consectetur libero, non tristique elit. Integer posuere enim id mauris vehicula faucibus. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vitae turpis nec enim ultricies dictum. 
              Nulla consectetur euismod lorem, a suscipit purus feugiat ut. 
            </p>
          </div>
        </div>
        <div id="seccion-2" className={currentSection === 'seccion-2' ? 'fadeIn' : 'fadeOut'}>
          <div className="p-8 lg:p-12 my-8 lg:my-16 bg-black rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8">Sección 2: Funcionalidades principales</h2>
            <p style={{ fontSize: '24px' }}> {/* Ajusta el tamaño del texto según sea necesario */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor turpis id odio maximus, id gravida eros fringilla. 
              In lacinia posuere est, et aliquet justo vehicula a. Maecenas sit amet metus at nisi posuere aliquam. 
              Phasellus feugiat libero eu justo dictum, ut ultrices odio eleifend. Cras sit amet est ut erat vestibulum sollicitudin vel ac justo. 
              Vestibulum luctus libero non enim bibendum, nec convallis libero laoreet. Nullam in leo nec magna eleifend ultrices.
              Nulla facilisi. Donec nec consectetur libero, non tristique elit. Integer posuere enim id mauris vehicula faucibus. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vitae turpis nec enim ultricies dictum. 
              Nulla consectetur euismod lorem, a suscipit purus feugiat ut. 
            </p>
          </div>
        </div>
        <div id="seccion-3" className={currentSection === 'seccion-3' ? 'fadeIn' : 'fadeOut'}>
          <div className="p-8 lg:p-12 my-8 lg:my-16 bg-black rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8">Sección 3: Preguntas frecuentes</h2>
            <p style={{ fontSize: '24px' }}> {/* Ajusta el tamaño del texto según sea necesario */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor turpis id odio maximus, id gravida eros fringilla. 
              In lacinia posuere est, et aliquet justo vehicula a. Maecenas sit amet metus at nisi posuere aliquam. 
              Phasellus feugiat libero eu justo dictum, ut ultrices odio eleifend. Cras sit amet est ut erat vestibulum sollicitudin vel ac justo. 
              Vestibulum luctus libero non enim bibendum, nec convallis libero laoreet. Nullam in leo nec magna eleifend ultrices.
              Nulla facilisi. Donec nec consectetur libero, non tristique elit. Integer posuere enim id mauris vehicula faucibus. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vitae turpis nec enim ultricies dictum. 
              Nulla consectetur euismod lorem, a suscipit purus feugiat ut. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
