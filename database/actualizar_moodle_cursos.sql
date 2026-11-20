-- ============================================================================
-- EDUCARESPONDE - TRANSFORMACION INTEGRAL DEL AULA VIRTUAL MOODLE
-- Basado 100% en la Transcripcion Oficial de EducaResponde (4 Focos de Trabajo
-- + Modulos Complementarios + Modelos de Gestion UTP/Directiva y Aula Docente)
-- ============================================================================

SET NAMES utf8mb4;

-- ============================================================================
-- 1. IDENTIDAD VISUAL CORPORATIVA EN MOODLE (HEADER CSS + FOOTER INSTITUCIONAL)
-- Corrige el logo roto "URL_DE_TU_LOGO_AQUI", elimina "soporte@tudominio.cl"
-- y aplica la paleta Azul Marino (#0f172a) + Amarillo Corporativo (#eab308)
-- ============================================================================

UPDATE mdl_config
SET value = '<style>
  :root {
    --er-navy: #0f172a;
    --er-navy-light: #1e293b;
    --er-gold: #eab308;
    --er-gold-dark: #ca8a04;
  }
  .navbar.fixed-top {
    border-bottom: 3px solid #eab308 !important;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08) !important;
  }
  .navbar-brand {
    font-weight: 900 !important;
    letter-spacing: -0.02em !important;
  }
  .nav-tabs .nav-link {
    font-weight: 700 !important;
    color: #334155 !important;
    border-radius: 10px 10px 0 0 !important;
    margin-right: 4px !important;
  }
  .nav-tabs .nav-link.active {
    background-color: #0f172a !important;
    color: #ffffff !important;
    border-bottom: 3px solid #eab308 !important;
  }
  .btn-primary {
    background-color: #0f172a !important;
    border-color: #0f172a !important;
    font-weight: 700 !important;
    border-radius: 10px !important;
  }
  .btn-primary:hover {
    background-color: #1e293b !important;
    border-color: #eab308 !important;
  }
  .dashboard-card {
    border-radius: 14px !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06) !important;
    overflow: hidden !important;
  }
</style>'
WHERE name = 'additionalhtmlhead';

UPDATE mdl_config
SET value = '<style>
  #page-footer .copyright { display: none !important; }
</style>
<div style="background-color: #0f172a; color: #ffffff; padding: 36px 24px; font-family: system-ui, -apple-system, sans-serif; border-top: 4px solid #eab308;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 28px; border-bottom: 1px solid #1e293b; padding-bottom: 24px; margin-bottom: 18px;">
    <div style="max-width: 360px; text-align: left;">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
        <span style="background: #eab308; color: #0f172a; font-weight: 900; font-size: 16px; padding: 6px 11px; border-radius: 10px;">ER</span>
        <div>
          <div style="font-size: 20px; font-weight: 900; color: #ffffff; line-height: 1;">Educa<span style="font-weight: 400; color: #cbd5e1;">Responde</span></div>
          <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #eab308; margin-top: 2px;">Plataforma CPA &amp; OTEC Escolar</div>
        </div>
      </div>
      <p style="margin: 0; font-size: 13px; line-height: 1.55; color: #94a3b8;">
        Comunidades Profesionales de Aprendizaje Docente, Evaluaciones Externas (DIA/SIMCE), Gestión Normativa e Innovación Pedagógica (STEM, ABP, Socioemocional y Fomento Lector).
      </p>
    </div>
    <div style="text-align: left;">
      <h4 style="color: #eab308; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px 0;">4 Dimensiones de Capacitación</h4>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; color: #cbd5e1; line-height: 1.8;">
        <li>• Foco 1: Liderazgo Institucional, CPA y Gestión UTP/PME</li>
        <li>• Foco 2: Evaluaciones Externas (DIA/SIMCE), Syscol y Cobertura</li>
        <li>• Foco 3: Gestión Normativa (Decreto 67/RICE), Protocolos e Inclusión</li>
        <li>• Foco 4: Innovación STEM, ABP, Socioemocional y Plan Lector</li>
      </ul>
    </div>
    <div style="text-align: left;">
      <h4 style="color: #eab308; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px 0;">Mesa de Ayuda &amp; Soporte OTEC</h4>
      <p style="margin: 0 0 6px 0; font-size: 13px; color: #e2e8f0;">✉️ E-mail: <a href="mailto:contacto@educaresponde.cl" style="color: #facc15; text-decoration: underline; font-weight: 700;">contacto@educaresponde.cl</a></p>
      <p style="margin: 0 0 6px 0; font-size: 13px; color: #e2e8f0;">📞 Atención a Establecimientos: +56 2 2345 6789</p>
      <p style="margin: 0; font-size: 12px; color: #94a3b8;">Certificación de Horas de Perfeccionamiento Docente (SENCE / Ley SEP)</p>
    </div>
  </div>
  <div style="max-width: 1200px; margin: 0 auto; font-size: 12px; color: #64748b; text-align: center;">
    © 2026 EducaResponde Chile · Plataforma Oficial de Capacitaciones y Comunidades Profesionales de Aprendizaje Docente.
  </div>
</div>'
WHERE name = 'additionalhtmlfooter';


-- ============================================================================
-- 2. LIMPIAR SUB-PESTAÑAS OCULTAS Y SUBSECCIONES VACIAS DEL CURSO ACTUAL (ID=2)
-- ============================================================================

DELETE FROM mdl_course_format_options WHERE name = 'level' AND value <> '0';

-- Dejar en la Seccion 0 solo el foro de Avisos (cmid=1) para que no aparezca "Nueva subseccion" vacia
UPDATE mdl_course_sections SET sequence = '1' WHERE course = 2 AND section = 0;
-- Limpiar la etiqueta vieja de barras naranjas/grises de la Seccion 1 para mostrar el nuevo diseño limpio
UPDATE mdl_course_sections SET sequence = '' WHERE course = 2 AND section = 1;
-- Ocultar las subsecciones vacias 6 y 7
UPDATE mdl_course_sections SET visible = 0 WHERE course = 2 AND section IN (6, 7);


-- ============================================================================
-- 3. ACTUALIZAR EL CURSO 1 (ID=2):
-- "Foco 2: Uso de Syscol, Evaluaciones Externas (DIA / SIMCE) y Cobertura Curricular"
-- Refleja fielmente el proceso de la transcripcion:
--   - Doble calendario anual y Carta Gantt (instructivo 2 semanas antes)
--   - Chequeo de pruebas y protocolo de aplicacion fisica de ensayos SIMCE
--   - Lector optico, subida a Syscol, niveles Insuficiente/Elemental/Adecuado e IDPS
--   - Retroalimentacion, Acta de Toma de Decisiones y Restitucion del Saber
-- ============================================================================

UPDATE mdl_course
SET
  fullname = 'Uso de Syscol, Evaluaciones Externas (DIA / SIMCE) y Cobertura Curricular',
  shortname = 'Syscol-SIMCE-DIA',
  idnumber = 'FOCO-02-ADE01',
  summary = '<p>Plataforma y sistema anual de implementación de evaluaciones externas validadas con DIA y ensayos SIMCE por asignatura y nivel. Monitoreo de Estándares Indicativos, niveles de logro (Insuficiente, Elemental, Adecuado), IDPS, cobertura curricular y estrategias de Restitución del Saber en el aula.</p>',
  format = 'onetopic',
  cacherev = cacherev + 200
WHERE id = 2;

-- Seccion 0 (Curso 2): Introduccion, Bienvenida CPA, Certificacion de Horas y Clases Online
UPDATE mdl_course_sections
SET
  name = 'Introducción y Clases Online',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: 16px; padding: 28px; margin-bottom: 20px; border-bottom: 4px solid #eab308;">
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
      <span style="background: #eab308; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 12px; border-radius: 99px;">FOCO 2 · EVALUACIONES EXTERNAS &amp; SYSCOL</span>
      <span style="background: rgba(255,255,255,0.12); color: #f8fafc; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 99px;">Comunidad Profesional de Aprendizaje (CPA)</span>
    </div>
    <h2 style="margin: 0 0 10px 0; font-size: 25px; font-weight: 800; color: #ffffff;">
      Uso de Syscol, Evaluaciones Externas (DIA / SIMCE) y Cobertura Curricular
    </h2>
    <p style="margin: 0 0 16px 0; font-size: 14.5px; line-height: 1.6; color: #cbd5e1;">
      Bienvenido(a) a la plataforma de perfeccionamiento docente de <strong>EducaResponde</strong>. En este programa dominarás la planificación anual de evaluaciones externas (DIA y ensayos SIMCE), el flujo completo desde el doble calendario UTP y la aplicación física en aula, hasta la captura con lector óptico en <strong>Syscol</strong>, el monitoreo de los niveles de logro (<em>Insuficiente, Elemental y Adecuado</em>), los IDPS y el protocolo de <strong>Restitución del Saber</strong>.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: #f8fafc;">
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">⏱️ <strong>Certificación:</strong> 48 Horas Cronológicas de Perfeccionamiento Docente</span>
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">📊 <strong>Cobertura:</strong> Niveles de Logro + IDPS + Estándares Indicativos</span>
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">👨‍🏫 <strong>Equipo Especialista:</strong> Mg. Angel Eastman &amp; Equipo Evaluación Externa</span>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #eab308; border-radius: 14px; padding: 18px;">
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #ca8a04; margin-bottom: 4px;">🎥 Clases Online y Acompañamiento</div>
      <h4 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 800; color: #0f172a;">Sesiones Sincrónicas con Especialistas</h4>
      <p style="margin: 0 0 12px 0; font-size: 13px; color: #475569;">Acompañamiento en vivo para implementar las estrategias en el aula y analizar los ensayos SIMCE/DIA del establecimiento.</p>
      <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #0f172a; color: #ffffff; font-size: 12.5px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px;">🔗 Ingresar a Sala de Clases Online →</a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #0f172a; border-radius: 14px; padding: 18px;">
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #475569; margin-bottom: 4px;">📥 Modelos Base Adquiridos por el Colegio</div>
      <h4 style="margin: 0 0 6px 0; font-size: 16px; font-weight: 800; color: #0f172a;">Planificaciones, Carta Gantt y Actas</h4>
      <p style="margin: 0 0 12px 0; font-size: 13px; color: #475569;">En cada unidad podrás descargar las clases en PDF, guías, protocolos de aplicación y formatos de actas de toma de decisiones.</p>
      <a href="#programa-pdf" style="display: inline-block; background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; font-size: 12.5px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px;">📄 Descargar Programa Oficial (48 hrs)</a>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 0;

-- Seccion 1 (Curso 2): Unidad 1 - Doble Calendario Anual, Carta Gantt e Instructivo Previo
UPDATE mdl_course_sections
SET
  name = 'Unidad 1: Carta Gantt y Calendario',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 1 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Planificación Anual, Carta Gantt y Doble Calendario de Evaluaciones</h3>
    <p style="margin: 0 0 12px 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo estructurar en marzo/febrero el calendario anual de evaluaciones externas (DIA y ensayos SIMCE). Implementación del <strong>doble calendario de gestión</strong>: el calendario entregado al profesorado (con entrega de instrumentos 2 semanas antes mediante instructivo técnico) y el calendario interno de UTP para revisión, impresión y agrupación.</p>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px;">
      <strong style="font-size: 12px; text-transform: uppercase; color: #0f172a;">🎯 Resultados de Aprendizaje de la Unidad:</strong>
      <ul style="margin: 6px 0 0 0; padding-left: 18px; font-size: 13.5px; color: #334155;">
        <li>Construir la Carta Gantt anual de evaluaciones articulada con DIA y ensayos SIMCE por nivel y asignatura.</li>
        <li>Aplicar el Instructivo Previo de solicitud de pruebas con plazos de revisión e impresión de 2 semanas.</li>
      </ul>
    </div>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15;">▶️ Cápsula de Video Unidad 1</span>
        <span style="background: rgba(16,185,129,0.2); color: #34d399; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">⚡ Miniatura Ahorro de Datos</span>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); padding: 36px 16px; text-align: center;">
        <div style="width: 54px; height: 54px; margin: 0 auto 10px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14.5px; font-weight: 800;">Cápsula 1.1: Cómo gestionar el Doble Calendario y la Carta Gantt UTP</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 18:40 min · Clic para abrir video sin saturar la red escolar</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF, Guías y Modelos Base Editables</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 01 - Planificación Anual DIA/SIMCE y Configuración Syscol.pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Presentación de la Clase · 1.4 MB</span>
        </div>
        <a href="#pdf1" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📊 Modelo Base - Carta Gantt y Doble Calendario Anual de Pruebas.xlsx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Plantilla Editable UTP / Docentes · 310 KB</span>
        </div>
        <a href="#gantt1" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Instructivo Previo de Entrega de Evaluaciones (2 Semanas).docx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Formato Oficial para Profesores · 240 KB</span>
        </div>
        <a href="#inst1" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 1;

-- Seccion 2 (Curso 2): Unidad 2 - Chequeo de Pruebas, Impresion y Protocolo de Aplicacion Fisica SIMCE
UPDATE mdl_course_sections
SET
  name = 'Unidad 2: Aplicación Ensayos SIMCE',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 2 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Chequeo Técnico, Impresión y Protocolo de Aplicación Física de Ensayos SIMCE</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo realizar la revisión técnica de las pruebas entregadas por los profesores, su impresión, agrupación por curso y el <strong>Protocolo de Aplicación Física en Aula</strong> (retiro preventivo de celulares, disposición de sala, llenado de hoja óptica y acta de incidencias).</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15;">▶️ Cápsula de Video Unidad 2</span>
        <span style="background: rgba(16,185,129,0.2); color: #34d399; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">⚡ Miniatura Ahorro de Datos</span>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #0f766e 0%, #0f172a 100%); padding: 36px 16px; text-align: center;">
        <div style="width: 54px; height: 54px; margin: 0 auto 10px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14.5px; font-weight: 800;">Cápsula 2.1: Chequeo de Instrumentos y Protocolo Físico de Ensayos SIMCE</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 21:30 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF, Guías y Protocolos de Aula</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 02 - Estándares de Aplicación Física de Ensayos SIMCE.pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Presentación de la Clase · 1.8 MB</span>
        </div>
        <a href="#pdf2" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Protocolo de Chequeo de Prueba y Aplicación en Sala.docx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Incluye retiro de celulares y control de hojas · 390 KB</span>
        </div>
        <a href="#prot2" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📘 Guía Práctica 02 - Pauta de Validación Pre-Impresión UTP.pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Checklist de Calidad Curricular · 640 KB</span>
        </div>
        <a href="#guia2" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 2;

-- Seccion 3 (Curso 2): Unidad 3 - Lector Optico, Syscol, Estandares (Insuficiente/Elemental/Adecuado) e IDPS
UPDATE mdl_course_sections
SET
  name = 'Unidad 3: Lector, Syscol e IDPS',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 3 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Lectura Óptica, Carga en Syscol, Niveles de Logro e Indicadores IDPS</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Procesamiento de las pruebas por el lector óptico y subida inmediata a <strong>Syscol</strong>. Monitoreo del avance en los Estándares Indicativos de Desempeño, análisis de resultados en niveles <strong>Insuficiente, Elemental y Adecuado</strong>, seguimiento de los Indicadores de Desarrollo Personal y Social (IDPS) y cobertura curricular articulada.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15;">▶️ Cápsula de Video Unidad 3</span>
        <span style="background: rgba(16,185,129,0.2); color: #34d399; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">⚡ Miniatura Ahorro de Datos</span>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #312e81 0%, #0f172a 100%); padding: 36px 16px; text-align: center;">
        <div style="width: 54px; height: 54px; margin: 0 auto 10px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14.5px; font-weight: 800;">Cápsula 3.1: Paso por Lector Óptico, Subida a Syscol y Lectura de Niveles de Logro</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 25:10 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF y Tableros de Monitoreo</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 03 - Lector Óptico, Syscol y Estándares de Aprendizaje (DIA/SIMCE).pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Presentación de la Clase · 2.1 MB</span>
        </div>
        <a href="#pdf3" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📊 Plantilla Excel - Monitoreo de Niveles (Insuficiente, Elemental, Adecuado) e IDPS.xlsx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Tablero de Control UTP · 450 KB</span>
        </div>
        <a href="#xls3" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📘 Guía Práctica 03 - Articulación de Cobertura Curricular por Asignatura.pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Guía Metodológica · 890 KB</span>
        </div>
        <a href="#guia3" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 3;

-- Seccion 4 (Curso 2): Unidad 4 - Retroalimentacion, Acta de Toma de Decisiones y Restitucion del Saber
UPDATE mdl_course_sections
SET
  name = 'Unidad 4: Actas y Restitución del Saber',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 4 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Retroalimentación, Acta de Toma de Decisiones y Restitución del Saber</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo conducir los diálogos pedagógicos entre UTP, Evaluador, Jefes de Departamento y Profesores tras obtener los datos en Syscol. Registro formal en el <strong>Acta de Reunión de Toma de Decisiones</strong> y aplicación de la <strong>Restitución del Saber</strong>: detener el avance mecánico de cobertura curricular para restituir los aprendizajes descendidos antes de pasar a la siguiente unidad.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15;">▶️ Cápsula de Video Unidad 4</span>
        <span style="background: rgba(16,185,129,0.2); color: #34d399; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">⚡ Miniatura Ahorro de Datos</span>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 36px 16px; text-align: center;">
        <div style="width: 54px; height: 54px; margin: 0 auto 10px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14.5px; font-weight: 800;">Cápsula 4.1: Diálogo UTP-Docente, Acta de Decisiones y Restitución del Saber</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 23:15 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF y Modelos Base Editables</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 04 - Metodología de Restitución del Saber en el Aula.pdf</strong>
          <span style="font-size: 11.5px; color: #64748b;">Presentación de la Clase · 1.6 MB</span>
        </div>
        <a href="#pdf4" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Acta de Reunión de Análisis de Resultados y Toma de Decisiones.docx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Evidencia lista para PME / Superintendencia · 380 KB</span>
        </div>
        <a href="#acta4" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 13.5px; color: #0f172a; display: block;">📘 Planificación de Aula - Semana de Restitución de Aprendizajes Críticos.docx</strong>
          <span style="font-size: 11.5px; color: #64748b;">Plantilla para Profesores y Jefes de Depto. · 320 KB</span>
        </div>
        <a href="#plan4" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 4;

-- Seccion 5 (Curso 2): Evaluaciones y Certificacion (48 Horas)
UPDATE mdl_course_sections
SET
  name = 'Evaluaciones y Certificación (48h)',
  visible = 1,
  summaryformat = 1,
  summary = '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #eab308; border-radius: 16px; padding: 24px;">
    <span style="background: #0f172a; color: #facc15; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px;">CERTIFICACIÓN DE PERFECCIONAMIENTO DOCENTE · 48 HORAS</span>
    <h3 style="margin: 12px 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">Evaluaciones del Programa y Emisión de Certificado Oficial</h3>
    <p style="margin: 0 0 18px 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Al completar los controles formativos y entregar tu Acta y Plan de Restitución del Saber con datos de Syscol, obtendrás tu <strong>Certificado Oficial de Perfeccionamiento Docente por 48 Horas Cronológicas</strong>.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
        <div style="font-size: 11.5px; font-weight: 800; color: #ca8a04; text-transform: uppercase;">1. Evaluación Diagnóstica</div>
        <div style="font-size: 15.5px; font-weight: 800; color: #0f172a; margin: 4px 0;">Diagnóstico Inicial CPA</div>
        <div style="font-size: 12.5px; color: #64748b;">Obligatorio al iniciar la Unidad 1.</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
        <div style="font-size: 11.5px; font-weight: 800; color: #ca8a04; text-transform: uppercase;">2. Controles por Unidad (40%)</div>
        <div style="font-size: 15.5px; font-weight: 800; color: #0f172a; margin: 4px 0;">Quizzes Unidades 1 a 4</div>
        <div style="font-size: 12.5px; color: #64748b;">Evaluación automatizada en plataforma.</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
        <div style="font-size: 11.5px; font-weight: 800; color: #ca8a04; text-transform: uppercase;">3. Trabajo Aplicado (60%)</div>
        <div style="font-size: 15.5px; font-weight: 800; color: #0f172a; margin: 4px 0;">Acta y Plan de Restitución</div>
        <div style="font-size: 12.5px; color: #64748b;">Aplicado a un curso real de tu establecimiento.</div>
      </div>
      <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 16px;">
        <div style="font-size: 11.5px; font-weight: 800; color: #059669; text-transform: uppercase;">4. Diploma 48 Horas</div>
        <div style="font-size: 15.5px; font-weight: 800; color: #065f46; margin: 4px 0;">Certificado EducaResponde</div>
        <div style="font-size: 12.5px; color: #047857;">Descarga automática con validación QR.</div>
      </div>
    </div>
  </div>
</div>'
WHERE course = 2 AND section = 5;


-- ============================================================================
-- 4. CREAR LOS OTROS 3 CURSOS DE LA TRANSCRIPCION EN LA BASE DE DATOS MOODLE
--    - Curso ID=3: Foco 1 - Liderazgo Institucional, CPA y Modelo de Gestion UTP/PME (60 hrs)
--    - Curso ID=4: Foco 3 - Gestion Normativa, Reglamentos (Decreto 67/RICE), Dictamenes e Inclusion (45 hrs)
--    - Curso ID=5: Foco 4 - Innovacion Pedagogica: STEM, ABP, Aprendizaje Socioemocional y Plan Lector (50 hrs)
-- ============================================================================

INSERT INTO mdl_course (id, category, sortorder, fullname, shortname, idnumber, summary, summaryformat, format, showgrades, newsitems, startdate, enddate, relativedatesmode, marker, maxbytes, legacyfiles, showreports, visible, visibleold, downloadcontent, groupmode, groupmodeforce, defaultgroupingid, lang, calendartype, theme, timecreated, timemodified, requested, enablecompletion, completionnotify, cacherev, originalcourseid, showactivitydates, showcompletionconditions)
VALUES
(3, 3, 30001, 'Liderazgo Institucional, Núcleo Pedagógico y Modelo de Gestión UTP / PME', 'Liderazgo-UTP-PME', 'FOCO-01-LGI02', '<p>Comunidades Profesionales de Aprendizaje Docente (CPA), fortalecimiento del núcleo pedagógico y aprendizajes profundos. Incluye el Modelo de Gestión para Jefes UTP, Directivos y Evaluadores con modelos base descargables (Carta Gantt, actas, carpeta de evidencias PME/Deprov/Superintendencia en tiempo real y vinculación con el medio).</p>', 1, 'onetopic', 1, 5, 1783209600, 0, 0, 0, 5242880, 0, 1, 1, 1, NULL, 0, 0, 0, 'es', '', '', 1783202960, 1785018922, 0, 1, 0, 1785019500, NULL, 1, 1),
(4, 12, 120001, 'Gestión Normativa, Protocolos (Decreto 67 / RICE), Dictámenes e Inclusión', 'Normativa-D67-RICE', 'FOCO-03-NFR01', '<p>Ciclos de cumplimiento normativo escolar: articulación entre Reglamento de Evaluación (Decreto 67), Reglamento Interno de Convivencia Educativa (RICE), protocolos de repitencia, resguardo y adecuaciones curriculares para la diversidad e inclusión, más compendio de dictámenes y ordinarios.</p>', 1, 'onetopic', 1, 5, 1783209600, 0, 0, 0, 5242880, 0, 1, 1, 1, NULL, 0, 0, 0, 'es', '', '', 1783202960, 1785018922, 0, 1, 0, 1785019500, NULL, 1, 1),
(5, 6, 60001, 'Innovación Pedagógica: Enfoque STEM, ABP, Aprendizaje Socioemocional y Fomento Lector', 'STEM-ABP-Lector', 'FOCO-04-IPS02', '<p>Estrategias de innovación en el aula y fuera de ella: enfoque STEM, Aprendizaje Basado en Proyectos (ABP), salidas pedagógicas, robótica escolar, recreos interactivos, módulo de Aprendizaje Socioemocional a través del juego y Gestión Bibliotecaria (ludotecas, bibliorecreos y estaciones modulares de lectura).</p>', 1, 'onetopic', 1, 5, 1783209600, 0, 0, 0, 5242880, 0, 1, 1, 1, NULL, 0, 0, 0, 'es', '', '', 1783202960, 1785018922, 0, 1, 0, 1785019500, NULL, 1, 1)
ON DUPLICATE KEY UPDATE
  fullname = VALUES(fullname),
  shortname = VALUES(shortname),
  idnumber = VALUES(idnumber),
  summary = VALUES(summary),
  format = VALUES(format),
  visible = 1,
  cacherev = cacherev + 200;

-- Actualizar conteo de cursos en las categorias correspondientes
UPDATE mdl_course_categories SET coursecount = 1 WHERE id IN (1, 3, 6, 12);

-- Crear contextos de curso (contextlevel = 50) para los cursos 3, 4 y 5
INSERT INTO mdl_context (id, contextlevel, instanceid, path, depth, locked)
VALUES
(103, 50, 3, '/1/16/17/103', 4, 0),
(104, 50, 4, '/1/25/26/104', 4, 0),
(105, 50, 5, '/1/18/20/105', 4, 0)
ON DUPLICATE KEY UPDATE
  path = VALUES(path),
  depth = VALUES(depth);

-- Crear metodo de matriculacion manual para los cursos 3, 4 y 5
INSERT INTO mdl_enrol (id, enrol, status, courseid, sortorder, enrolperiod, roleid, timecreated, timemodified)
VALUES
(103, 'manual', 0, 3, 0, 86400, 5, 1783202960, 1783202960),
(104, 'manual', 0, 4, 0, 86400, 5, 1783202960, 1783202960),
(105, 'manual', 0, 5, 0, 86400, 5, 1783202960, 1783202960)
ON DUPLICATE KEY UPDATE
  status = 0,
  courseid = VALUES(courseid);

-- Matricular a Angel Eastman (userid = 2) en los cursos 3, 4 y 5 para que aparezcan en su Area Personal
INSERT INTO mdl_user_enrolments (id, status, enrolid, userid, timestart, timeend, modifierid, timecreated, timemodified)
VALUES
(103, 0, 103, 2, 0, 0, 2, 1783202961, 1783202961),
(104, 0, 104, 2, 0, 0, 2, 1783202961, 1783202961),
(105, 0, 105, 2, 0, 0, 2, 1783202961, 1783202961)
ON DUPLICATE KEY UPDATE
  status = 0;

-- Asignar rol de Profesor con permiso de edicion (roleid = 3) a Angel Eastman (userid = 2) en los cursos 3, 4 y 5
INSERT INTO mdl_role_assignments (id, roleid, contextid, userid, timemodified, modifierid, component, itemid, sortorder)
VALUES
(103, 3, 103, 2, 1783202961, 2, '', 0, 0),
(104, 3, 104, 2, 1783202961, 2, '', 0, 0),
(105, 3, 105, 2, 1783202961, 2, '', 0, 0)
ON DUPLICATE KEY UPDATE
  roleid = 3;


-- ============================================================================
-- 5. SECCIONES Y UNIDADES DEL CURSO 2 (ID=3):
-- "Foco 1: Liderazgo Institucional, Núcleo Pedagógico y Modelo de Gestión UTP / PME" (60 Horas)
-- ============================================================================

INSERT INTO mdl_course_sections (course, section, name, summary, summaryformat, sequence, visible, timemodified)
VALUES
(3, 0, 'Introducción y Kit Directivo/UTP', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: 16px; padding: 28px; margin-bottom: 20px; border-bottom: 4px solid #eab308;">
    <span style="display: inline-block; background: #eab308; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-bottom: 10px;">FOCO 1 · LIDERAZGO INSTITUCIONAL &amp; MODELO DE GESTIÓN UTP</span>
    <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 800; color: #ffffff;">Liderazgo Institucional, Núcleo Pedagógico y Modelo de Gestión UTP / PME</h2>
    <p style="margin: 0 0 16px 0; font-size: 14.5px; line-height: 1.6; color: #cbd5e1;">
      Programa diseñado para <strong>Directores, Jefes UTP, Curriculistas, Evaluadores, Jefes de Departamento y Docentes Líderes</strong>. Desarrolla Comunidades Profesionales de Aprendizaje (CPA) centradas en el núcleo pedagógico y los aprendizajes profundos, entregando todos los <strong>insumos y modelos base editables</strong> para gestionar el PME, las actas y la carpeta de evidencias en tiempo real ante la Deprov y Superintendencia.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: #f8fafc;">
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">⏱️ <strong>Certificación:</strong> 60 Horas Cronológicas de Perfeccionamiento</span>
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">📂 <strong>Incluye:</strong> Modelos Base Editables (Carta Gantt, Actas, Protocolos y Carpeta PME)</span>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(3, 1, 'Unidad 1: CPA y Núcleo Pedagógico', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 1 · 15 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Comunidades Profesionales de Aprendizaje (CPA) y Aprendizajes Profundos</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Actualización en los nuevos paradigmas educativos nacionales y globales para fortalecer el núcleo pedagógico, instalar diseños pedagógicos institucionales y asegurar un seguimiento y monitoreo oportuno del aprendizaje.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 1 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 1.1: Cómo liderar Comunidades Profesionales de Aprendizaje (CPA)</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 22:10 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF y Modelos Pedagógicos</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 01 - Fortalecimiento del Núcleo Pedagógico y CPA.pdf</strong><span style="font-size: 11.5px; color: #64748b;">1.7 MB</span></div>
        <a href="#pdf" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Diseño Pedagógico Institucional y Monitoreo de Aula.docx</strong><span style="font-size: 11.5px; color: #64748b;">410 KB</span></div>
        <a href="#doc" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(3, 2, 'Unidad 2: Insumos UTP Primera Vez', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 2 · 15 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">"Soy UTP por Primera Vez": Kit de Insumos, Carta Gantt y Actas</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Guía paso a paso con todos los insumos indispensables para ejercer la jefatura UTP, coordinación curricular o jefatura de departamento: planificación anual, Carta Gantt de evaluaciones, actas de reunión directiva y seguimiento docente.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 2 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #0f766e 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 2.1: Los Insumos Clave del Jefe UTP Mes a Mes</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 24:30 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Modelos Base Listos para Aplicar</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📊 Modelo Base - Carta Gantt Anual de Gestión UTP.xlsx</strong><span style="font-size: 11.5px; color: #64748b;">350 KB</span></div>
        <a href="#xls" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Pack de Actas UTP - Calendario de Evaluaciones y Reunión de Ciclo.docx</strong><span style="font-size: 11.5px; color: #64748b;">480 KB</span></div>
        <a href="#actas" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(3, 3, 'Unidad 3: Evidencias PME / Deprov', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 3 · 15 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Gestión de Evidencias en Tiempo Real para PME, Deprov y Superintendencia</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo terminar con el estrés de fin de año buscando evidencias para el PME o fiscalizaciones: método de registro inmediato para dejar el acta escaneada y subida el mismo día en que ocurre una visita a la Deprov o actividad del PME, permitiendo a fin de año simplemente compactar y entregar.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 3 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #312e81 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 3.1: Hábito de Registro Inmediato para PME, Deprov y Superintendencia</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 20:15 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Modelos de Evidencias y Actas</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Acta de Gestión y Visita Deprov / Superintendencia.docx</strong><span style="font-size: 11.5px; color: #64748b;">290 KB</span></div>
        <a href="#deprov" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Guía 03 - Estructura de Carpeta Digital de Evidencias PME al Día.pdf</strong><span style="font-size: 11.5px; color: #64748b;">1.2 MB</span></div>
        <a href="#pme" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(3, 4, 'Unidad 4: Vinculación con el Medio', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 4 · 15 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Vinculación con el Medio, Consejos Asesores y Gestión de Proyectos</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Articulación estratégica entre el colegio, la sociedad, la industria, la educación terciaria y espacios comunitarios. Creación de Consejos Asesores, mesas de trabajo público-privadas y formulación estructurada de proyectos para obtener recursos.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 4 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 4.1: Mesas de Trabajo, Consejos Asesores y Postulación a Proyectos</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 21:40 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Modelos Base de Vinculación</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Acta Constitutiva de Consejo Asesor y Mesa de Trabajo.docx</strong><span style="font-size: 11.5px; color: #64748b;">310 KB</span></div>
        <a href="#consejo" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Guía 04 - Formulación Estructurada de Proyectos Escolares.pdf</strong><span style="font-size: 11.5px; color: #64748b;">1.5 MB</span></div>
        <a href="#proy" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(3, 5, 'Evaluaciones y Certificación (60h)', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #eab308; border-radius: 16px; padding: 24px;">
    <span style="background: #0f172a; color: #facc15; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px;">CERTIFICACIÓN OFICIAL · 60 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 12px 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">Evaluación Final y Certificación en Liderazgo y Gestión UTP</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Completa los controles de cada módulo y entrega la Carta Gantt Anual de Evaluaciones + Carpeta de Evidencias PME de tu establecimiento para descargar tu certificado por <strong>60 horas de perfeccionamiento</strong>.</p>
  </div>
</div>', 1, '', 1, 1785019500)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  summary = VALUES(summary),
  visible = 1;


-- ============================================================================
-- 6. SECCIONES Y UNIDADES DEL CURSO 3 (ID=4):
-- "Foco 3: Gestión Normativa, Protocolos (Decreto 67 / RICE), Dictámenes e Inclusión" (45 Horas)
-- ============================================================================

INSERT INTO mdl_course_sections (course, section, name, summary, summaryformat, sequence, visible, timemodified)
VALUES
(4, 0, 'Introducción y Buscador Normativo', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: 16px; padding: 28px; margin-bottom: 20px; border-bottom: 4px solid #eab308;">
    <span style="display: inline-block; background: #eab308; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-bottom: 10px;">FOCO 3 · CUMPLIMIENTO NORMATIVO, PROTOCOLOS E INCLUSIÓN</span>
    <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 800; color: #ffffff;">Gestión Normativa, Protocolos (Decreto 67 / RICE), Dictámenes e Inclusión</h2>
    <p style="margin: 0 0 16px 0; font-size: 14.5px; line-height: 1.6; color: #cbd5e1;">
      Articulación práctica entre el <strong>Reglamento de Evaluación (Decreto 67)</strong>, el <strong>Reglamento Interno de Convivencia Educativa (RICE)</strong> y todos los protocolos de resguardo, repitencia, seguimiento pedagógico y adecuaciones curriculares para la diversidad e inclusión. Incluye repositorio de <strong>Dictámenes, Ordinarios y Decretos</strong> con modelos base listos para aplicar.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: #f8fafc;">
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">⏱️ <strong>Certificación:</strong> 45 Horas Cronológicas de Perfeccionamiento Docente</span>
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">⚖️ <strong>Repositorio:</strong> Dictámenes, Ordinarios, Decreto 67, Decreto 83 y RICE</span>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(4, 1, 'Unidad 1: Decreto 67 y Repitencia', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 1 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Reglamento de Evaluación (Decreto 67) y Protocolo de Repitencia</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo actualizar el Reglamento de Evaluación y construir paso a paso el <strong>Protocolo de Repitencia y Acompañamiento Pedagógico</strong> con su modelo base editable listo para incorporar en la normativa del colegio.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 1 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 1.1: Cómo elaborar e implementar el Protocolo de Repitencia (Decreto 67)</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 19:45 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Clases PDF y Modelo Base de Protocolo</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Modelo Base - Protocolo de Repitencia y Acompañamiento Decreto 67.docx</strong><span style="font-size: 11.5px; color: #64748b;">360 KB</span></div>
        <a href="#rep" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Clase 01 - Articulación del Reglamento de Evaluación Escolar.pdf</strong><span style="font-size: 11.5px; color: #64748b;">1.5 MB</span></div>
        <a href="#d67" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(4, 2, 'Unidad 2: RICE y Protocolos', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 2 · 11 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Reglamento Interno de Convivencia Educativa (RICE) y Protocolos de Resguardo</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Articulación normativa entre el RICE, los protocolos de resguardo de derechos, debido proceso y estrategias para asegurar un clima de aula favorable para el aprendizaje.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(4, 3, 'Unidad 3: Adecuaciones e Inclusión', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 3 · 11 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">¿Cómo Adecuar una Prueba? Decreto 83, Diversidad y Apoyo a las Familias</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Guía práctica para profesores de aula y equipos PIE sobre cómo adecuar instrumentos de evaluación y experiencias de aprendizaje bajo los nuevos decretos y leyes de inclusión.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(4, 4, 'Unidad 4: Compendio de Dictámenes', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 4 · 11 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Compendio y Buscador de Dictámenes, Ordinarios y Política Regulatoria</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Índice práctico de consulta rápida de dictámenes y ordinarios de la Superintendencia de Educación y MINEDUC organizados por caso frecuente en los colegios.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(4, 5, 'Evaluaciones y Certificación (45h)', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #eab308; border-radius: 16px; padding: 24px;">
    <span style="background: #0f172a; color: #facc15; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px;">CERTIFICACIÓN OFICIAL · 45 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 12px 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">Evaluación Final y Certificación en Gestión Normativa e Inclusión</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Aprobación de cuestionarios normativos y aplicación de un protocolo o adecuación curricular con nota mínima 4.0.</p>
  </div>
</div>', 1, '', 1, 1785019500)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  summary = VALUES(summary),
  visible = 1;


-- ============================================================================
-- 7. SECCIONES Y UNIDADES DEL CURSO 4 (ID=5):
-- "Foco 4: Innovación Pedagógica: Enfoque STEM, ABP, Aprendizaje Socioemocional y Fomento Lector" (50 Horas)
-- ============================================================================

INSERT INTO mdl_course_sections (course, section, name, summary, summaryformat, sequence, visible, timemodified)
VALUES
(5, 0, 'Introducción y Recursos de Aula', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: 16px; padding: 28px; margin-bottom: 20px; border-bottom: 4px solid #eab308;">
    <span style="display: inline-block; background: #eab308; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-bottom: 10px;">FOCO 4 · INNOVACIÓN PEDAGÓGICA, STEM, ABP Y PLAN LECTOR</span>
    <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 800; color: #ffffff;">Innovación Pedagógica: Enfoque STEM, ABP, Aprendizaje Socioemocional y Fomento Lector</h2>
    <p style="margin: 0 0 16px 0; font-size: 14.5px; line-height: 1.6; color: #cbd5e1;">
      Espacio para que las y los profesores accedan a <strong>capacitación metodológica y paquetes completos de clases listas para el aula</strong> (planificación, presentación PPT/PDF, video, guía y evaluación para estudiantes, como la unidad modelo de <em>Cambio Climático</em>). Incluye los módulos de <strong>Robótica, Recreos Interactivos, Salidas Pedagógicas, Aprendizaje Socioemocional mediante el juego y Gestión Bibliotecaria (Ludotecas y Bibliorecreos)</strong>.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: #f8fafc;">
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">⏱️ <strong>Certificación:</strong> 50 Horas Cronológicas de Perfeccionamiento Docente</span>
      <span style="background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 8px;">🧪 <strong>Laboratorios Interactivos:</strong> Ciencias, STEM, Teatro, Música y Periodismo</span>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(5, 1, 'Unidad 1: STEM, ABP y Clases Listas', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px; margin-bottom: 18px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 1 · 14 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Enfoque STEM, Aprendizaje Basado en Proyectos (ABP) y Paquete de Clase "Cambio Climático"</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Cómo diseñar e implementar proyectos interdisciplinarios STEM y ABP junto a los Laboratorios Interactivos (teatro, música, periodismo y ciencias). Incluye el paquete completo de ejemplo para el aula sobre <strong>Cambio Climático</strong> (Planificación + PPT/PDF + Guía + Video + Evaluación).</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
    <div style="background: #0f172a; color: #ffffff; border-radius: 14px; padding: 18px;">
      <span style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; color: #facc15; display: block; margin-bottom: 10px;">▶️ Cápsula de Video Unidad 1 (Miniatura Ligera)</span>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style="display: block; border-radius: 10px; border: 1px solid #334155; text-decoration: none; background: linear-gradient(135deg, #065f46 0%, #0f172a 100%); padding: 34px 16px; text-align: center;">
        <div style="width: 50px; height: 50px; margin: 0 auto 8px auto; border-radius: 99px; background: #eab308; color: #0f172a; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900;">▶</div>
        <div style="color: #ffffff; font-size: 14px; font-weight: 800;">Cápsula 1.1: Metodología ABP/STEM y Clase Modelo "Cambio Climático"</div>
        <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Duración: 21:00 min · Clic para reproducir</div>
      </a>
    </div>
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px;">
      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 10px;">📚 Material Digital del Profesor para el Aula</div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📄 Planificación + PPT Clase: Cambio Climático (Enfoque STEM/ABP).pdf</strong><span style="font-size: 11.5px; color: #64748b;">2.4 MB</span></div>
        <a href="#stem1" style="background: #0f172a; color: #ffffff; font-size: 11.5px; font-weight: 700; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
      <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center;">
        <div><strong style="font-size: 13.5px; color: #0f172a; display: block;">📝 Guía del Estudiante + Evaluación Formativa: Cambio Climático.docx</strong><span style="font-size: 11.5px; color: #64748b;">520 KB</span></div>
        <a href="#guia-cc" style="background: #eab308; color: #0f172a; font-size: 11.5px; font-weight: 800; text-decoration: none; padding: 6px 12px; border-radius: 6px;">Descargar</a>
      </div>
    </div>
  </div>
</div>', 1, '', 1, 1785019500),

(5, 2, 'Unidad 2: Robótica y Salidas Pedagógicas', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 2 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Robótica para Pequeños, Recreos Interactivos y Salidas Pedagógicas</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Integración de robótica educativa inicial, implementación de recreos entretenidos con paneles interactivos fuera del aula y diseño curricular de salidas pedagógicas para el desarrollo de competencias ciudadanas.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(5, 3, 'Unidad 3: Aprendizaje Socioemocional', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 3 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Aprendizaje Socioemocional a través del Juego y Material Concreto</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Estrategias y uso de material concreto diseñado para la interacción en aula, permitiendo que las y los estudiantes aprendan formas de convivir, estar y comunicar a través del juego.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(5, 4, 'Unidad 4: Ludotecas y Bibliorecreos', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 14px; padding: 20px;">
    <span style="background: #fef9c3; color: #854d0e; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 6px;">UNIDAD 4 · 12 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 8px 0; font-size: 20px; font-weight: 800; color: #0f172a;">Gestión Bibliotecaria: Ludotecas, Bibliorecreos y Estaciones Modulares de Lectura</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Modelamiento vivo de la biblioteca escolar mediante ludotecas, bibliorecreos, estaciones modulares de aprendizaje lector y encuestas de acercamiento y comprensión lectora.</p>
  </div>
</div>', 1, '', 1, 1785019500),

(5, 5, 'Evaluaciones y Certificación (50h)', '<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 10px 0;">
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #eab308; border-radius: 16px; padding: 24px;">
    <span style="background: #0f172a; color: #facc15; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px;">CERTIFICACIÓN OFICIAL · 50 HORAS CRONOLÓGICAS</span>
    <h3 style="margin: 12px 0 8px 0; font-size: 22px; font-weight: 800; color: #0f172a;">Evaluación Final y Certificación en Innovación Pedagógica</h3>
    <p style="margin: 0; font-size: 14.5px; line-height: 1.6; color: #475569;">Completa las actividades prácticas para obtener tu certificado oficial de perfeccionamiento docente por <strong>50 horas cronológicas</strong>.</p>
  </div>
</div>', 1, '', 1, 1785019500)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  summary = VALUES(summary),
  visible = 1;

-- Incrementar revisiones de tema y plantillas para forzar refresco visual en Moodle
UPDATE mdl_config SET value = UNIX_TIMESTAMP() WHERE name IN ('themerev', 'jsrev', 'templaterev', 'localcachedirpurged');
